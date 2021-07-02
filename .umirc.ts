/*
 * @Author: wangyunbo
 * @Date: 2021-07-02 16:06:45
 * @LastEditors: wangyunbo
 * @LastEditTime: 2021-07-02 16:29:05
 * @Description: file content
 * @FilePath: \qiankunUmi\.umirc.ts
 */
import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'qiankunUmi',
  mode: 'site',
  hash: true,
  publicPath: process.env.NOW_DEPLOY ? '/' : '/qiankun/',
  base: process.env.NOW_DEPLOY ? '/' : '/qiankun',
  resolve: {
    includes: ['docs'],
    previewLangs: []
  },
  navs: [
    null,
    {
      title: '版本公告',
      children: [
        { title: '发布日志', path: '/'}
      ]
    }
  ],
  metas: [
    {
      name: 'keywords',
      content:
        'microfrontend, micor frontend'
    }
  ],
  theme: {
    '@c-primary': '#6451AB'
  },
  styles: [
    `html .__dumi-default-layout-hero {
      padding: 140px 0;
      background: #21144d no-repeat bottom/cover url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23f3c200' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23e26003' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23ecb500' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23d86200' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23e4a800' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23ce6400' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23dc9b00' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23c46500' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23d38f00' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23ba6600' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23ca8300' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23b16600' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");;
    }
    html .__dumi-default-layout-hero h1 {
      color: #f3f3f3;
      text-shadow: 0 2px 8px rgba(0,0,0,.3);
    }
    html .__dumi-default-layout-hero .markdown {
      color: #eee;
      text-shadow: 0 2px 5px rgba(0,0,0,.3);
    }`,
  ],
  favicon: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  // more config: https://d.umijs.org/config
});
