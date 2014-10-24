define(function () {
	var link = document.getElementsByTagName('a')[0];
	link.addEventListener('click', MyEH);

	function MyEH(e) {
		e.preventDefault();
	}
});