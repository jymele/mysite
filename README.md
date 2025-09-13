# Joel Ymele Leki - Portfolio

A modern, interactive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Skills Dashboard**: Chart.js visualization with filtering capabilities
- **Animated Timeline**: Career journey with modal details
- **Project Showcase**: Portfolio items with detailed modals
- **Modern Tech Stack**: Next.js 14, TypeScript, Framer Motion
- **Performance Optimized**: Server-side rendering and optimized assets

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Charts**: Chart.js with react-chartjs-2
- **Icons**: Lucide React
- **HTTP Client**: Axios

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout component
│   └── page.tsx          # Main page component
├── components/            # React components
│   ├── About.tsx         # Professional summary section
│   ├── Experience.tsx    # Career timeline with modals
│   ├── Footer.tsx        # Site footer
│   ├── Hero.tsx          # Hero section with contact info
│   ├── Modal.tsx         # Reusable modal component
│   ├── Navigation.tsx    # Sticky navigation header
│   ├── Projects.tsx      # Project showcase cards
│   └── Skills.tsx        # Interactive skills chart
├── context/              # React Context providers
│   └── ModalContext.tsx # Modal state management
├── data/                 # Static data
│   └── portfolio.ts      # Portfolio content and data
├── types/               # TypeScript type definitions
│   └── index.ts         # Shared interfaces
└── next.config.js       # Next.js configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Features Overview

### Interactive Skills Section

- Click chart categories to filter skills
- Animated skill cards with Framer Motion
- Responsive grid layout

### Experience Timeline

- Chronological career journey
- Click timeline items for detailed information
- Modal popups with formatted content

### Project Showcase

- Portfolio project cards
- Hover animations and interactions
- Detailed project descriptions in modals

### Modal System

- Context-based state management
- Keyboard navigation (ESC to close)
- Backdrop click to close
- Smooth animations with Framer Motion

## Customization

### Adding New Content

1. **Skills**: Update `skillsData` in `data/portfolio.ts`
2. **Experience**: Add items to `experienceData` array
3. **Projects**: Add items to `projectsData` array

### Styling

The project uses Tailwind CSS with custom configurations in `tailwind.config.js`. Global styles and component-specific styles are in `app/globals.css`.

### Animations

Animations are handled with Framer Motion. Key animation patterns:

- Fade in on scroll (viewport intersection)
- Stagger animations for lists
- Hover and tap interactions
- Modal enter/exit transitions

## Performance Considerations

- Next.js automatic code splitting
- Image optimization with Next.js Image component
- Lazy loading of components
- Optimized bundle size with tree shaking

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Progressive enhancement approach

## License

© 2025 Joel Ymele Leki. All rights reserved.
