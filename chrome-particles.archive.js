/* ============================================================
   ARCHIVED — ambient particle "gas trail" swarm + custom cursor
   ============================================================
   Pulled out of chrome.js during the ground-up minimalist rebuild
   (removed from every live page per explicit request, kept here for
   possible reuse later - the full git history also has every prior
   iteration of this system if more context than this snapshot is ever
   needed).

   This file is NOT linked from any HTML page right now - it does
   nothing until it's wired back in. To reinstate it:

   1. Add `<div class="custom-cursor" aria-hidden="true"></div>` and
      `<div class="custom-cursor-dot" aria-hidden="true"></div>` back
      near the top of <body> on every page (they were removed from the
      current markup along with this code).
   2. Restore the matching CSS (`.custom-cursor`, `.custom-cursor-dot`,
      `.cursor-visible`, `.cursor-hover`, `.has-custom-cursor`,
      `#gas-canvas`) - check git history on styles.css from before this
      rebuild commit for the exact rules.
   3. Splice the two IIFEs below back into chrome.js. The particle swarm
      block expects three hooks from the page-transition code that used
      to live alongside it: `loaderCenter` (the {x,y} the swarm targets
      during a page-load reveal, or null), `triggerBurst`/
      `triggerGentleRelease` (functions the transition code calls), and
      `setCanvasFront(bool)` (bumps #gas-canvas above the page-loader
      cover during a transition). The current simplified page-transition
      in chrome.js doesn't have any of these - you'd need to either
      restore the old burst-driven transition (see git history) or wire
      these as no-ops if you just want the swarm without the load-state
      choreography.

   Below is the exact code as it existed immediately before removal.
   ============================================================ */

