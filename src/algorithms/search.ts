export function linearSearch<T>(arr: T[], target: T): number {
	for (let index = 0; index < arr.length; index += 1) {
		if (arr[index] === target) return index
	}

	return -1
}

export function binarySearch(arr: number[], target: number): number {
	let left = 0
	let right = arr.length - 1

	while (left <= right) {
		const middle = Math.floor((left + right) / 2)

		if (arr[middle] === target) return middle
		if (arr[middle] < target) left = middle + 1
		else right = middle - 1
	}

	return -1
}
