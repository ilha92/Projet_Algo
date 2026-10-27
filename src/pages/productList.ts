import { products } from '../data/products'
import { linearSearch } from '../algorithms/search'

export function renderProductList(container: HTMLElement): void {
	container.innerHTML = `
		<main>
			<h1>Liste des produits</h1>
			<label for="product-search">Rechercher par numéro exact</label>
			<input id="product-search" type="search">
			<p id="search-result-count" aria-live="polite"></p>
			<ul id="product-results"></ul>
		</main>
	`

	const searchInput = container.querySelector<HTMLInputElement>('#product-search')!
	const resultCount = container.querySelector<HTMLParagraphElement>('#search-result-count')!
	const resultList = container.querySelector<HTMLUListElement>('#product-results')!

	const updateResults = (): void => {
		const query = searchInput.value.trim().toLocaleLowerCase('fr')
		const matchingProducts = []

		for (const product of products) {
			const searchableValues = [
				product.name.toLocaleLowerCase('fr'),
				product.category.toLocaleLowerCase('fr'),
				String(product.id),
			]
			if (query === '' || linearSearch(searchableValues, query) !== -1) {
				matchingProducts.push(product)
			}
		}

		resultList.replaceChildren()
		for (const product of matchingProducts) {
			const item = document.createElement('li')
			item.textContent = `${product.name} — ${product.category} (n° ${product.id})`
			resultList.append(item)
		}

		resultCount.textContent = query === ''
			? `${matchingProducts.length} produits`
			: `${matchingProducts.length} résultat${matchingProducts.length > 1 ? 's' : ''}`
	}

	searchInput.addEventListener('input', updateResults)
	updateResults()
}
