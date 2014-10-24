define('q', function(Q) {
	var srcs = [
		'http://lorempixel.com/300/300/cats',
		'http://lorempixel.com/300/300/animals',
		'http://lorempixel.comm/300/300/people',
		'http://lorempixel.com/300/300/nature'
	];

	var fallback = 'http://dummyimage.com/300/222/ff9900.png?text=fallback';

// extend Image prototype with ready() promise
// preload imgs
// replace failed with fallback
// pass preloaded imgs to append
// add spinner by adding .loading to body

	if (!Image.prototype.ready) {
		Image.prototype.ready = function () {
			var deferred = Q.defer();

			function onLoad() {
				deferred.resolve(this);
			}

			function onError() {
				deferred.reject(new Error('failed to load image!'));
			}

			this.addEventListener('load', onLoad);
			this.addEventListener('error', onError);

			return deferred.promise;
		};
	}

	function preload(fileName) {
		var image = new Image();
		image.src = fileName;
		return image.ready();
	}

	function loadFallback() {
		return preload(fallback);
	}

	function preloadAll() {
		var promises = srcs.map(function (src) {
			return preload(src)
				.catch(loadFallback);
		});

		console.log(promises);
		return promises;
	}

	function append(images) {
		console.log(images);
		images.forEach(function(image) {
			document.body.appendChild(image);
		});
		return Q.fcall();
	}
	document.body.classList.add('loading');
	Q.all(preloadAll().concat(Q.delay(2000))).then(append).finally(function() {
		document.body.classList.remove('loading');
	});
});