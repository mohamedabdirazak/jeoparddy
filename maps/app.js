// Quick Question #1
// What does the following code return?

// new Set([1,1,2,2,3,4])
//it returns
{1,2,3,4}


// What does the following code return?

// [...new Set("referee")].join("")

[...new Set("referee")].join("") //'ref'



// What does the Map m look like after running the following code?

// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);

   {Array(3) => true}
  {Array(3) => false}

//   Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

// hasDuplicate([1,3,2,1]) // true
// hasDuplicate([1,5,-1,4]) // false

const hasDuplicate = arr => new Set(arr).size !== arr.length
