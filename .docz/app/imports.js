export const imports = {
  'components/Button/Button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-button-button" */ 'components/Button/Button.mdx'),
  'components/Card/Card.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-card-card" */ 'components/Card/Card.mdx'),
  'components/Spinner/Spinner.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-spinner-spinner" */ 'components/Spinner/Spinner.mdx'),
}
