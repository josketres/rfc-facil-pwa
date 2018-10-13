import 'zone.js/dist/zone-node';
import * as path from 'path';
import * as fs from 'fs';
import {enableProdMode} from '@angular/core';
import {renderModuleFactory} from '@angular/platform-server';
import {AppPrerenderModuleNgFactory} from './dist/prerender/main';

const minify = require('html-minifier').minify;

const distFolder = './dist/rfc-facil-pwa';

const index = fs
  .readFileSync(path.resolve(__dirname, `${distFolder}/index.html`), 'utf8')
  .toString();

enableProdMode();

renderToHtml('/index.html', distFolder)
  .then(() => console.log('success'));

async function renderToHtml(url: string, folderPath: string) {

  const html = await renderModuleFactory(AppPrerenderModuleNgFactory, {
    url,
    document: index
  });

  fs.writeFile(folderPath + '/index.html', minify(html), (err => {
    if (err) {
      throw err;
    }
  }));

}
