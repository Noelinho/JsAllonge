var fn1 = function(diameter) {return diameter * 3.14;};

console.log(fn1(2));

var fn2 = function(room, board) {return room + board;};

console.log(fn2(200, 300));

console.log((function (x) {
    return function (y) {
        return x;
    }
})(1)(2));

console.log((function (x) {
    return function (y) {
        return x;
    }
})(1));

console.log(
    (function (Pi) {
        return function (diameter) {
            return diameter * Pi;
        }
    })(3.14159)(2)
);

console.log(
    (function (diameter) {
        var Pi = 3.14159;

        return diameter * Pi;
    })  (2)
);

var fn = function even (n) {
    if (n === 0) {
        return true
    }
    else return !even(n - 1)
}

console.log(fn(5));
console.log(fn(2));


console.log(
    (function(){
        return someName;

        var someName = function someName() {
            return true;
        }
    } )()
);

console.log(
    (function(){
        var someName;

        return someName;

        someName = function someName() {
            return true;
        }
    } )()
);

console.log(
    (function(){
        return someName;

        function someName() {
            return true;
        }
    } )()
);