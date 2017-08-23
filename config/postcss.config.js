module.exports = {
  plugins: [
    require('postcss-cssnext')(),
    require('postcss-pxtorem')({
      rootValue: 100,
      propWhiteList: [],
    }),
  ],
};
