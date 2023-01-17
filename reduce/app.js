// extractValue
// Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

// const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
// ext
function extractValue (arr, name){
    return arr.reduce(function(acc,next){
        acc.push(next[key]);
        return acc;
    },[]);
};

// Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

// vowelCount('Elie') // {e:2,i:1};
// vowelCount('Tim') // {i:1};
// vowelCount('Matt') // {a:1})
// vowelCount('hmmm') // {};
// vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1}; -->

const vowels = "aeiou";
    return str.split('').reduce(function(acc,next){
        let lowerCased = next.toLowerCase()
        if(vowels.indexOf(lowerCased) !== -1){
            if(acc[lowerCased]){
                acc[lowerCased]++;
            } else {
                acc[lowerCased] = 1;
            }
        }
        return acc;
    })


//     addKeyAndValue
// Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

// const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];

// addKeyAndValue(arr, 'title', 'Instructor') //

// [
//   {title: 'Instructor', name: 'Elie'},
//   {title: 'Instructor', name: 'Tim'},
//   {title: 'Instructor', name: 'Matt'},
//   {title: 'Instructor', name: 'Colt'}
// ]
return arr.reduce(function(acc,next){
    if(cb(next)){
        acc[0].push(next);
    } else {
        acc[1].push(next);
    }
    return acc;
}, [[],[]]);
