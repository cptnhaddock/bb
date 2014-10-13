define(function () {
	var Loader = {
		init: function(url) {
			this.url = url;
		},

		load: function () {
			setTimeout(this.callback.bind(this), 1000);
		},

		callback: function () {
			console.log('data loaded from: ' + this.url);
		}
	};

	var loader = Object.create(Loader);
	loader.init('www.1337rules.com');
	loader.load();
});