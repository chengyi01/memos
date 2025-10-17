import { o as observer, a as useNavigateTo, g as useSearchParams, h as absolutifyLink, d as authServiceClient, i as initialUserStore, j as jsxRuntimeExports, L as Loader } from "./index.js";
import { r as reactExports } from "./leaflet-vendor.js";
import { l as last } from "./utils-vendor.js";
import "./mermaid-vendor.js";
import "./katex-vendor.js";
const AuthCallback = observer(() => {
  const navigateTo = useNavigateTo();
  const [searchParams] = useSearchParams();
  const [state, setState] = reactExports.useState({
    loading: true,
    errorMessage: ""
  });
  reactExports.useEffect(() => {
    const code = searchParams.get("code");
    const state2 = searchParams.get("state");
    if (!code || !state2) {
      setState({
        loading: false,
        errorMessage: "Failed to authorize. Invalid state passed to the auth callback."
      });
      return;
    }
    const identityProviderId = Number(last(state2.split("-")));
    if (!identityProviderId) {
      setState({
        loading: false,
        errorMessage: "No identity provider ID found in the state parameter."
      });
      return;
    }
    const redirectUri = absolutifyLink("/auth/callback");
    (async () => {
      try {
        await authServiceClient.createSession({
          ssoCredentials: {
            idpId: identityProviderId,
            code,
            redirectUri
          }
        });
        setState({
          loading: false,
          errorMessage: ""
        });
        await initialUserStore();
        navigateTo("/");
      } catch (error) {
        console.error(error);
        setState({
          loading: false,
          errorMessage: error.details
        });
      }
    })();
  }, [searchParams]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 py-24 w-full h-full flex justify-center items-center", children: state.loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { className: "animate-spin text-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-lg font-mono whitespace-pre-wrap opacity-80", children: state.errorMessage }) });
});
export {
  AuthCallback as default
};
