define(['underscore'], function(_){
    var features = ['aa', 'bb', 'c'];
    var known = [{name: 'a', type: 'aa'}, {name: 'b', type: 'bb'}, {name: 'c', type: 'cc'}, {name: 'd', type: 'd'}];

    function exists(name) {
        return _.contains(features, name);
    }

    var result = _.some(known, function (item) {
        console.log(item.name);
        return exists(item.name);
    });

    console.log(result);
});