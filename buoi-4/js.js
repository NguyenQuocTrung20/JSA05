const myAwesomeArray = [[1], [2], [3], [4], [5]]

const  flatMap =myAwesomeArray.flatMap(arr => arr * 10)

const flatAndMap =
myAwesomeArray.flat().map(arr => arr * 10)

isEqual(flatMap, flatAndMap)
console.log(flatAndMap);

