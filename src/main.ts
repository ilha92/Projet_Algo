import { router } from "./router/stackRouter";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("Element #app not found");
}

// On peux aussi recharger le routeur quand l’utilisateur revient en arrière :
window.addEventListener("popstate", () => {
  router(app);
});

router(app);
