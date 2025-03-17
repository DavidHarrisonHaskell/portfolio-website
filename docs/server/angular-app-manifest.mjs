
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: './',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 700, hash: '9c9d518abb8f96d507cf55bc86600c9cdd111665345f433515f24adca60e775e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1032, hash: '074d1783e5bee82c0b42bb90b1020d208aed5e00d6e6871b2d1d17bd173b7b8c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-M2VJIZ63.css': {size: 56, hash: 'T/uAenF+huo', text: () => import('./assets-chunks/styles-M2VJIZ63_css.mjs').then(m => m.default)}
  },
};
