import type { VNode } from '../framework/vdom'

type VNodeValue = VNode | string | number | null | undefined

export function diff(oldNode: VNodeValue, newNode: VNodeValue): boolean {
	if (Object.is(oldNode, newNode)) return false

	if (oldNode == null || newNode == null) return true

	if (typeof oldNode !== 'object' || typeof newNode !== 'object') return true

	return oldNode.tag !== newNode.tag
}
