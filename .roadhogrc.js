import pxtorem from 'postcss-pxtorem';
const path          = require('path');
const svgSpriteDirs = [
  require.resolve( 'antd-mobile' ).replace( /warn\.js$/ , '' ) ,
  // antd-mobile 内置svg
  // 业务代码本地私有 svg 存放目录
  path.resolve( __dirname , 'src/assets/icon' ) ,
];

export default {
  entry : {
    app: "./src/index.js",
    vendor: "./src/vendor.js"
  } ,
  hash: true,
  multipage: true,
  disableCSSModules : true ,
  publicPath : "/" ,
  svgSpriteLoaderDirs : svgSpriteDirs ,
  autoprefixer : {
    browsers : [
      "iOS >= 8" ,
      "Android >= 4"
    ]
  } ,
  proxy : {
    // "/api": {
    //   "target": "http://jsonplaceholder.typicode.com/",
    //   "changeOrigin": true,
    //   "pathRewrite": { "^/api" : "" }
    // }
  } ,
  extraPostCSSPlugins : [
    pxtorem( {
      rootValue : 100 ,
      propWhiteList : [] ,
    } ) ,
  ] ,
  // style 必须是 true
  extraBabelPlugins : [
    "transform-runtime" ,
    [
      "import" ,
      [
        { libraryName : "antd-mobile" , "libraryDirectory" : "lib" , "style" : true },
      ]
    ]
  ] ,
  env : {
    development : {
      extraBabelPlugins : [
        "dva-hmr"
      ]
    }
  }
};

