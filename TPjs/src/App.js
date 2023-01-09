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
      console.log("Début Fonction findLargestNumber")
      console.log(numbers)
      console.log("Le plus grand nombre est : ", Math.max(...numbers))
      console.log("Fin Fonction findLargestNumber")
      return Math.max(...numbers) 
  }

  function sortWords (words)
  {
    console.log("Début Fonction sortWords")
    console.log(words)
    console.log("Les mots triés dans l'odre ", words.sort())
    console.log("Fin Fonction sortWords")
    return words.sort()
  }

  function countOccurrences (word, letter)
  {
    let numberLetter = 0
    for (const element of word) {
      if (element == letter)
      {
        numberLetter++
      }
    }
    console.log("Début Fonction countOccurrences")
    console.log("Notre lettre apparait : " + numberLetter + " fois.")
    console.log("Fin Fonction countOccurrences")
    return numberLetter
  }

  function flattenArray (arrayOfArray)
  {
    console.log("Début Fonction flattenArray")
    console.log("Notre tableua initial : ", arrayOfArray)
    console.log(arrayOfArray.flat())
    console.log("Fin Fonction flattenArray")
    return arrayOfArray.flat()
  }

  function removeDupes (arrayNumber) 
  {
    console.log("Début Fonction removeDupes")
    console.log("Notre tableau initial : ", arrayNumber)
    const set = new Set(arrayNumber)
    console.log("Notre tableau après : ", set)
    console.log("Fin Fonction removeDupes")
    return set
  }

  function swapVariables  (x, y) 
  {
    console.log("Début Fonction swapVariables")
    console.log("AVANT : x = ", x, " et y = ", y)
    let z = x
    x = y
    y = z
    console.log("APRES : x = ", x, " et y = ", y)
    console.log("Fin Fonction swapVariables")
  }

  function parseObject (objectA)
  {
    console.log("Début Fonction parseObject")
    const monTableauObject = Object.values(objectA)
    console.log(objectA)
    console.log(monTableauObject)
    console.log("Fin Fonction parseObject")
    return monTableauObject
  }

  function mergeObjects (objectA, objectB)
  {
    console.log("Début Fonction mergeObjects")
    console.log("Objet A : ", objectA, "Objet B : ", objectB)
    const mergeObject = Object.assign(objectA, objectB)
    console.log("Résulat de la fusion des deux objets : ", mergeObject)
    console.log("Fin Fonction mergeObjects")
    return mergeObject
  }

  function sumArray (numbers)
  {
    console.log("Début Fonction sumArray")
    console.log("numbers[] = ",numbers)
    const initalValue = 0;
    const sumNumbers = numbers.reduce(
      (add, currentValue) => add + currentValue, initalValue);
    console.log("Le total de numbers[] = ",sumNumbers)
    console.log("Fin Fonction sumArray")
    return sumNumbers
  }

  function sortObject (objectC)
  {
    console.log("Début Fonction sortObject")
    console.log("L'objet initial : ", objectC)
    let a, b, c
    ({a, b, c} = objectC)
    console.log("a = ", a)
    console.log("b = ", b)
    console.log("c : ", c)
    const tab = [a, b, c]
    const tabSort = tab.sort()
    console.log("L'objet trié et mis sous forme de tableau : ", tabSort)
    console.log("Fin Fonction sortObject")
    return tab
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
}

export default App;
