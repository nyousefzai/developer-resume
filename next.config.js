const withPlugins = require("next-compose-plugins");
// const withOptimizedImages = require("next-optimized-images");
const withAntdLess = require("next-plugin-antd-less");

module.exports = withPlugins(
  [
    // [withOptimizedImages],
    [
      withAntdLess,
      {
        // optional
        // variables list https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
        modifyVars: { "@primary-color": "#503E9D" },
        // optional
        //lessVarsFilePath: "./src/styles/variables.less",
        // optional https://github.com/webpack-contrib/css-loader#object
        cssLoaderOptions: {},

        // Other Config Here...

        // there is issue with webpack5 for now comment it out unit there is solution
        // future: {
        //   webpack5: true,
        // },
      },
    ],
  ],
  {
    /* global config here ... */
  }
);
