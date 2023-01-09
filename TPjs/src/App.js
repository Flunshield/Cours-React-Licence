import logo from './logo.svg';
import './App.css';

function App() {

  const numbers = [1,2,3,4,5,6]
  const words = ["un", "deux", "trois"]
  const word = "ununununjkjhgfghj"
  const letter = "j"
  const arrayOfArray = [0, 1, 2, [3, 4, 5], 6, 7];
  const arrayNumber = [0, 0, 1, 2, 3, 3, 4, 5, 6, 6]
  let x = 1
  let y = 2
  const objectA = {a: 1, c: 3, b: 2}
  const objectB = {c: 4, d: 5}
  const objectC = {a: 9, c: 5, b: 2}

  function findLargestNumber (numbers)
  {
    console.log("===============================================================")
    console.log("Start Function findLargestNumber")
    console.log(numbers)
    console.log("The largest number is : ", Math.max(...numbers))
    console.log("End Function findLargestNumber")
    console.log("===============================================================")
    return Math.max(...numbers) 
  }

  function sortWords (words)
  {
    console.log("Start Function sortWords")
    console.log(words)
    console.log("Words sorted in order ", words.sort())
    console.log("End Function sortWords")
    console.log("===============================================================")
    return words.sort()
  }

  function countOccurrences (word, letter)
  {
    console.log("Start Function countOccurrences")
    let numberLetter = 0
    for (const element of word) {
      if (element == letter)
      {
        numberLetter++
      }
    }
    console.log("Our letter appears : " + numberLetter + " once.")
    console.log("End Function countOccurrences")
    console.log("===============================================================")
    return numberLetter
  }

  function flattenArray (arrayOfArray)
  {
    console.log("Start Function flattenArray")
    console.log("Our initial table : ", arrayOfArray)
    console.log("Our transformed table : ", arrayOfArray.flat())
    console.log("End Function flattenArray")
    console.log("===============================================================")
    return arrayOfArray.flat()
  }

  function removeDupes (arrayNumber) 
  {
    console.log("Start Function removeDupes")
    console.log("Our initial table : ", arrayNumber)
    const set = new Set(arrayNumber)
    console.log("Our transformed table : ", set)
    console.log("End Function removeDupes")
    console.log("===============================================================")
    return set
  }

  function swapVariables  (x, y) 
  {
    console.log("Start Function swapVariables")
    console.log("BEFORE : x = ", x, " et y = ", y)
    let z = x
    x = y
    y = z
    console.log("AFTER : x = ", x, " et y = ", y)
    console.log("End Function swapVariables")
    console.log("===============================================================")
  }

  function parseObject (objectA)
  {
    console.log("Start Function parseObject")
    const monTableauObject = Object.values(objectA)
    console.log(objectA)
    console.log(monTableauObject)
    console.log("End Function parseObject")
    console.log("===============================================================")
    return monTableauObject
  }

  function mergeObjects (objectA, objectB)
  {
    console.log("Start Function mergeObjects")
    console.log("Objet A : ", objectA, "Objet B : ", objectB)
    const mergeObject = Object.assign(objectA, objectB)
    console.log("Result of merging the two objects : ", mergeObject)
    console.log("End Function mergeObjects")
    console.log("===============================================================")
    return mergeObject
  }

  function sumArray (numbers)
  {
    console.log("Start Function sumArray")
    console.log("numbers[] = ",numbers)
    const initalValue = 0;
    const sumNumbers = numbers.reduce(
      (add, currentValue) => add + currentValue, initalValue);
    console.log("The total of numbers[] = ",sumNumbers)
    console.log("End Function sumArray")
    console.log("===============================================================")
    return sumNumbers
  }

  function sortObject (objectC)
  {
    console.log("Start Function sortObject")
    console.log("Original purpose : ", objectC)
    let a, b, c
    ({a, b, c} = objectC)
    console.log("a = ", a)
    console.log("b = ", b)
    console.log("c : ", c)
    const tab = [a, b, c]
    const tabSort = tab.sort()
    console.log("The object sorted and tabulated : ", tabSort)
    console.log("End Function sortObject")
    console.log("===============================================================")
    return tabSort
  }

  findLargestNumber(numbers)
  sortWords(words)
  countOccurrences(word, letter)
  flattenArray(arrayOfArray)
  removeDupes(arrayNumber)
  swapVariables(x, y) 
  parseObject (objectA)
  mergeObjects (objectA, objectB)
  sumArray (numbers)
  sortObject (objectC)

  return (
    <h1 className=''>Launch the browser console to view the exercises</h1>
  )
}

export default App;
