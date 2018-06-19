export const imports = {
  'components/Button/Button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-button-button" */ 'components/Button/Button.mdx'),
}
