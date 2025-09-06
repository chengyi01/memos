import { o as observer, u as useTranslate, f as useCurrentUser, w as workspaceStore, R as Routes, j as jsxRuntimeExports, G as Link, y as Separator, B as Button, H as identityProviderServiceClient, J as extractIdentityProviderIdFromName, K as IdentityProvider_Type, k as absolutifyLink, e as c } from "./index.js";
import { r as reactExports } from "./leaflet-vendor.js";
import { A as AuthFooter } from "./AuthFooter.js";
import { P as PasswordSignInForm } from "./PasswordSignInForm.js";
import "./mermaid-vendor.js";
import "./utils-vendor.js";
import "./katex-vendor.js";
import "./LocaleSelect.js";
const SignIn = observer(() => {
  const t = useTranslate();
  const currentUser = useCurrentUser();
  const [identityProviderList, setIdentityProviderList] = reactExports.useState([]);
  const workspaceGeneralSetting = workspaceStore.state.generalSetting;
  reactExports.useEffect(() => {
    if (currentUser) {
      window.location.href = Routes.ROOT;
    }
  }, []);
  reactExports.useEffect(() => {
    const fetchIdentityProviderList = async () => {
      const { identityProviders } = await identityProviderServiceClient.listIdentityProviders({});
      setIdentityProviderList(identityProviders);
    };
    fetchIdentityProviderList();
  }, []);
  const handleSignInWithIdentityProvider = async (identityProvider) => {
    const stateQueryParameter = `auth.signin.${identityProvider.title}-${extractIdentityProviderIdFromName(identityProvider.name)}`;
    if (identityProvider.type === IdentityProvider_Type.OAUTH2) {
      const redirectUri = absolutifyLink("/auth/callback");
      const oauth2Config = identityProvider.config?.oauth2Config;
      if (!oauth2Config) {
        c.error("Identity provider configuration is invalid.");
        return;
      }
      const authUrl = `${oauth2Config.authUrl}?client_id=${oauth2Config.clientId}&redirect_uri=${redirectUri}&state=${stateQueryParameter}&response_type=code&scope=${encodeURIComponent(
        oauth2Config.scopes.join(" ")
      )}`;
      window.location.href = authUrl;
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-4 sm:py-8 w-80 max-w-full min-h-svh mx-auto flex flex-col justify-start items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full py-4 grow flex flex-col justify-center items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex flex-row justify-center items-center mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "h-14 w-auto rounded-full shadow", src: workspaceGeneralSetting.customProfile?.logoUrl || "/logo.webp", alt: "" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "ml-2 text-5xl text-foreground opacity-80", children: workspaceGeneralSetting.customProfile?.title || "Memos" })
      ] }),
      !workspaceGeneralSetting.disallowPasswordAuth ? /* @__PURE__ */ jsxRuntimeExports.jsx(PasswordSignInForm, {}) : identityProviderList.length == 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "w-full text-2xl mt-2 text-muted-foreground", children: "Password auth is not allowed." }),
      !workspaceGeneralSetting.disallowUserRegistration && !workspaceGeneralSetting.disallowPasswordAuth && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "w-full mt-4 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: t("auth.sign-up-tip") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/auth/signup", className: "cursor-pointer ml-2 text-primary hover:underline", viewTransition: true, children: t("common.sign-up") })
      ] }),
      identityProviderList.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        !workspaceGeneralSetting.disallowPasswordAuth && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative my-4 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-background px-2 text-xs text-muted-foreground", children: t("common.or") }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full flex flex-col space-y-2", children: identityProviderList.map((identityProvider) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            className: "bg-background w-full",
            variant: "outline",
            onClick: () => handleSignInWithIdentityProvider(identityProvider),
            children: t("common.sign-in-with", { provider: identityProvider.title })
          },
          identityProvider.name
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AuthFooter, {})
  ] });
});
export {
  SignIn as default
};
