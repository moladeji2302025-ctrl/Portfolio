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

The modern indigo/cyan palette is centralized in `tailwind.config.js` and mirrored for the CDN build:

| Token | Hex | Usage |
| --- | --- | --- |
| `primary` | `#6D5CFF` | Core accent for call-to-actions and focal UI |
| `secondary` | `#00B8D9` | Cyan glow for highlights and interactive depth |
| `accent` | `#1F2547` | Rich navy for typography and structure |
| `background` | `#F3F6FF` | Cool luminous page backdrop |
| `surface` | `#FFFFFF` | Elevated cards and modal panels |
| `muted` | `#5D668A` | Secondary text |
| `highlight` | `#E8EDFF` | Soft glassy layer for chips and badges |

## 🚀 Getting Started

Open `index.html` in any modern browser. No build step required.

For live-reload development, you can serve the project locally with any static server. Example using `npm`:

```bash
npm install -g serve
serve .
```

## 📁 Structure

- `index.html` — Main page with all sections and modal container.
- `experience-data.js` — Experience entries used by the homepage highlights and detail page.
- `styles.css` — Custom styling and motion layers augmenting Tailwind.
- `script.js` — Interactivity, project data, filters, modal logic, animations.
- `tailwind.config.js` — Flipaclip-inspired color tokens (`primary`, `secondary`, `accent`, `background`, `surface`, `muted`, `highlight`) and shared design primitives.

## 🛠️ Customization Tips

- Update the `projects` array in `script.js` to add or edit portfolio entries.
- Update `experience-data.js` to edit professional roles shown on the homepage and experience detail page.
- Swap imagery or videos by replacing the URLs in the data objects.
- Adjust the color palette once in `tailwind.config.js` (mirrored in the inline CDN config) or fine-tune motion/glow layers inside `styles.css`.

## 📬 Contact Form

The contact form is front-end only and currently simulates a send confirmation. Connect it to a backend service or form handler (e.g., Formspree, Netlify, Supabase) to enable real submissions.

## 📄 License

All visuals and assets referenced via external URLs remain the property of their respective owners. Replace with your own media for production use.
