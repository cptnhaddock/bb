define(function() {
	console.log('Module pattern');

    var Traverse = (function(obj) {
        function traverseP(obj) {
            do {
                //console.log(obj);
            } while(obj = obj.__proto__);
        }

        return {
            traverseP: traverseP
        };
    })();

    Traverse.traverseP(document);
});