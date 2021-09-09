declare namespace NpmLinkLessNamespace {
  export interface INpmLinkLess {
    'app-container': string;
    'app-page': string;
    root: string;
  }
}

declare const NpmLinkLessModule: NpmLinkLessNamespace.INpmLinkLess & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: NpmLinkLessNamespace.INpmLinkLess;
};

export = NpmLinkLessModule;
