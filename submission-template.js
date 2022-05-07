const findSum = function(array) {
  let sum = 0;
  for (let num of array) {
    sum += num;
  }
  return sum;
};

const findFrequency = function(array) {
  const obj = {};
  array.forEach(item => {
    if (!obj[item]) {
      obj[item] = 1;
    } else { 
      obj[item]++;
    }})

  const sortedObj =  Object.entries(obj).sort((a,b) => b[1]-a[1]);
  const mostFrequent = sortedObj.shift();
  const leastFrequent = sortedObj.pop();
  return {most: `${mostFrequent[0]}`, least: `${leastFrequent[0]}`}
};

const isPalindrome = function(str) {
  let reverseStr = str.split("").reverse().join("");
  if (str.toLowerCase() === reverseStr.toLowerCase()) {
  	return true;
  } else {
    return false;
  }
}

const largestPair = function(array) {
	let bestPair = 0;
  let currentPair = 0;
  for (let i = 0; i < array.length; i++) {
  	currentPair = array[i] * array[i + 1];
    if (currentPair > bestPair) {
    	bestPair = currentPair;
    }
  }
  return bestPair;
};

const removeParenth = function(str) {
  let indexOne = str.indexOf("(");
  let indexTwo = str.indexOf(")");
  let beforeParenth = str.substring(0, indexOne);
  let afterParenth = str.substring(indexTwo + 1);
  return beforeParenth.concat(afterParenth);
};

const scoreScrabble = function(str) {
  let key = {a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, n: 1, r: 1, s: 1, t: 1, d: 2, g: 2, b: 3, c: 3, m: 3, p: 3, f: 4, h: 4, v: 4, w: 4, y: 4, k: 5, j: 8, x: 8, q: 10, z: 10};
  let score = 0;
  str = str.toLowerCase();
  for (i = 0; i < str.length; i++) {
    score += key[str[i]]; 
  }
  return score;
};

