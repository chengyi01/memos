import { o as observer, u as useTranslate, a as useNavigateTo, b as useLoading, w as workspaceStore, j as jsxRuntimeExports, I as Input, B as Button, L as Loader, d as authServiceClient, i as initialUserStore, e as c } from "./index.js";
import { r as reactExports } from "./leaflet-vendor.js";
const PasswordSignInForm = observer(() => {
  const t = useTranslate();
  const navigateTo = useNavigateTo();
  const actionBtnLoadingState = useLoading(false);
  const [username, setUsername] = reactExports.useState(workspaceStore.state.profile.mode === "demo" ? "yourselfhosted" : "");
  const [password, setPassword] = reactExports.useState(workspaceStore.state.profile.mode === "demo" ? "yourselfhosted" : "");
  const handleUsernameInputChanged = (e) => {
    const text = e.target.value;
    setUsername(text);
  };
  const handlePasswordInputChanged = (e) => {
    const text = e.target.value;
    setPassword(text);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSignInButtonClick();
  };
  const handleSignInButtonClick = async () => {
    if (username === "" || password === "") {
      return;
    }
    if (actionBtnLoadingState.isLoading) {
      return;
    }
    try {
      actionBtnLoadingState.setLoading();
      await authServiceClient.createSession({
        passwordCredentials: { username, password }
      });
      await initialUserStore();
      navigateTo("/");
    } catch (error) {
      console.error(error);
      c.error(error.details || "Failed to sign in.");
    }
    actionBtnLoadingState.setFinish();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "w-full mt-2", onSubmit: handleFormSubmit, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-start items-start w-full gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex flex-col justify-start items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "leading-8 text-muted-foreground", children: t("common.username") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            className: "w-full bg-background h-10",
            type: "text",
            readOnly: actionBtnLoadingState.isLoading,
            placeholder: t("common.username"),
            value: username,
            autoComplete: "username",
            autoCapitalize: "off",
            spellCheck: false,
            onChange: handleUsernameInputChanged,
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex flex-col justify-start items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "leading-8 text-muted-foreground", children: t("common.password") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            className: "w-full bg-background h-10",
            type: "password",
            readOnly: actionBtnLoadingState.isLoading,
            placeholder: t("common.password"),
            value: password,
            autoComplete: "password",
            autoCapitalize: "off",
            spellCheck: false,
            onChange: handlePasswordInputChanged,
            required: true
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-row justify-end items-center w-full mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", className: "w-full h-10", disabled: actionBtnLoadingState.isLoading, onClick: handleSignInButtonClick, children: [
      t("common.sign-in"),
      actionBtnLoadingState.isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { className: "w-5 h-auto ml-2 animate-spin opacity-60" })
    ] }) })
  ] });
});
export {
  PasswordSignInForm as P
};
