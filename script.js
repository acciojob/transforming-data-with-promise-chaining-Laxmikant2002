//your JS code here. If required.
(function () {
	const input = document.getElementById('ageInput');
	const btn = document.getElementById('btn');
	const output = document.getElementById('output');

	function wait(ms, value){
		return new Promise((resolve) =>
			setTimeout(() => resolve(value), ms));
	}
	btn.addEventListener('click', () => {
		const raw = parseFloat(input.value);
		if(Number.isNaN(raw)) {
			output.textContent = 'Please enter a valid number';
			return;
		}
		output.textContent = '';

		wait(2000, raw)
			.then((n) => {
				output.textContent = `Result: ${n}`;
				return n;
			})
			.then((n) => wait(1000, n * 2))
			.then((n) => {
				output.textContent = `Result: ${n}`;
				return n;
			})
			.then((n) => wait(1000, n - 3))
			.then((n) => {
				output.textContent = `Result: ${n}`;
				return n;
			})
			.then((n) => wait(1000, n / 2))
			.then((n) => {
				output.textContent = `Final Result: ${n}`;
			})
			.catch((err) => {
				console.error(err);
				output.textContent = `An error occurred`;
			});
	});
})();