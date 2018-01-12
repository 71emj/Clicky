const random = (factor) => {
	return Math.floor(Math.random() * factor);
};

const swap = (array, i, r) => {
	[array[i], array[r]] = [array[r], array[i]];
	return array;
};

const shuffle = (array) => {
	const arr = array.slice();
	const n = array.length;
	const l = n;

	for (let i = 0; i < l; i++) {
		const r = random(l);
		swap(arr, i, r);
	}
	return arr;
};

export { shuffle, swap, random };