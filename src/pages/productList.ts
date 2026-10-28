import { products } from '../data/products'
import { insertionSort, mergeSort, quickSort } from '../algorithms/sorting'
import type { Product } from '../types'

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
	const algorithmSelect = container.querySelector<HTMLSelectElement>('#sort-algorithm')!
	const resultCount = container.querySelector<HTMLParagraphElement>('#search-result-count')!
	const resultList = container.querySelector<HTMLUListElement>('#product-results')!

	const updateResults = (): void => {
		const searchText = searchInput.value.trim().toLocaleLowerCase('fr')
		const matchingProducts: Product[] = []

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

		let sortedProducts: Product[]

		switch (algorithmSelect.value) {
			case 'quick':
				sortedProducts = quickSort(matchingProducts, compareByPrice)
				break
			case 'merge':
				sortedProducts = mergeSort(matchingProducts, compareByPrice)
				break
			default:
				sortedProducts = insertionSort(matchingProducts, compareByPrice)
		}

		resultList.replaceChildren()
		for (const product of sortedProducts) {
			const item = document.createElement('li')
			const formattedPrice = product.price.toLocaleString('fr-FR', {
				style: 'currency',
				currency: 'EUR',
			})
			item.textContent = `${formattedPrice} — ${product.name} — ${product.category} (n° ${product.id})`
			resultList.append(item)
		}

		resultCount.textContent = searchText === ''
			? `${matchingProducts.length} produits`
			: `${matchingProducts.length} résultat${matchingProducts.length > 1 ? 's' : ''}`
	}

	searchInput.addEventListener('input', updateResults)
	updateResults()
	algorithmSelect.addEventListener('change', updateResults)
}

const compareByPrice = (a: Product, b: Product): number => a.price - b.price
