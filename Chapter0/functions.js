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

console.log(repeat(3, function() {
   console.log('Hello');
}));

function repeat (num, fn) {
    var i, value;

    for (i = 1;i <= num;++i)
        value = fn(i);

    return value;
}

function plus(a,b) {
    return arguments[0] + arguments[1];
}

console.log(plus(2,3));

function whichArgs(a,b,c) {
    return arguments;
}

console.log(whichArgs(2,3,4));


function plusSin()
{
    return arguments[0] + arguments[1];
}

console.log(plusSin(1,2));

function howManyArgs() {
    return arguments['length'];
}

console.log(howManyArgs());
console.log(howManyArgs(1,2));
console.log(howManyArgs(3,4,5,function(){}));
