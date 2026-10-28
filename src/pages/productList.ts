import { products } from "../data/products";
import { router } from "../router/stackRouter";
import { insertionSort, mergeSort, quickSort } from "../algorithms/sorting";
import type { Product } from "../types";

export function renderProductList(container: HTMLElement): void {
  container.innerHTML = `
		<main>
			<h1>Liste des produits</h1>
			<label for="product-search">Rechercher par nom, catégorie ou numéro</label>
			<input id="product-search" type="search">
			<label for="sort-algorithm">Algorithme de tri</label>
			<select id="sort-algorithm">
			<option value="insertion">Tri par insertion</option>
			<option value="quick">Tri rapide</option>
			<option value="merge">Tri fusion</option>
			</select>
			<p id="search-result-count" aria-live="polite"></p>
			<p id="execution-time" aria-live="polite">Temps de tri : pas encore mesuré</p>
			<ul id="product-results"></ul>
		</main>
	`;

  const searchInput =
    container.querySelector<HTMLInputElement>("#product-search")!;
  const algorithmSelect =
    container.querySelector<HTMLSelectElement>("#sort-algorithm")!;
  const resultCount = container.querySelector<HTMLParagraphElement>(
    "#search-result-count",
  )!;
  const resultList =
    container.querySelector<HTMLUListElement>("#product-results")!;
  const executionTime =
    container.querySelector<HTMLParagraphElement>("#execution-time")!;

  const updateResults = (): void => {
    const searchText = searchInput.value.trim().toLocaleLowerCase("fr");
    const matchingProducts: Product[] = [];

    for (const product of products) {
      const searchableValues = [
        product.name.toLocaleLowerCase("fr"),
        product.category.toLocaleLowerCase("fr"),
        String(product.id),
      ];
      let isMatch = searchText === "";

      for (const value of searchableValues) {
        if (value.includes(searchText)) {
          isMatch = true;
          break;
        }
      }

      if (isMatch) {
        matchingProducts.push(product);
      }
    }

    let sortedProducts: Product[];
    const start = performance.now();

    switch (algorithmSelect.value) {
      case "quick":
        sortedProducts = quickSort(matchingProducts, compareByPrice);
        break;
      case "merge":
        sortedProducts = mergeSort(matchingProducts, compareByPrice);
        break;
      default:
        sortedProducts = insertionSort(matchingProducts, compareByPrice);
    }

    const end = performance.now();
    const duration = end - start;
    executionTime.textContent = `Temps de tri : ${duration.toFixed(2)} ms`;
    resultList.replaceChildren();
    for (const product of sortedProducts) {
      const item = document.createElement("li");
      const idCell = document.createElement("td");
      const nameCell = document.createElement("td");
      const categoryCell = document.createElement("td");
      const priceCell = document.createElement("td");
      const stockCell = document.createElement("td");
      const detailCell = document.createElement("td");
      idCell.textContent = String(product.id);
      nameCell.textContent = product.name;
      categoryCell.textContent = product.category;
      priceCell.textContent = product.price.toLocaleString("fr-FR", {
        style: "currency",
        currency: "EUR",
      });
      stockCell.textContent = String(product.stock);
      const detailLink = document.createElement("a");
      detailLink.href = `/product/${product.id}`;
      detailLink.textContent = "Voir le détail";
      detailLink.addEventListener("click", (event) => {
        event.preventDefault();
        window.history.pushState({}, "", `/product/${product.id}`);
        router(container);
      });
      detailCell.append(detailLink);
      item.append(
        idCell,
        nameCell,
        categoryCell,
        priceCell,
        stockCell,
        detailCell,
      );
      resultList.append(item);
    }

    resultCount.textContent =
      searchText === ""
        ? `${matchingProducts.length} produits`
        : `${matchingProducts.length} résultat${matchingProducts.length > 1 ? "s" : ""}`;
  };

  searchInput.addEventListener("input", updateResults);
  updateResults();
  algorithmSelect.addEventListener("change", updateResults);
}

const compareByPrice = (a: Product, b: Product): number => a.price - b.price;