(function () {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var root = document.documentElement;

  function isLight() {
    return root.getAttribute('data-theme') !== 'dark';
  }

  /* These three would normally come from the page-transition system -
     stubbed here so this file is at least syntactically self-contained
     if someone drops it in on its own. Replace with the real hooks per
     the reintegration notes above. */
  var loaderCenter = null;
  var triggerBurst = function () {};
  var triggerGentleRelease = function () { loaderCenter = null; };
  function setCanvasFront(active) {
    var c = document.getElementById('gas-canvas');
    if (c) c.style.zIndex = active ? '151' : '';
  }

  /* ---------------- custom cursor (dot + ring, magnetic) ---------------- */
  var fine = window.matchMedia('(pointer: fine)').matches;
  var cursorRing = document.querySelector('.custom-cursor');
  var cursorDot = document.querySelector('.custom-cursor-dot');

  if (fine && cursorRing) {
    root.classList.add('has-custom-cursor');
    var cx = window.innerWidth / 2, cy = window.innerHeight / 2;
    var ringX = cx, ringY = cy;
    var dotX = cx, dotY = cy;
    var shown = false;

    window.addEventListener('pointermove', function (e) {
      cx = e.clientX;
      cy = e.clientY;
      if (!shown) {
        shown = true;
        ringX = cx; ringY = cy;
        dotX = cx; dotY = cy;
        root.classList.add('cursor-visible');
      }
    }, { passive: true });

    document.addEventListener('mouseleave', function () {
      root.classList.remove('cursor-visible');
      shown = false;
    });

    var magnets = document.querySelectorAll('.btn-primary, .nav-cta, .menu-toggle, .theme-switch, .arrow-btn');

    function magnetOffsetFor(px, py) {
      var range = 90;
      var best = null;
      for (var m = 0; m < magnets.length; m++) {
        var r = magnets[m].getBoundingClientRect();
        var ex = r.left + r.width / 2;
        var ey = r.top + r.height / 2;
        var edgeDist = Math.max(0, Math.hypot(px - ex, py - ey) - Math.max(r.width, r.height) / 2);
        if (edgeDist < range && (!best || edgeDist < best.d)) best = { x: ex, y: ey, d: edgeDist };
      }
      if (!best) return { x: 0, y: 0 };
      var t = 1 - best.d / range;
      var strength = t * t * 0.82;
      return { x: (best.x - px) * strength, y: (best.y - py) * strength };
    }

    (function tickCursor() {
      var ringEase = reducedMotion ? 1 : 0.16;
      var dotEase = reducedMotion ? 1 : 0.4;
      var magnet = reducedMotion ? { x: 0, y: 0 } : magnetOffsetFor(cx, cy);
      ringX += (cx + magnet.x - ringX) * ringEase;
      ringY += (cy + magnet.y - ringY) * ringEase;
      dotX += (cx + magnet.x * 0.6 - dotX) * dotEase;
      dotY += (cy + magnet.y * 0.6 - dotY) * dotEase;
      cursorRing.style.left = ringX + 'px';
      cursorRing.style.top = ringY + 'px';
      if (cursorDot) {
        cursorDot.style.left = dotX + 'px';
        cursorDot.style.top = dotY + 'px';
      }
      requestAnimationFrame(tickCursor);
    })();

    var CURSOR_HOVER_SELECTOR = 'a, button, .tile, .project-card, .filter-btn, .faq-trigger, .arrow-btn, .dot, input, textarea';
    document.addEventListener('mouseover', function (e) {
      if (e.target.closest(CURSOR_HOVER_SELECTOR)) root.classList.add('cursor-hover');
    });
    document.addEventListener('mouseout', function (e) {
      var stillHovering = e.relatedTarget && e.relatedTarget.closest && e.relatedTarget.closest(CURSOR_HOVER_SELECTOR);
      if (e.target.closest(CURSOR_HOVER_SELECTOR) && !stillHovering) {
        root.classList.remove('cursor-hover');
      }
    });

    if (!reducedMotion) {
      magnets.forEach(function (el) {
        el.addEventListener('mousemove', function (e) {
          var r = el.getBoundingClientRect();
          var relX = e.clientX - (r.left + r.width / 2);
          var relY = e.clientY - (r.top + r.height / 2);
          el.style.transform = 'translate(' + (relX * 0.25) + 'px, ' + (relY * 0.25) + 'px)';
        });
        el.addEventListener('mouseleave', function () { el.style.transform = ''; });
      });
    }
  }

  /* ---------------- fluid particle swarm ---------------- */
  {
    var canvas = document.createElement('canvas');
    canvas.id = 'gas-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    document.body.insertBefore(canvas, document.body.firstChild);
    if (loaderCenter) canvas.style.zIndex = '151';
    var ctx = canvas.getContext('2d');
    var dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resizeCanvas() {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    var HUE_START = 200;
    var HUE_SPAN = 170;
    function refreshGasColors() {}
    window.__refreshGasColors = refreshGasColors;

    var COUNT = reducedMotion ? 240 : 520;
    var cx = window.innerWidth / 2;
    var cy = window.innerHeight / 2;
    var particles = [];
    for (var i = 0; i < COUNT; i++) {
      var seedAngle = Math.random() * Math.PI * 2;
      var seedR = Math.random() * 368;
      particles.push({
        x: cx + Math.cos(seedAngle) * seedR,
        y: cy + Math.sin(seedAngle) * seedR,
        vx: 0,
        vy: 0,
        len: 3.5 + Math.random() * 5,
        width: 1.3 + Math.random() * 1.4,
        wobblePhase: Math.random() * Math.PI * 2,
        wobbleFreq: 0.6 + Math.random() * 0.8
      });
    }

    var prevTx = cx, prevTy = cy;
    var smoothVX = 0, smoothVY = 0;

    var lastMoveTime = -99999;
    window.addEventListener('pointermove', function (e) {
      cx = e.clientX;
      cy = e.clientY;
      lastMoveTime = performance.now();
    }, { passive: true });
    function trackTouch(e) {
      if (!e.touches || !e.touches[0]) return;
      cx = e.touches[0].clientX;
      cy = e.touches[0].clientY;
      lastMoveTime = performance.now();
    }
    window.addEventListener('touchstart', trackTouch, { passive: true });
    window.addEventListener('touchmove', trackTouch, { passive: true });

    var burstAt = -99999;
    function burstNow() {
      var origin = loaderCenter || { x: cx, y: cy };
      burstAt = performance.now();
      for (var b = 0; b < particles.length; b++) {
        var bp = particles[b];
        var bdx = bp.x - origin.x;
        var bdy = bp.y - origin.y;
        var bdist = Math.sqrt(bdx * bdx + bdy * bdy) || 0.001;
        var kick = 18 + Math.random() * 9;
        bp.vx += (bdx / bdist) * kick;
        bp.vy += (bdy / bdist) * kick;
      }
    }
    document.addEventListener('click', burstNow);
    triggerBurst = burstNow;

    var releasing = false;
    var releaseStart = 0;
    var RELEASE_DURATION = 1900;
    function gentleRelease() {
      releasing = true;
      releaseStart = performance.now();
    }
    triggerGentleRelease = gentleRelease;

    var convergeStart = null;
    var CONVERGE_DURATION = 1100;

    var hoverBoost = 0;

    var pullK = reducedMotion ? 0.03 : 0.078;
    var swirlK = reducedMotion ? 0.006 : 0.012;
    var repelK = 0.9;
    var damping = 0.82;
    var baseSpacing = 368;
    var loaderSpacing = baseSpacing * 2.1;

    function drawGas(t) {
      var inTransition = !!loaderCenter;

      var releaseMult = 1;
      var releaseT = 0;
      if (releasing) {
        releaseT = Math.min(1, (t - releaseStart) / RELEASE_DURATION);
        releaseMult = 1 - releaseT;
        if (releaseT >= 1) {
          releasing = false;
          loaderCenter = null;
          inTransition = false;
          setCanvasFront(false);
        }
      }

      var convergeMult = 1;
      if (inTransition && !releasing) {
        if (convergeStart === null) convergeStart = t;
        convergeMult = Math.min(1, (t - convergeStart) / CONVERGE_DURATION);
        convergeMult = 0.22 + convergeMult * 0.78;
      } else if (!inTransition) {
        convergeStart = null;
      }

      var idleFor = t - lastMoveTime;
      var idleT = inTransition ? 0 : Math.max(0, Math.min(1, (idleFor - 600) / 2600));
      var pulseSin = Math.sin(t * 0.0014);
      var ambientSpacingPulse = 1 + idleT * pulseSin * 0.3;

      if (releasing) {
        var disperseBlur = 0.9 + Math.pow(releaseT, 1.4) * 13;
        canvas.style.filter = 'blur(' + disperseBlur.toFixed(1) + 'px)';
      } else if (inTransition) {
        var loaderBlur = (0.5 + Math.sin(t * 0.0023) * 0.5) * 0.9;
        canvas.style.filter = loaderBlur > 0.05 ? 'blur(' + loaderBlur.toFixed(1) + 'px)' : 'none';
      } else {
        var blurPulse = 0.5 + pulseSin * 0.5;
        var blurAmount = idleT * (0.35 + blurPulse * 0.55);
        canvas.style.filter = blurAmount > 0.05 ? 'blur(' + blurAmount.toFixed(1) + 'px)' : 'none';
      }

      var hovering = root.classList.contains('cursor-hover');
      hoverBoost += ((hovering ? 1 : 0) - hoverBoost) * 0.12;

      var BURST_WAVE_SPEED = 1.0;
      var BURST_PULSE_WIDTH = 520;
      var BURST_FORCE = 20;
      var BURST_ATTACK = 0.22;
      var sinceBurst = t - burstAt;

      var target = loaderCenter || { x: cx, y: cy };
      var tx = target.x;
      var ty = target.y;
      var waveAmp = inTransition ? 1.5 : 0.3;
      var waveSpatialFreq = inTransition ? 0.022 : 0.045;
      var waveTimeFreq = inTransition ? 0.0046 : 0.0032;
      var loaderSpacingPulse = inTransition ? 0.4 + (0.5 + Math.sin(t * 0.0016) * 0.5) * 0.9 : 1;
      var spacing = (inTransition ? loaderSpacing * loaderSpacingPulse : baseSpacing * ambientSpacingPulse) * (1 + hoverBoost * 0.7);
      var spacing2 = spacing * spacing;
      var pullMult = convergeMult * releaseMult;

      var rawVX = tx - prevTx;
      var rawVY = ty - prevTy;
      prevTx = tx;
      prevTy = ty;
      if (inTransition) {
        smoothVX = 0;
        smoothVY = 0;
      } else {
        smoothVX += (rawVX - smoothVX) * 0.18;
        smoothVY += (rawVY - smoothVY) * 0.18;
      }
      var moveSpeed = Math.hypot(smoothVX, smoothVY);
      var speedFactor = Math.min(1, moveSpeed / 22);
      var moveDirX = moveSpeed > 0.01 ? smoothVX / moveSpeed : 0;
      var moveDirY = moveSpeed > 0.01 ? smoothVY / moveSpeed : 0;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'lighter';
      ctx.lineCap = 'round';

      var cellSize = Math.max(spacing, 40);
      var grid = Object.create(null);
      for (var gi = 0; gi < particles.length; gi++) {
        var gp = particles[gi];
        var gkey = (Math.floor(gp.x / cellSize)) + '_' + (Math.floor(gp.y / cellSize));
        (grid[gkey] || (grid[gkey] = [])).push(gi);
      }

      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        var dx = tx - p.x;
        var dy = ty - p.y;
        var dist = Math.sqrt(dx * dx + dy * dy) || 0.001;
        var wave = Math.sin(t * waveTimeFreq - dist * waveSpatialFreq);

        var burstArrival = dist / BURST_WAVE_SPEED;
        var burstEnergy = 0;
        var burstLocalT = sinceBurst - burstArrival;
        if (sinceBurst >= 0 && burstLocalT > -40 && burstLocalT < BURST_PULSE_WIDTH) {
          var burstW = Math.max(0, Math.min(1, (burstLocalT + 40) / (BURST_PULSE_WIDTH + 40)));
          burstEnergy = burstW < BURST_ATTACK
            ? Math.sin((burstW / BURST_ATTACK) * Math.PI * 0.5)
            : Math.cos(((burstW - BURST_ATTACK) / (1 - BURST_ATTACK)) * Math.PI * 0.5);
        }

        var ax = (dx / dist) * pullK * dist * pullMult;
        var ay = (dy / dist) * pullK * dist * pullMult;
        ax += (-dy / dist) * swirlK * Math.min(dist, 340) * pullMult;
        ay += (dx / dist) * swirlK * Math.min(dist, 340) * pullMult;

        if (speedFactor > 0.001) {
          var alongMove = (p.x - tx) * moveDirX + (p.y - ty) * moveDirY;
          var trailBias = Math.max(0, -alongMove) / (dist + 40);
          var pullTrail = 1 - Math.min(0.72, trailBias * speedFactor * 2.1);
          ax *= pullTrail;
          ay *= pullTrail;

          var flutter = Math.sin(t * 0.006 * p.wobbleFreq + p.wobblePhase) * speedFactor * 1.7;
          ax += (-dy / dist) * flutter;
          ay += (dx / dist) * flutter;
        }

        ax += -(dx / dist) * wave * waveAmp;
        ay += -(dy / dist) * wave * waveAmp;

        if (!inTransition) {
          var pAngle = Math.atan2(p.y - ty, p.x - tx);
          var blobLobe = Math.sin(pAngle * 2 + t * 0.00065) * 0.5
            + Math.sin(pAngle * 3 - t * 0.00095 + 1.7) * 0.32
            + Math.sin(pAngle * 5 + t * 0.00042 + 4.2) * 0.22;
          var blobPush = idleT * blobLobe * dist * 0.026;
          ax += -(dx / dist) * blobPush;
          ay += -(dy / dist) * blobPush;
        }

        ax += -(dx / dist) * burstEnergy * BURST_FORCE;
        ay += -(dy / dist) * burstEnergy * BURST_FORCE;

        var cgx = Math.floor(p.x / cellSize);
        var cgy = Math.floor(p.y / cellSize);
        for (var ngx = cgx - 1; ngx <= cgx + 1; ngx++) {
          for (var ngy = cgy - 1; ngy <= cgy + 1; ngy++) {
            var cell = grid[ngx + '_' + ngy];
            if (!cell) continue;
            for (var ci = 0; ci < cell.length; ci++) {
              var j = cell[ci];
              if (j === i) continue;
              var q = particles[j];
              var ddx = p.x - q.x;
              var ddy = p.y - q.y;
              var d2 = ddx * ddx + ddy * ddy;
              if (d2 < spacing2 && d2 > 0.0001) {
                var d = Math.sqrt(d2);
                var push = (spacing - d) / spacing * repelK;
                ax += (ddx / d) * push;
                ay += (ddy / d) * push;
              }
            }
          }
        }

        p.vx = (p.vx + ax * 0.06) * damping;
        p.vy = (p.vy + ay * 0.06) * damping;
        p.x += p.vx;
        p.y += p.vy;

        var speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        var angle = speed > 0.02 ? Math.atan2(p.vy, p.vx) : Math.atan2(ty - p.y, tx - p.x) + Math.PI / 2;
        var hueAngle = Math.atan2(p.y - ty, p.x - tx);
        var hue = HUE_START + ((hueAngle + Math.PI) / (Math.PI * 2)) * HUE_SPAN;
        var glow = 0.5 + wave * 0.25 + burstEnergy * 1.6;
        var alpha = (0.3 + Math.min(0.45, speed * 0.9) + glow * 0.2) * (reducedMotion ? 0.75 : 1);
        var light = isLight();
        var lightness = light ? 40 : 66;
        lightness += burstEnergy * (light ? 32 : 26);
        if (light) alpha = Math.min(1, alpha * 1.6);

        var nearT = Math.max(0, 1 - dist / 230);
        var farT = Math.min(1, Math.max(0, (dist - 260) / 320));
        var extremeT = Math.max(nearT, farT);
        var extremePulse = 0.5 + Math.sin(t * 0.0055 + p.wobblePhase) * 0.5;
        var extremeSize = 0.02 + extremePulse * 0.06;
        var sizeMult = 1 - extremeT * (1 - extremeSize);

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(angle);
        ctx.strokeStyle = 'hsla(' + hue + ', 82%, ' + lightness + '%, ' + alpha + ')';
        ctx.lineWidth = p.width * (1 + burstEnergy * 0.7) * sizeMult;
        var len = p.len * (1 + burstEnergy * 0.9) * sizeMult;
        ctx.beginPath();
        ctx.moveTo(-len / 2, 0);
        ctx.lineTo(len / 2, 0);
        ctx.stroke();
        ctx.restore();
      }
    }

    requestAnimationFrame(function loop(t) { drawGas(t); requestAnimationFrame(loop); });
  }
})();
