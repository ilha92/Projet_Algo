import { renderProductList } from "../pages/productList";
import { renderProductDetail } from "../pages/productDetail";

const routeStack: string[] = ["/"];

export function renderRoute(container: HTMLElement): void {
  const currentPath = routeStack[routeStack.length - 1] ?? "/";

  if (currentPath === "/" || currentPath === "") {
    renderProductList(container);
    return;
  }

  const match = currentPath.match(/^\/product\/(\d+)$/);

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

export function navigate(path: string, container: HTMLElement): void {
  routeStack.push(path);
  renderRoute(container);
}

export function goBack(container: HTMLElement): void {
  if (routeStack.length > 1) {
    routeStack.pop();
    renderRoute(container);
  }
}
