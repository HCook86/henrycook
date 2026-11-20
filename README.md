# Henry Cook Portfolio Website

Portfolio website hosted at [henrycook.net](https://henrycook.net).

## Getting started

```bash
docker compose up --build -d
```

## Architecture

- The web application is built with **React**.
- The React app is compiled inside Docker Compose using a **multi-stage build**.
- The compiled files are served by an **nginx** web server.
- The Docker Compose file includes the labels needed for proxying with
  [caddy-docker-proxy](https://github.com/lucaslorentz/caddy-docker-proxy).

## React development

In the project directory, you can run:

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page reloads when you make changes, and any lint errors are shown in the console.

### `npm test`

Launches the test runner in interactive watch mode.
See [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production into the `build` folder. React is bundled in production mode and optimized for the best performance.

The build is minified and the filenames include hashes, so the app is ready to be deployed.
See [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

> **Note:** this is a one-way operation. Once you eject, you can't go back.

Ejecting removes the single build dependency and copies all configuration files and transitive dependencies (webpack, Babel, ESLint, etc.) into the project, giving you full control over them. All other commands keep working but point to the copied scripts, so you can tweak them.

You never have to eject. The default setup is suitable for small and medium deployments.