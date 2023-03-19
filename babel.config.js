module.exports = function (api) {
  api.cache(true);

  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@components": "./src/components",
            "@stores": "./src/stores",
            "@utils": "./src/utils",
            "@AppTypes": "./src/types",
            "@ComponentTypes": "./src/types/components",
						"@VGraphql": "./src/graphql"
          },
        },
      ],
    ],
  };
};
