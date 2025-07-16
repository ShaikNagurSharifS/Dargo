## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

## Frontworkers Portfolio

A modern, enterprise-level developer portfolio built with Vite, React, TypeScript, and TailwindCSS.

## Features
- ⚡ Fast Vite build and HMR
- 🎨 Fully responsive, mobile-first design
- 🌗 Dark/Light mode toggle
- 🔍 Searchable project carousel
- 🧩 Modular, reusable UI components
- 🗂️ Scalable folder structure for enterprise apps
- 📝 Contact form with UX feedback
- 🛠️ TypeScript for type safety

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Installation
```bash
npm install
# or
yarn install
```

### Development
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

### Build for Production
```bash
npm run build
# or
yarn build
```

### Preview Production Build
```bash
npm run preview
# or
yarn preview
```

## Project Structure
```
src/
  components/      # Reusable UI components (Button, Card, ThemeSwitcher, etc.)
  layout/          # MainLayout and layout-related components
  pages/           # Section components (HeroSection, AboutSection, etc.)
  assets/          # Images and static assets
  App.tsx          # App entry point
  main.tsx         # Vite/React entry
  index.css        # TailwindCSS and global styles
```

## Customization
- Edit `src/components/PortfolioProfile.tsx` to update your info, projects, and experience.
- Add new sections or components as needed for your use case.
- Tailwind config is in `tailwind.config.js`.

## Dark/Light Mode
- Toggle using the button in the header.
- Theme is persisted in localStorage and uses system preference by default.

## Credits
- Built with [Vite](https://vitejs.dev/), [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), and [TailwindCSS](https://tailwindcss.com/).

## License
MIT
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
