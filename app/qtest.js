define(['q'], function (Q) {
	var Loader = {
		init: function(url) {
			this.url = url;
		},

		load: function () {
			new Q.Promise(function(resolve, reject) {
				setTimeout(resolve, 1000);
			}).then(this.callback.bind(this));
		},

		load2: function () {
			Q.delay(2000).then(this.callback.bind(this));
		},

		load3: function () {
			var deferred = Q.defer();
			setTimeout(function() {
				deferred.resolve();
			}, 3000);

			deferred.promise.then(this.callback.bind(this));
		},

		callback: function () {
			console.log('data loaded from: ' + this.url);
		}
	};

	var loader = Object.create(Loader);
	loader.init('www.verisurerulesman.com');
	loader.load();
	loader.load2();
	loader.load3();
});