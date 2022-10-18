function myLanguages(results) {
    const passedLanguages = []
    Object.entries(results).forEach(([key, value]) => value > 59 && passedLanguages.push([key, value]));
    passedLanguages.sort(([, a], [, b]) => a - b).reverse();
    sortedPassedLanguages = [];
    passedLanguages.forEach(elem => sortedPassedLanguages.push(elem[0]));
    return sortedPassedLanguages;
}

myLanguages({
    Slovenian: 62,
    Korean: 52,
    Italian: 9,
    Danish: 97,
    Dutch: 95,
    Maltese: 100,
    Irish: 30
});
console.clear();

function nthSmallest(arr, pos) {
    //your code here
    [...Array(pos - 1)].forEach((_) => {
        arr.splice(arr.indexOf(Math.min(...arr)), 1);
    })
    //return arr.sort((a,b)=>a-b)[pos-1]
    return Math.min(...arr);
}

console.log(nthSmallest([-46, 8423, -7950, -27, -781, -54, 848, 72, 91, -8358, -10, 6919, -806, 4045, -10, 7693, -463, -185, 82, 1, 1, 30, -845], 18));
console.clear();

function maxMultiple(divisor, bound) {
    let numberFound = false;
    let targetNumber;
    while (bound > 0 && !numberFound) {
        if (bound % divisor === 0) {
            targetNumber = bound;
            numberFound = true;
        }
        bound--;
    }
    return targetNumber
}

console.log(maxMultiple(2, 7));
console.clear();

function matrix(array) {
    let copyOfArray = JSON.parse(JSON.stringify(array));
    copyOfArray.forEach((subArray, index) => subArray[index] = subArray[index] >= 0 ? 1 : 0);
    return copyOfArray;
}

console.log(...matrix([[-1, 4, -5, -9, 3], [6, -4, -7, 4, -5], [3, 5, 4, -9, -1], [1, 5, -7, -8, -9], [-3, 2, 1, -5, 6]]));
console.clear();
//This implementation is working in this eviroment but not on codewars :(
var FilterString2 = function (value) {
    let regexResult = [...value.matchAll(/\d/g)];
    let result = [];
    regexResult.forEach(element => result.push(element[0]));
    return parseInt(result.join(''));
}
var FilterString = function (value) {
    let result = [];
    value.split('').forEach(char => {
        if ((47 < char.charCodeAt(0) && char.charCodeAt(0) < 58)) result.push(char)
    });
    return parseInt(result.join(''));
}
console.log(FilterString('a1b2c3'));
console.clear();

function doubleEveryOther(a) {
    let result = JSON.parse(JSON.stringify(a));
    result.forEach((_, index) => {
        if (index % 2 !== 0) {
            result[index] *= 2
        }
    });
    return result;
}

console.log(doubleEveryOther([1, 2, 3, 4]));
console.clear();

function switchDict(dic) {
    const innerDic = {};
    Object.entries(dic).forEach(([key, value]) => {
        Object.keys(innerDic).includes(value) ?
            innerDic[value].push(key)
            : innerDic[value] = [key];
    });
    return innerDic;
}

console.log(switchDict({
    'Ice': 'Cream',
    'Age': '21',
    'Light': 'Cream',
    'Double': 'Cream'
}));
console.clear();
const sumNested = arr => {
    if (typeof (sumNested.sum) === 'undefined') {
        sumNested.sum = 0;
    }
    arr.forEach((element) => {
        if (typeof (element) === 'object') sumNested(element);
        else sumNested.sum += element
    });
    const returnValue = sumNested.sum
    sumNested.sum = 0
    return returnValue;
};
//console.log(sumNested([1, [2, [3, [4]]]]));
console.log(sumNested([[1], []]));
console.log(sumNested([[1, 2, 3, 4]]));
console.log(sumNested([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(sumNested([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(sumNested([[[[], [], [[[[[[[[[[]]]]]]]]]]], [], [], [[[], [[]]]]], []]));
console.clear();

function getCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.split('').filter((char) => vowels.includes(char)).length;
}

console.log(getCount("abracadabra"));
console.clear();

function filter_list(l) {
    return l.filter(item => typeof (item) !== "string");
}

console.log(filter_list([1, 2, 'a', 'b']), [1, 2]);
console.clear();

function stray(numbers) {
    let i = 1;
    if (numbers[0] !== numbers[1] && numbers[0] !== numbers[1]) return numbers[0]
    while (numbers[i - 1] === numbers[i]) i++;
    return numbers[i];
}

console.log(stray([3, 17, 17, 17, 17, 17, 17]));

function maxDiff(list) {
    if (!list.length) return 0;
    return Math.max(...list) - Math.min(...list);
}

console.log(maxDiff([0, 1, 2, 3, 4, 5, 6]));

function modifiedSum(a, n) {
    return a.map(num => num ** n).reduce((sum, num) => sum + num, 0) - a.reduce((sum, num) => sum + num, 0)
}

console.log(modifiedSum([1, 2, 3], 3));