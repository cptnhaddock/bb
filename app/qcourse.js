define(['q'], function (Q) {




	/**
	 * fakeAjax simulates an - occasionally failing(!) - ajax call
	 * @param {string} file - file to fetch
	 * @param {function} successcb called on successful request
	 * @param {function} errorcb called on failed request
	 */
	function fakeAjax ( file, successcb, errorcb ) {
		var that = this,
			wait = Math.floor( Math.random() * 750 ) + 250;

		function timeoutCallback() {
			if ( wait % 9 ) {
				console.info( file + ' loaded' );
				successcb( file + ' loaded' );
			} else errorcb( new Error ( file + ' failed!' ) );
		}

		setTimeout( timeoutCallback, wait );
	}

	/**
	 * updateUI simulates updating the user interface by writing to <output>
	 * @param {string} data to be displayed
	 */
	function updateUI ( data ) {
		var html = data instanceof Array ? data.join('<br>') : data + '<br>';
		document.querySelector( 'output' ).innerHTML += html;
	}

	/**
	 * errorHandler simulates error handling using console.error
	 * @param {Error} err to be displayed
	 */
	function errorHandler ( err ) {
		console.error( err );
	}

	/**
	 * loadNext removes the first element of files[] and passes it to load()
	 */
	function loadNext() {
		var file = files.shift();
		return load( file );
	}


	function load(file) {
		var deferred = Q.defer();

		fakeAjax(file, deferred.resolve, deferred.reject);

		return deferred.promise;
	}

// Array of files to fetch
	var files = [ '1.html', '2.html', '3.html' ];


//load(files.shift()).then(updateUI).then(loadNext).then(loadNext).catch(errorHandler);




	Q.all(files.map(load)).then(updateUI).catch(errorHandler);
});