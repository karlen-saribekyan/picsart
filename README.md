# Getting Started with PicsArt

## Introduction

PicsArt is a project built with [Create React App](https://github.com/facebook/create-react-app), providing a quick and easy way to set up a React application with modern tooling.

## Available Scripts

In the project directory, you can run the following scripts:

### `yarn start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts, so you can tweak them. At this point, you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Additional Scripts

Apart from the standard scripts provided by Create React App, this project includes some additional scripts:

- `lint`: Runs ESLint to check for any linting errors in the project.
- `lint:fix`: Runs ESLint with the `--fix` flag to automatically fix linting errors.
- `format`: Uses Prettier to format all JavaScript, JSX, TypeScript, CSS, Markdown, and JSON files in the project according to the defined configuration.
- `analyze`: Runs webpack-bundle-analyzer to analyze the bundle size of the production build.

## Server-Side Rendering (SSR)

To enable Server-Side Rendering (SSR), you can use the `ssr` script. It builds the app for production with SSR enabled and starts a development server to serve the SSR-enabled app.

To learn more about SSR in Create React App, please refer to the [SSR Guide](https://facebook.github.io/create-react-app/docs/server-side-rendering).

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
