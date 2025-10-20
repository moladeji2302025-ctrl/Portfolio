# MofeOluwa Oladeji — Portfolio

A modern, immersive portfolio experience for **MofeOluwa Oladeji**, a graphic designer, animator, and digital artist. Built with HTML, Tailwind CSS (CDN), and vanilla JavaScript.

## ✨ Highlights

- Hero with animated background gradients, parallax micro-interactions, and bold typography.
- Rich About, Skills, and Experience sections showcasing personality, tools, and collaborations.
- Filterable project showcase with category chips, autoplay previews, and cinematic hover states.
- Interactive project modal featuring videos/images, tool stack, galleries, and external links.
- Testimonials, collaborations, and contact form for a complete professional presence.
- Fully responsive layout with smooth transitions and scroll-triggered reveals.

## 🎨 Color Palette

The warm brown palette is centralized in `tailwind.config.js` and mirrored for the CDN build:

| Token | Hex | Usage |
| --- | --- | --- |
| `primary` | `#8B4513` | Rich brown for call-to-action accents |
| `secondary` | `#A0522D` | Warm sienna for hover states and depth |
| `accent` | `#1E1E24` | Dark typography and UI chrome |
| `background` | `#FEF6B6` | Soft parchment page backdrop |
| `surface` | `#FFF3D1` | Elevated cards and panels |
| `muted` | `#6B7280` | Secondary text |
| `highlight` | `#F4E4CD` | Gentle sepia wash for chips and badges |

## 🚀 Getting Started

Open `index.html` in any modern browser. No build step required.

For live-reload development, you can serve the project locally with any static server. Example using `npm`:

```bash
npm install -g serve
serve .
```

## 📁 Structure

- `index.html` — Main page with all sections and modal container.
- `styles.css` — Custom styling and motion layers augmenting Tailwind.
- `script.js` — Interactivity, project data, filters, modal logic, animations.
- `tailwind.config.js` — Flipaclip-inspired color tokens (`primary`, `secondary`, `accent`, `background`, `surface`, `muted`, `highlight`) and shared design primitives.

## 🛠️ Customization Tips

- Update the `projects` array in `script.js` to add or edit portfolio entries.
- Swap imagery or videos by replacing the URLs in the data objects.
- Adjust the color palette once in `tailwind.config.js` (mirrored in the inline CDN config) or fine-tune motion/glow layers inside `styles.css`.

## 📬 Contact Form

The contact form is front-end only and currently simulates a send confirmation. Connect it to a backend service or form handler (e.g., Formspree, Netlify, Supabase) to enable real submissions.

## 📄 License

All visuals and assets referenced via external URLs remain the property of their respective owners. Replace with your own media for production use.
