const routes = {
  home: "/",
  auth:{
    index: "/auth",
    signin: {
      index: "/auth/signin",
      password:{
        reset: {
          index: "/auth/signin/password/reset",
          codeVerification: "/auth/signin/password/reset/verification",
        },
        change: "/auth/signin/password/change",
      },
    },
    signup: {
      index: "/auth/signup",
      agreement:{
        index: "/agreement",
        terms: "/agreement/terms",
        conditions: "/agreement/conditions"
      },
    }
  },
  support: {
    index: "/support",
    contact: "/support/contact",
    about: "/support/about",
    privacy: "/support/about/privacy",
    terms: "/support/about/terms",
    welcome: "/support/about/welcome",
    page: "/support/about/page",
  }
};

export default routes;
