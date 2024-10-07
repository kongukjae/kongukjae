/**
 * 웹팩 설정 파일
 * 이 파일은 웹팩의 설정을 정의하며, 애플리케이션의 빌드 프로세스를 관리합니다.
 */

const path = require('path'); // 경로 관련 모듈을 가져옵니다.
const HtmlWebpackPlugin = require('html-webpack-plugin'); // HTML 파일을 생성하는 플러그인을 가져옵니다.

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
    filename: 'bundle.js',

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
        test: /\.jsx?$/,

        /**
         * 제외할 파일
         * 이 key는 처리하지 않을 파일을 설정.
         */
        exclude: /node_modules/,

        use: {
          /**
           * 로더
           * 이 key는 파일을 변환하는 데 사용할 로더를 설정.
           */
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      /**
       * 템플릿 파일
       * 이 key는 HTML 파일을 생성하는 데 사용할 템플릿을 설정.
       */
      template: './index.html',

      /**
       * 주입 위치
       * 이 key는 스크립트가 HTML 파일의 어느 위치에 주입될지를 설정.
       */
      inject: 'body',
    }),
  ],

  resolve: {
    /**
     * 확장자
     * 이 key는 모듈을 가져올 때 사용할 파일 확장자를 설정.
     */
    extensions: ['.js', '.jsx'],
  },
};
