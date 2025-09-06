import { o as observer, u as useTranslate, a as useNavigateTo, b as useLoading, w as workspaceStore, j as jsxRuntimeExports, I as Input, B as Button, L as Loader, G as Link, U as User, N as User_Role, O as userServiceClient, d as authServiceClient, i as initialUserStore, e as c } from "./index.js";
import { r as reactExports } from "./leaflet-vendor.js";
import { A as AuthFooter } from "./AuthFooter.js";
import "./mermaid-vendor.js";
import "./utils-vendor.js";
import "./katex-vendor.js";
import "./LocaleSelect.js";
const SignUp = observer(() => {
  const t = useTranslate();
  const navigateTo = useNavigateTo();
  const actionBtnLoadingState = useLoading(false);
  const [username, setUsername] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const workspaceGeneralSetting = workspaceStore.state.generalSetting;
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
    handleSignUpButtonClick();
  };
  const handleSignUpButtonClick = async () => {
    if (username === "" || password === "") {
      return;
    }
    if (actionBtnLoadingState.isLoading) {
      return;
    }
    try {
      actionBtnLoadingState.setLoading();
      const user = User.fromPartial({
        username,
        password,
        role: User_Role.USER
      });
      await userServiceClient.createUser({ user });
      await authServiceClient.createSession({
        passwordCredentials: { username, password }
      });
      await initialUserStore();
      navigateTo("/");
    } catch (error) {
      console.error(error);
      c.error(error.details || "Sign up failed");
    }
    actionBtnLoadingState.setFinish();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-4 sm:py-8 w-80 max-w-full min-h-svh mx-auto flex flex-col justify-start items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full py-4 grow flex flex-col justify-center items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex flex-row justify-center items-center mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "h-14 w-auto rounded-full shadow", src: workspaceGeneralSetting.customProfile?.logoUrl || "/logo.webp", alt: "" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "ml-2 text-5xl text-foreground opacity-80", children: workspaceGeneralSetting.customProfile?.title || "Memos" })
      ] }),
      !workspaceGeneralSetting.disallowUserRegistration ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "w-full text-2xl mt-2 text-muted-foreground", children: t("auth.create-your-account") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "w-full mt-2", onSubmit: handleFormSubmit, children: [
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-row justify-end items-center w-full mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", className: "w-full h-10", disabled: actionBtnLoadingState.isLoading, onClick: handleSignUpButtonClick, children: [
            t("common.sign-up"),
            actionBtnLoadingState.isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { className: "w-5 h-auto ml-2 animate-spin opacity-60" })
          ] }) })
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "w-full text-2xl mt-2 text-muted-foreground", children: "Sign up is not allowed." }),
      !workspaceStore.state.profile.owner ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "w-full mt-4 text-sm font-medium text-muted-foreground", children: t("auth.host-tip") }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "w-full mt-4 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: t("auth.sign-in-tip") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/auth", className: "cursor-pointer ml-2 text-primary hover:underline", viewTransition: true, children: t("common.sign-in") })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AuthFooter, {})
  ] });
});
export {
  SignUp as default
};
