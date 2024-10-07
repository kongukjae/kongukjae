/**
 * 웹팩 설정 파일
 * 이 파일은 웹팩의 설정을 정의하며, 애플리케이션의 빌드 프로세스를 관리합니다.
 */

const path = require('path'); // 경로 관련 모듈을 가져옵니다.
const HtmlWebpackPlugin = require('html-webpack-plugin'); // HTML 파일을 생성하는 플러그인을 가져옵니다.
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');

module.exports = {
  /**
   * 애플리케이션의 진입점
   * 이 key는 애플리케이션의 시작 파일을 설정.
   */
  entry: './src/index.jsx',

  output: {
    /**
     * 출력 파일 이름
     * 이 key는 생성될 번들 파일의 이름을 설정.
     */
    filename: 'index.bundle.js',

    /**
     * 출력 경로
     * 이 key는 빌드된 파일이 저장될 경로를 설정.
     */
    path: path.resolve(__dirname, 'dist'),

    /**
     * 공개 경로
     * 이 key는 애플리케이션이 제공될 경로를 설정.
     */
    publicPath: '/',
  },

  module: {
    rules: [
      {
        /**
         * 파일 테스트
         * 이 key는 어떤 파일을 처리할지를 설정.
         */
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },

  resolve: {
    /**
     * 확장자
     * 이 key는 모듈을 가져올 때 사용할 파일 확장자를 설정.
     */
    extensions: ['*', '.js', '.jsx'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      /**
       * 템플릿 파일
       * 이 key는 HTML 파일을 생성하는 데 사용할 템플릿을 설정.
       */
      template: './index.html',
      filename: '../index.html',
      inject: true, // 이 옵션을 변경했습니다.
    }),
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/index.bundle/]),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, ''), // 이 부분을 변경했습니다.
    },
    hot: true,
    open: true,
  },
};
