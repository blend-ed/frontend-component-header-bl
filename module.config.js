module.exports = {
    localModules: [
      // This line intercepts imports for the header's stylesheet and redirects them to the `src` directory of your local checkout of the header, which is where index.scss lives.
      { moduleName: '@edx/frontend-component-header/dist', dir: '../frontend-component-header', dist: 'src' },
      // This line catches JavaScript imports and points them at that same src directory.
      { moduleName: '@edx/frontend-component-header', dir: '../frontend-component-header', dist: 'src' },
    ],
};