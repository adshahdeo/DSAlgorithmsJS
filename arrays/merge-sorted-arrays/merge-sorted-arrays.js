const mergeArrays = (arr1, arr2) => {
	const merged = [];
	while (arr1.length && arr2.length) {
		merged.push(arr1[0] < arr2[0] ? arr1.shift() : arr2.shift());
	}
	return [...merged, ...arr1, ...arr2];
}