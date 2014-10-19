define(['QUnit'], function (QUnit) {

    QUnit.load();
    QUnit.start();

    var SortAlgorithm = {
        Closest: "Closest",
        Furthest: "Furthest"
    };


    var F = function () {
        return {
            P1: null, //Thing
            P2: null, //Thing
            D: null // timespan
        };
    };

    var Person = function (name, birthDate) {
        return {
            Name: name, //string
            BirthDate: birthDate //DateTime
        };
    };

    var Finder = function (persons) {

        this.Find = function (sortAlgorithm) {
            var tr = [];

            for (var i = 0; i < persons.length - 1; i++) {
                for (var j = i + 1; j < persons.length; j++) {
                    var r = new F();
                    if (persons[i].BirthDate < persons[j].BirthDate) {
                        r.P1 = persons[i];
                        r.P2 = persons[j];
                    } else {
                        r.P1 = persons[j];
                        r.P2 = persons[i];
                    }
                    r.D = r.P2.BirthDate - r.P1.BirthDate;
                    tr.push(r);
                }
            }

            if (tr.length < 1) {
                return new F();
            }

            var answer = tr[0];
            tr.forEach(function(person) {
                switch (sortAlgorithm) {
                    case SortAlgorithm.Closest:
                        if (person.D < answer.D) {
                            answer = person;
                        }
                        break;
                    case SortAlgorithm.Furthest:
                        if (person.D > answer.D) {
                            answer = person;
                        }
                        break;
                }
            });

            return answer;
        };
    };


    var sue = new Person("Sue", new Date(1950, 1, 1));
    var greg = new Person("Greg", new Date(1952, 6, 1));
    var sarah = new Person("Sarah", new Date(1982, 1, 1));
    var mike = new Person("Mike", new Date(1979, 1, 1));


    test("Returns Empty Results When Given Empty List", function () {
        var list = [];
        var finder = new Finder(list);

        var result = finder.Find(SortAlgorithm.Closest);

        ok(!result.P1);
        ok(!result.P2);
    });

    test("Returns Empty Results When Given One Person", function () {

        var list = [ sue ];
        var finder = new Finder(list);

        var result = finder.Find(SortAlgorithm.Closest);

        ok(!result.P1);
        ok(!result.P2);
    });

    test("Returns Closest Two For Two People", function () {

        var list = [ sue, greg ];
        var finder = new Finder(list);

        var result = finder.Find(SortAlgorithm.Closest);

        deepEqual(sue, result.P1);
        deepEqual(greg, result.P2);
    });


    test("Returns Furthest Two For Two People", function () {
        var list = [ greg, mike ];
        var finder = new Finder(list);

        var result = finder.Find(SortAlgorithm.Furthest);

        deepEqual(greg, result.P1);
        deepEqual(mike, result.P2);

    });

    test("Returns Furthest Two For Four People", function () {
        var list = [ greg, mike, sarah, sue ];
        var finder = new Finder(list);

        var result = finder.Find(SortAlgorithm.Furthest);

        deepEqual(sue, result.P1);
        deepEqual(sarah, result.P2);
    });

    test("Returns Closest Two For Four People", function () {
        var list = [ greg, mike, sarah, sue ];
        var finder = new Finder(list);

        var result = finder.Find(SortAlgorithm.Closest);

        deepEqual(sue, result.P1);
        deepEqual(greg, result.P2);
    });
});

