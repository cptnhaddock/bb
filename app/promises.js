define(function () {
	var Loader = {
		init: function(url) {
			this.url = url;
		},

		load: function () {
			new Promise(function(resolve, reject) {
				setTimeout(resolve, 1000);
			}).then(this.callback.bind(this));
		},

		callback: function () {
			console.log('data loaded from: ' + this.url);
		}
	}

	var loader = Object.create(Loader);
	loader.init('www.verisurerules.com');
	loader.load();
});