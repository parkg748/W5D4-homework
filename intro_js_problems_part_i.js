function madLib(verb, adj, noun) {
  `We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}.`
}

function isSubstring(searchString, subString) {
  return searchString.includes(subString);
}

function fizzBuzz (array) {
  const fizzBuzzArr = [];
  array.forEach(el => {
    if ((el % 3 === 0) ^ (el % 5 === 0)) {
      fizzBuzzArr.push(el)
    }
  });
  return fizzBuzzArr;
}

function isPrime(number) {
  return false if (number < 2);
  return true if (number === 2);
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function sumOfNPrimes(n) {
  let sum = 0;
  let countPrimes = 0;
  let i = 2;
  while (countPrimes < n) {
    if (isPrime(i)) {
      sum += i;
      countPrimes++;
    }
    i++;
  }
  return sum;
}
