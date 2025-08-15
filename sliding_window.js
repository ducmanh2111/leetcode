const arr = [5, 2, -1, 0, 3];
const k = 3;
const n = arr.length;

function maxSum1(arr, n, k) {
	let maxSum = Number.MIN_SAFE_INTEGER;

	for (let i = 0; i < n - k + 1; i++) {
		let currentSum = 0;
		for (let j = 0; j < k; j++) {
			currentSum += arr[i + j];
		}
		maxSum = Math.max(currentSum, maxSum);
	}

	return maxSum;
}

function maxSum(arr, n, k) {
	if (n < k) {
		console.log("invalid");
		return -1;
	}

	let windowSum = 0;
	for (let i = 0; i < k; i ++) {
		windowSum += arr[i];
	}

	let maxSum = windowSum;

	for (let j = k; j < n; j++) {
		windowSum += arr[j] - arr[j - k]
		maxSum = Math.max(maxSum, windowSum)
	}

	return maxSum;
}
// console.log(maxSum1(arr, n, k))
console.log(maxSum(arr, n, k))
