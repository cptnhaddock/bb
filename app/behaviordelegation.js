define(function () {
	function Loader(url) {
		this.url = url;
	}

	Loader.prototype.load = function () {
		setTimeout(this.callback.bind(this), 1000);
	};

	Loader.prototype.callback = function () {
		console.log('data loaded from: ' + this.url);
	};

	var loader = new Loader('www.1337.com');
	loader.load();
});