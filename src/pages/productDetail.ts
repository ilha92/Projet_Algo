import { products } from "../data/products";

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
      <a href="/">Retour à la liste</a>
    </main>
  `;
}
