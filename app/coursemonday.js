define([], function () {
	if (!Array.prototype.average) {
		Array.prototype.average = function () {
			return this.sum() / this.length;
		};
	}

	if (!Array.prototype.sum) {
		Array.prototype.sum = function () {
			var ret = 0;
			this.forEach(function (num) {
				ret = num + ret;
			});
			return ret;
		};
	}

	function Calculator() {
		var numberArray;

		function setNumbers() {
			numberArray = [].slice.call(arguments);
		}

		function sum() {
			var ret = 0;
			numberArray.forEach(function (num) {
				ret = num + ret;
			});
			return ret;
		}

		function avg() {
			return sum() / numberArray.length;
		}

		return {
			setNumbers: setNumbers,
			sum: sum,
			avg: avg,
			get numbers()
			{
				return numberArray;
			},
			set numbers(nums) {
				numberArray = nums;
			}
		};
	}

	var calc = Calculator();
	calc.setNumbers(1, 2, 3);
	console.log(calc.sum());
	console.log(calc.avg());

	console.log([1, 2, 3].sum());
	console.log([1, 2, 3].average());

	calc.numbers = [1, 2, 3];
	console.log(calc.numbers);
	console.log(calc.sum());
});