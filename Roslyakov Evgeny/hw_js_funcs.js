// ---------- 1 ---------- //

function splitAndMerge(str, sp) {
    return str.split(' ')
        .map(function(word) {
            return word.split('')
        })
        .map(function(newWord) {
            return newWord.join(sp)
        })
        .reduce(function(acc, cur) {
            return acc + ' ' + cur + ' '
        })
        .trim();
}

// console.log(splitAndMerge("My name is John"," "));
// console.log(splitAndMerge("Hello World!",","));


// ---------- 2 ---------- //

function convert(hash) {
    var res = [];
        temp = [];
    for(key in hash) {
        temp.push(key, hash[key]);
        res.push(temp);
        temp = [];
    }

    return res;
}

// console.log(convert({name: 'Jeremy', age: 24, role: 'Software Engineer'}));


// ---------- 3 ---------- //

function toCamelCase(str) {
    return str.split('')
        .reduce(function(acc, cur, i, arr) {
            if(cur === '-' || cur === '_') {
                arr[i+1] = arr[i+1].toUpperCase();
                return acc;
            }
            return acc += cur;
        })
}

// console.log(toCamelCase("the-stealth-warrior"));
// console.log(toCamelCase("The_Stealth_Warrior"));


// ---------- 4 ---------- //

function reverse(str) {
    var temp = str.split(' '),
        res = '';
    temp.forEach(function (word) {
        var newWord = word.split('').reverse().join('');
        res += newWord + ' ';
    })
    return res.concat();
}

// console.log(reverse(" A fun little challenge! "));


// ---------- 5 ---------- //

function stringExpansion(str) {
    return str.split('')
        .reduce(function(acc, cur, i, arr) {
            if(Number.isInteger(+cur)) {
                if(Number.isInteger(+arr[i+1])) {
                    return acc;
                }
                return acc += new Array(+cur).join(arr[i+1]);
            }
            return acc += cur;
        }, '')
}

// console.log(stringExpansion('3D2a5d2f'));
// console.log(stringExpansion('3d332f2a'));
// console.log(stringExpansion('abcde'));


// ---------- 6 ---------- //

function largest() {
    return Math.max.apply(null, arguments);
}

function smallest() {
    return Math.min.apply(null, arguments);
}

// console.log(largest(2, 0.1, -5, 100, 3));
// console.log(smallest(2, 0.1, -5, 100, 3));


// ---------- 7 ---------- //

function transform(baseArray) {
    return baseArray.map(function(elem, i, arr) {
        elem = function() {
            var idx = i;
            var refArr = arr;
            console.log(refArr[idx]);
        };
        return elem;
    })
}

// var newArray = transform([10, 20, 30, 40, 50]);
// newArray[3]();
// newArray[4]();


// ---------- 8 ---------- //

function sum() {
    if(arguments.length !== 1) {
        return arguments[0] + sum.apply(null, [].slice.call(arguments, 1));
    } else {
        return arguments[0];
    }
}

// console.log(sum(1,3,5,7));


// ---------- 9 ---------- //

function countDown(num) {
    var newTimer = setInterval(function() {
        if(num === 0) clearInterval(newTimer);
        console.log(num);
        num -= 1;
    }, 1000);
}

// countDown(3);


// ---------- 10 ---------- //

Function.prototype.myBind = function() {
    var self = this,
        context = arguments[0],
        currArgs = [].slice.call(arguments, 1);
    return function() {
        var args = [].slice.call(arguments),
            newArgs = currArgs.concat(args);
        return self.apply(context, newArgs);
    }
}

function addPropToNumber(number) { return this.prop + number; };
var bound = addPropToNumber.myBind({ prop: 9 });
// console.log(bound(1))