define(['underscore'], function (_) {
    var additionFactory = (function () {
        var sum = 0;
        return function (num) {
            return function () {
                sum += num;
                console.log(sum);
            };
        };
    })();

    var add2 = additionFactory( 2 );
    var add3 = additionFactory( 3 );

    add2(); // logs 2
    add3(); // logs 5
    add2(); // logs 7
    add3(); // logs 10
});
