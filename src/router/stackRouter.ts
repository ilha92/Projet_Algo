import { renderProductList } from "../pages/productList";
import { renderProductDetail } from "../pages/productDetail";

export function router(container: HTMLElement): void {
  // l’URL actuelle
  const path = window.location.pathname;

  if (path === "/" || path === "") {
    renderProductList(container);
    return;
  }

  // Vérifie si l’URL correspond à la route du détail d’un produit
  const match = path.match(/^\/product\/(\d+)$/);

  if (match) {
    const productId = Number(match[1]);
    renderProductDetail(container, productId);
    return;
  }

  container.innerHTML = `
    <main>
      <h1>Page introuvable</h1>
      <a href="/">Retour à la liste</a>
    </main>
  `;
}
