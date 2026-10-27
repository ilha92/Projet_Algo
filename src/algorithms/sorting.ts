export function insertionSort(arr: number[]): number[] {
	const sorted = [...arr]

	for (let index = 1; index < sorted.length; index += 1) {
		const current = sorted[index]
		let position = index - 1

		while (position >= 0 && sorted[position] > current) {
			sorted[position + 1] = sorted[position]
			position -= 1
		}

		sorted[position + 1] = current
	}

	return sorted
}

export function quickSort(arr: number[]): number[] {
	if (arr.length < 2) return [...arr]

	const pivotIndex = Math.floor(arr.length / 2)
	const pivot = arr[pivotIndex]
	const left: number[] = []
	const right: number[] = []

	for (let index = 0; index < arr.length; index += 1) {
		if (index === pivotIndex) continue
		if (arr[index] <= pivot) left.push(arr[index])
		else right.push(arr[index])
	}

	return [...quickSort(left), pivot, ...quickSort(right)]
}

export function mergeSort(arr: number[]): number[] {
	if (arr.length < 2) return [...arr]

	const middle = Math.floor(arr.length / 2)
	const left = mergeSort(arr.slice(0, middle))
	const right = mergeSort(arr.slice(middle))
	const merged: number[] = []
	let leftIndex = 0
	let rightIndex = 0

	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] <= right[rightIndex]) {
			merged.push(left[leftIndex])
			leftIndex += 1
		} else {
			merged.push(right[rightIndex])
			rightIndex += 1
		}
	}

	return [...merged, ...left.slice(leftIndex), ...right.slice(rightIndex)]
}
