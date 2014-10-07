// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'lib',
    paths: {
        main: '../main',
        jquery: '//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min',
    	q: '../lib/q'
	}
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['main']);