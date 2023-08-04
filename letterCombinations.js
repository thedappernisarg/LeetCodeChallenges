// Letter Combinations of a Phone Number
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]
 

// Constraints:

// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].


/**
 * @param {string} digits
 * @return {string[]}
 */

var digitList = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
};

var letterCombinations = function(digits) {
    let subR = Array.from(digits);
    var item = [];
    let results = [];
    subR.map((x)=>{
        for (let [key, val] of Object.entries(digitList)) {
            if(key == x) {
                item.push(val);
            }
        }
    });

    if(item.length === 0){
        results = [];
    } else if(item.length === 1){
        let arr1 = Array.from(item[0]);
        results = arr1.flatMap(d => d );
    } else if(item.length === 2){
        let arr1 = Array.from(item[0]);
        let arr2 = Array.from(item[1]);
        results = arr1.flatMap(d => arr2.map(v => d + v));
    } else if(item.length === 3){
        let arr1 = Array.from(item[0]);
        let arr2 = Array.from(item[1]);
        let arr3 = Array.from(item[2]);
        let tempRes = arr1.flatMap(d => arr2.map(v => d + v));
        results = tempRes.flatMap(d => arr3.map(v => d + v));
    } else if(item.length <= 4){
        let arr1 = Array.from(item[0]);
        let arr2 = Array.from(item[1]);
        let arr3 = Array.from(item[2]); 
        let arr4 = Array.from(item[3]);
        let tempRes1 = arr1.flatMap(d => arr2.map(v => d + v));
        let tempRes2 = arr3.flatMap(d => arr4.map(v => d + v));
        results = tempRes1.flatMap(d => tempRes2.map(v => d + v));
    }
    return results;
};
 
digits = "";
console.log("Result", letterCombinations)