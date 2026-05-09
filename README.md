# MofeOluwa Oladeji — Portfolio

A modern, immersive portfolio experience for **MofeOluwa Oladeji**, a graphic designer, animator, and digital artist. Built with HTML, Tailwind CSS (CDN), and vanilla JavaScript.

## ✨ Highlights

- Hero with animated background gradients, parallax micro-interactions, and bold typography.
- Rich About, Skills, and Experience sections showcasing personality, tools, and collaborations.
- Filterable project showcase with category chips, autoplay previews, and cinematic hover states.
- Interactive project modal featuring videos/images, tool stack, galleries, and external links.
- Testimonials, collaborations, and contact form for a complete professional presence.
- Fully responsive layout with smooth transitions and scroll-triggered reveals.

## 🎨 Design System

The site uses a dark studio-inspired palette defined in `styles.css`, mirrored in the inline Tailwind CDN config, and aligned with `tailwind.config.js`:

| Token | Value | Usage |
| --- | --- | --- |
| `bg` | `#0f0f0f` | Main page background |
| `bg-alt` | `#161616` | Alternate section backgrounds |
| `surface` | `#1c1c1c` | Cards, panels, and overlays |
| `accent` | `#64ffda` | Buttons, highlights, and emphasis |
| `muted` | `#888888` | Secondary text |
| `text-primary` | `#f5f5f5` | Main text color |

## 🚀 Getting Started

Open `index.html` in any modern browser. No build step required.

For live-reload development, you can serve the project locally with any static server. Example using `npm`:

```bash
npm install -g serve
serve .
```

## 📁 Structure

- `index.html` — Main landing page with hero, portfolio, experience, testimonials, FAQ, updates, and contact sections.
- `about.html` — About page with profile details and creative process.
- `project.html` — Dynamic project detail page.
- `experience.html` — Dynamic experience detail page.
- `styles.css` — Shared styling and motion layers for every page.
- `script.js` — Shared homepage interactivity and the portfolio project data source.
- `experience-data.js` — Experience data used by the homepage and `experience.html`.
- `project-page.js` — Project detail rendering and navigation logic.
- `experience-page.js` — Experience detail rendering and navigation logic.
- `tailwind.config.js` — Shared Tailwind tokens matching the CDN configuration.

## 🛠️ Customization Tips

- Update the `window.projects` array in `script.js` to add or edit portfolio entries.
- Update `window.experiences` in `experience-data.js` to add or edit experience entries.
- Swap imagery or videos by replacing the URLs in the data objects.
- Adjust the shared dark palette in `styles.css`, `tailwind.config.js`, and the inline CDN config blocks when needed.

## 📬 Contact Form

The contact form currently uses a `mailto:` action. Connect it to a backend service or form handler (for example Formspree, Netlify Forms, or Supabase) for production-ready submissions.

## 📄 License

All visuals and assets referenced via external URLs remain the property of their respective owners. Replace with your own media for production use.
