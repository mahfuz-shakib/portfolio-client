# Portfolio - Modern Frontend Developer Portfolio

A stunning, modern, and fully responsive portfolio website built with React, Vite, and Tailwind CSS. Features dynamic animations, smooth scrolling, and a beautiful UI that showcases your skills, projects, and experience.

## ✨ Features

- 🎨 **Modern UI/UX**: Clean, professional design with smooth animations
- 📱 **Fully Responsive**: Works perfectly on all devices and screen sizes
- 🎭 **Dynamic Animations**: Framer Motion powered smooth transitions
- ⌨️ **Typing Effect**: Animated typing effect in the hero section
- 🎯 **Smooth Scrolling**: Navigation with smooth scroll behavior
- 🌈 **Gradient Themes**: Beautiful gradient effects throughout
- 📝 **JSON-Based Data**: Easy to update portfolio information via JSON
- 🚀 **Lightning Fast**: Optimized with Vite for instant hot reload
- 🎨 **DaisyUI Components**: Pre-built beautiful components

## 🛠️ Tech Stack

- **React 19** - Latest React features
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS 4** - Utility-first CSS framework
- **DaisyUI 5** - Component library for Tailwind
- **Framer Motion** - Animation library
- **React Router** - Navigation
- **React Toastify** - Toast notifications
- **React Icons** - Icon library

## 📁 Project Structure

```
portfolio-client/
├── public/
│   └── portfolioData.json      # Portfolio data (JSON format)
├── src/
│   ├── components/             # React components
│   │   ├── Navbar.jsx          # Navigation bar
│   │   ├── MyInfo.jsx          # Hero section
│   │   ├── About.jsx           # About section
│   │   ├── Skills.jsx          # Skills showcase
│   │   ├── Projects.jsx        # Projects portfolio
│   │   ├── Experience.jsx      # Work experience
│   │   ├── Education.jsx       # Education & certifications
│   │   ├── Contact.jsx         # Contact form
│   │   ├── Footer.jsx          # Footer
│   │   └── TypingEffect.jsx    # Typing animation component
│   ├── Context/                # Context API for data
│   ├── hooks/                  # Custom React hooks
│   ├── pages/                  # Page components
│   ├── container/              # Reusable containers
│   ├── assets/                 # Static assets
│   └── main.jsx                # Entry point
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn or pnpm

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd portfolio-client
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## 📝 Customizing Your Portfolio

All portfolio data is stored in `public/portfolioData.json`. Simply update this JSON file with your information:

- Personal info (name, role, email, etc.)
- Social media links
- About section content
- Skills and technologies
- Projects and portfolios
- Work experience
- Education and certifications

## 🎨 Customization Options

### Themes

The portfolio uses DaisyUI themes. You can change the theme in `index.html`:

```html
<html lang="en" data-theme="dark">
```

Available themes: `light`, `dark`, `cupcake`, `bumblebee`, `emerald`, `corporate`, `synthwave`, `retro`, `cyberpunk`, `valentine`, `halloween`, `garden`, `forest`, `aqua`, `lofi`, `pastel`, `fantasy`, `wireframe`, `black`, `luxury`, `dracula`, `cmyk`, `autumn`, `business`, `acid`, `lemonade`, `night`, `coffee`, `winter`.

### Colors

Update colors in `tailwind.config.js` or use DaisyUI's theme system.

## 📄 Sections

1. **Hero Section**: Eye-catching introduction with typing effect
2. **About**: Personal background, interests, and strengths
3. **Skills**: Categorized technical skills and tools
4. **Projects**: Featured projects with details and links
5. **Experience**: Work history and achievements
6. **Education**: Academic background and certifications
7. **Contact**: Contact form and social links

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📜 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

Made with ❤️ using modern web technologies
