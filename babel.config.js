module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "module:metro-react-native-babel-preset"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            "@shared": "./src/shared",
            "@features": "./src/features",
            "@entry": "./src/entry",
          },
        },
      ],
    ],
  };
};
