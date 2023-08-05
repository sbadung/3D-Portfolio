# 3D Portfolio
Portfolio Website developed using Vite, React and Typescript along with the [Framer Motion](https://www.framer.com/motion/) library for smooth animations and the [React Spline Library](https://github.com/splinetool/react-spline) for [Spline](https://spline.design/) 3D models

Preview: **https://sbadung.github.io/3D-Portfolio/**


## Folder Structure
```sh
public
└── logo.png
src
├── App.css
├── App.tsx
├── components
│   ├── AnimatedLogo.tsx
│   ├── Hero.tsx
│   ├── Loader.tsx
│   └── Navbar.tsx
├── context
├── index.css
├── main.tsx
└── vite-env.d.ts
```

## Scripts
Install all the dependencies

### `npm i`
See [`package.json`](./package.json)

### `npm run dev`
Run the application locally in developer mode. 

The application runs on http://localhost:5173

## `npm run build`
Builds the application for production. Files are saved in the [`dist`](./dist/) directory. 

## Deployment on GitHub
Learn more: https://vitejs.dev/guide/static-deploy.html
See the configuration for deployment on GitHub: [vite.config.ts](./vite.config.ts)

```sh
npm run build
git add dist -f
git commit -m "dist version $DIST_VERSION"
git subtree push --prefix dist origin gh-pages
```   

## Template
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration
If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list