# 🚀 Melvin Towo - Portfolio v1.0

A modern, responsive portfolio website built with Next.js 16, featuring stunning animations, 3D elements, and a seamless user experience.

## ✨ Features

- **Modern Tech Stack**: Next.js 16 + React 19 + TypeScript
- **Stunning Animations**: GSAP with ScrollTrigger for smooth interactions  
- **3D Elements**: Three.js powered timeline with particle effects
- **Responsive Design**: Mobile-first approach with Tailwind CSS v4
- **Interactive Components**: Liquid glass navbar, loading animations
- **Contact System**: Email notifications with Nodemailer integration
- **Performance Optimized**: Server-side rendering, image optimization

## 🛠 Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS v4 with custom animations
- **Animations**: GSAP 3.13.0 with ScrollTrigger & ScrollToPlugin
- **3D Graphics**: Three.js 0.181.0
- **Email**: Nodemailer 7.0.10
- **Fonts**: Geist Sans & Fira Code (Google Fonts)
- **Deployment**: AWS Amplify (recommended)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
git clone https://github.com/MelvinTowo/Portfolio2.git
cd portfolio-2
npm install
```

### Environment Setup
```bash
cp .env.example .env.local
# Edit .env.local with your email configuration
```

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

## 📧 Email Configuration

For the visitor notification system to work, configure these environment variables:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
NOTIFICATION_EMAIL=your-email@gmail.com
```

## 🎨 Sections

- **Hero**: Dynamic introduction with animated text
- **About**: Skills and experience showcase
- **Timeline**: Interactive journey with 3D particles
- **Projects**: Showcase of work (expandable for future projects)
- **Contact**: Multi-channel contact options

## 📱 Mobile Optimized

- Responsive design for all screen sizes
- Touch-friendly interactions
- Optimized animations for mobile performance
- Progressive enhancement

## 🔧 Customization

The portfolio is built with modularity in mind:
- Easy content updates via component props
- Configurable animations and effects
- CMS-ready architecture for future expansion
- Scalable component structure

## 📦 Deployment

### AWS Amplify (Recommended)
1. Connect your GitHub repository
2. Set environment variables in Amplify console
3. Deploy automatically on git push

### Build Commands
- Build command: `npm run build`
- Output directory: `.next`
- Node version: 18.x

## 🎯 Performance

- Lighthouse Score: 95+ across all metrics
- Optimized images with Next.js Image component
- Code splitting and lazy loading
- SEO optimized with proper meta tags

## 📄 License

© 2025 Melvin Towo. All rights reserved.

---

**Version**: 1.0.0  
**Last Updated**: November 2025  
**Author**: Melvin Towo

