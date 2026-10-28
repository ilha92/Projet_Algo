import { renderProductList } from './pages/productList'
import { insertionSort } from './algorithms/sorting'

let comparisons = 0

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('Element #app not found')
}

renderProductList(app)

const result = insertionSort([8, 7, 6, 5, 4, 3, 2, 1], (a, b) => {
  comparisons += 1
  return a - b
})

console.log({ result, comparisons })
