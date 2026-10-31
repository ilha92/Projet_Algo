import { products } from "../data/products";
import { goBack } from "../router/stackRouter";

export function renderProductDetail(
  container: HTMLElement,
  productId: number,
): void {
  const product = products.find((item) => item.id === productId);

  if (!product) {
    container.innerHTML = `
      <main>
        <h1>Produit introuvable</h1>
        <a href="/">Retour à la liste</a>
      </main>
    `;
    return;
  }

  const formattedPrice = product.price.toLocaleString("fr-FR", {
    style: "currency",
    currency: "EUR",
  });

  container.innerHTML = `
    <main>
      <h1>${product.name}</h1>
      <p>Catégorie : ${product.category}</p>
      <p>Prix : ${formattedPrice}</p>
      <p>Stock : ${product.stock}</p>
      <p>${product.description}</p>
      <button id="back-btn">Retour</button>
    </main>
  `;

  const backButton = container.querySelector<HTMLButtonElement>("#back-btn");
  backButton?.addEventListener("click", () => {
    goBack(container);
  });
}
