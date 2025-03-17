
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 699, hash: '6d43cda1ad713e9185ed41bac5bdd8363bef21283cf1bbde4e069041587ceb51', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1031, hash: 'd2d5eb5cdcf63f7225d1c1243412d85df46eb7a042fe24183a44ce78ff1ed334', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-M2VJIZ63.css': {size: 56, hash: 'T/uAenF+huo', text: () => import('./assets-chunks/styles-M2VJIZ63_css.mjs').then(m => m.default)}
  },
};
