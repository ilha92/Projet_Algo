import { products } from '../data/products'

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
			<ul id="product-results"></ul>
		</main>
	`

	const searchInput = container.querySelector<HTMLInputElement>('#product-search')!
	const resultCount = container.querySelector<HTMLParagraphElement>('#search-result-count')!
	const resultList = container.querySelector<HTMLUListElement>('#product-results')!

	const updateResults = (): void => {
		const searchText = searchInput.value.trim().toLocaleLowerCase('fr')
		const matchingProducts = []

		for (const product of products) {
			const searchableValues = [
				product.name.toLocaleLowerCase('fr'),
				product.category.toLocaleLowerCase('fr'),
				String(product.id),
			]
			let isMatch = searchText === ''

			for (const value of searchableValues) {
				if (value.includes(searchText)) {
					isMatch = true
					break
				}
			}

			if (isMatch) {
				matchingProducts.push(product)
			}
		}

		resultList.replaceChildren()
		for (const product of matchingProducts) {
			const item = document.createElement('li')
			item.textContent = `${product.name} — ${product.category} (n° ${product.id})`
			resultList.append(item)
		}

		resultCount.textContent = searchText === ''
			? `${matchingProducts.length} produits`
			: `${matchingProducts.length} résultat${matchingProducts.length > 1 ? 's' : ''}`
	}

	searchInput.addEventListener('input', updateResults)
	updateResults()
}