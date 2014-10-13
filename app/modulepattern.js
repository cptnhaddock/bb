define(['jquery'], function ($) {
    function Counter() {
        var count = 0;

        function increment() {
            count++;
        };

        var countClicks = function(element) {
            element.click(increment);
        };

        var getCount = function() {
            return count;
        };

        return {
            getCount: getCount,
            countClick: countClicks
        };
    }

    var counter = Counter();

    counter.countClick($('.clickme'));
    $('.clickme').click(function() {
        $('#clicked-count').html(counter.getCount());
    });

    var counter2 = Counter();

    counter2.countClick($('.clickme2'));
    $('.clickme2').click(function() {
        $('#clicked-count2').html(counter2.getCount());
    });
});