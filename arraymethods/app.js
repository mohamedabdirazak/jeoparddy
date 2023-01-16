
//Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

//doubleValues([1,2,3]) // [2,4,6]
//doubleValues([5,1,2,3,10]) // [10,2,4,6,20]


function double(arr){
    let newArr =[]
    arr.forEach(function(val){
        newArr.push(val*2)
    })
    return newArr;
};
// Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

// onlyEvenValues([1,2,3]) // [2]
// onlyEvenValues([5,1,2,3,10]) // [2,10]
function onlyEvenValues(arr){
    let newArr = [];
    arr.forEach (function(val){
        if (val == null) return false
    })
};
// Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

// showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
// showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

function showFirstAndLast(arr){
    let newArr = [];
    arr.forEach (function(val){
        newArr.push(val.slice(0,1))
    })
    return newArr
};
// Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object

// addKeyAndValue(
// [
//   {name: 'Elie'},
//   {name: 'Tim'},
//   {name: 'Matt'},
//   {name: 'Colt'}
// ],
//   'title',
//   'instructor'
// )

// /*
//   [
//     {name: 'Elie', title:'instructor'},
//     {name: 'Tim', title:'instructor'},
//     {name: 'Matt', title:'instructor'},
//     {name: 'Colt', title:'instructor'}
//   ]
// */


function addKeyAndValue(arr, key, value) {
    arr.forEach(function(val) {
      val[key] = value;
    });
    return arr;
  }
//   Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

// vowelCount('Elie') // {e:2,i:1};
// vowelCount('Tim') // {i:1};
// vowelCount('Matt') // {a:1})
// vowelCount('hmmm') // {};
// vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1}
function vowelcount(str){
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = {};
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLoweCase())) count[str.slice(i, 1)] = str.slice(i, str.length -1)
    }
    }
    // map
    // doubleValuesWithMap
    // Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled
    
    // doubleValuesWithMap([1,2,3]) // [2,4,6]
    // doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
    function doubleValuesWithMap(arr) {
        return arr.map(function(val) {
          return val * 2;
        });
      };
      //findInObj
// Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

// findInObj(
//   [
//     {first: 'Elie', last:"Schoppik"},
//     {first: 'Tim', last:"Garcia", isCatOwner: true},
//     {first: 'att', last:"Lane"},
//     {first: 'Colt', last:"Steele", isCatOwner: true}
//   ],
//   'isCatOwner',
//   true
// )

// {first: 'Tim', last:"Garcia", isCatOwner: true}
  
function findInObj(arr, key, searchValue) {
    return arr.filter(function(val) {
      return val[key] === searchValue;
    })[0];
  };
  removeVowels
// Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

// removeVowels('Elie') // ('l')
// removeVowels('TIM') // ('tm')
// removeVowels('ZZZZZZ') // ('zzzzzz')
function removeVowels(str) {
    const vowels = "aeiou";
    return str
      .toLowerCase()
      .split("")
      .filter(function(val) {
        return vowels.indexOf(val) === -1;
      })
      .join("");
  };

//   doubleOddNumbers
// Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and fitler to double and then filter the odd numbers).

// doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
// doubleOddNumbers([4,4,4,4,4]) // []

doubleOddNumbers([4,4,4,4,4]) // []
function doubleOddNumbers(arr) {
    return arr
      .filter(function(val) {
        return val % 2 !== 0;
      })
      .map(function(val) {
        return val * 2;
      });
    }