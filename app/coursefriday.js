define([], function () {
	var cache = (function () {
		var objects = [];
		function get(index) {
			return objects[index];
		}

		function set(object) {
			var found = objects.indexOf(object);

			return found !== -1 ? found : objects.push(object) - 1;
		}

		function typeOf(index) {
			if (get(index) instanceof Array) {
				return Array.name;
			}
			return index >= objects.length ? new Error('error') : typeof get(index);
		}

		return {
			get: get,
			set: set,
			typeOf: typeOf
		};
	})();

	;

	console.log(cache.set(1));
	console.log(cache.typeOf(0));

	console.log(cache.set(undefined));
	console.log(cache.typeOf(1));

	console.log(cache.set(true));
	console.log(cache.typeOf(2));

	console.log(cache.set([]));
	console.log(cache.typeOf(3));

	console.log(cache.typeOf(100));


 });