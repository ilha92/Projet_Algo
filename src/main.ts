import { renderProductList } from './pages/productList'

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('Element #app not found')
}

renderProductList(app)
