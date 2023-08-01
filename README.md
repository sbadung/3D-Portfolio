# 3D Portfolio
Personal portfolio website using Vite, Typescript, React along with the [React Spline Library](https://github.com/splinetool/react-spline) for [Spline](https://spline.design/) 3D Models and [Framer Motion](https://www.framer.com/motion/)

## Folder Structure
```sh
public
└── logo.png
src
├── App.css
├── App.tsx
├── components
│   ├── AnimatedLogo.tsx
│   └── Navbar.tsx
├── context
├── data
│   └── navigation_bar_items.json
├── index.css
├── main.tsx
└── vite-env.d.ts
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

### Tutoring
https://www.youtube.com/watch?v=lPJVi797Uy0
https://www.youtube.com/@DesignCodeTeam/videos
https://www.youtube.com/watch?v=uYp_ipIasYE
https://www.youtube.com/watch?v=fM2MA2PTckM
https://www.youtube.com/watch?v=T33NN_pPeNI
https://www.youtube.com/watch?v=FJ44qmE5odc