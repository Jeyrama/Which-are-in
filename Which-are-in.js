/*
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical 
order of the strings of a1 which are substrings of strings of a2.

Example 1:
  a1 = ["arp", "live", "strong"]
  a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
  returns ["arp", "live", "strong"]

Example 2:
  a1 = ["tarp", "mice", "bull"]
  a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
  returns []
*/


// Solution

function inArray(arr1, arr2) {
  return [...new Set(array1)].filter(function(needle) {
    return arr2.some(function(haystack) {
      return haystack.indexOf(needle) > -1;
    });
  }).sort();
}

// or

function inArray(a1, a2) {
  let r = [];
  for (let i = 0; i < a1.length; i++) {
    let s1 = a1[i];

    for (let j = 0; j < a2.length; j++) {
      let s2 = a2[j];

      if (s2.indexOf(s1) != -1 && r.indexOf(s1) == -1) {
        r.push(s1);
      }
    }
  }
  return r.sort();
}