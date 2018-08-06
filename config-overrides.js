const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const { getLoader } = require("react-app-rewired");

function rewireSass(config, env) {
  const cssRules = getLoader(
    config.module.rules,
    rule => String(rule.test) === String(/\.css$/)
  );
  cssRules.test = /\.(s*)css$/;
  if (env === 'development') {
    cssRules.use = [
      ...cssRules.use,
      { loader: 'sass-loader' }
    ];
  } else {
    cssRules.loader = [
      ...cssRules.loader,
      { loader: 'sass-loader' }
    ];
  }

  return config;
}

function rewireTypescript(config, env) {
  const tsRules = getLoader(
    config.module.rules,
    rule => String(rule.test) === String(/\.(ts|tsx)$/)
  );

  if (env === 'development') {
    tsRules.use = [
      {
        loader: 'babel-loader',
        options: {
          babelrc: true,
          plugins: ['react-hot-loader/babel'],
        },
      },
      ...tsRules.use
    ];
  }

  return config
}

module.exports = function override(config, env) {
  config = rewireSass(config, env);
  config = rewireTypescript(config, env);
  config = rewireReactHotLoader(config, env);
  return config;
};
