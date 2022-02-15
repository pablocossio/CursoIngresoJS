import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'unity-ui',
  description: '小而美的UI组件库',
  favicon: './unity-ui.png',
  logo: './logo.png',
  // favicon:
  //   'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  // logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  // mode:'site',
  outputPath: 'docs-dist',
  history: {
    type: 'hash',
  },
  alias: {
    img: '@/assets/img',
  },
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/EasySimple/unity-ui',
    },
  ],
  publicPath: '/unity-ui/',
  styles: [
    `
      .__dumi-default-menu-header h1 {
        display: none;
      }
      .__dumi-default-menu-logo {
        width: 150px !important;
      }
      @media only screen and (max-width: 767px) {
        .__dumi-default-navbar-logo:not([data-plaintext]) {
          padding: 0 50px;
          color: transparent;
        }
      }
    `,
  ],
  // more config: https://d.umijs.org/config
});
