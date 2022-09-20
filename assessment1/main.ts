// Use type and mentioned in the name of the variable
// Assign an appropriate value
const aNumber: number= 1;
const aString: string= "hello";
const aBigInt: number=(9007199254740991);
const anArray:number[]= [1,2];
const anUnknown: unknown= 10;
const anObject: object= {name:"luis", age:42};
const aTuple: [number, string]= [5, "hello"];
enum CardinalDirections{
    North,
    East,
    South,
    West
  };

// Implement this function any type accordingly
function isEven(number: number): boolean {
    return number % 2 == 0
}

// Type the following following function and variable
type Person = {
    name: string
}

type Developer = {
    role: string
}

const jane: Person = {
    name: 'Jane'
}

const joe: Developer = {
    role: 'Devops'
}

const people: [Person, Developer ] =  [
    jane, joe
]

function printPeople(people: (Developer | Person)[]): void {
    // Print the name of person or the role in this function
    people.forEach(person => {
        for (const key in person) {
            console.log(`${key}: ${person[key]}`)
        }
    });
}

// Type the encrpyt function correctly


const encryptText = (plainText: string, shift: number) => {
    let cipherArr: string[] = []
    let cipherLetter: string;

    plainText.split("").map(letter => {
      let code = letter.charCodeAt(letter)
      if(letter === " ") {
        return cipherArr.push(letter)
      }
      // Uppercase letters
      if (code >= 65 && code <= 90) {
        cipherLetter = String.fromCharCode(((code - 65 + shift) % 26) + 65)
      }
      // Lowercase letters
      else if (code >= 97 && code <= 122) {
        cipherLetter = String.fromCharCode(((code - 97 + shift) % 26) + 97)
      }
      return cipherArr.push(cipherLetter)
    })  
    return cipherArr.join("")
}


// Solve using a literal union type
type Vegetable = "Cucumber" | "Eggplant" | "Cabbage";

let vegetable: Vegetable= "Cucumber" // :Vegetable:



// Solve the following exercise with an intersection type
type Complainer = {
    complains: () => void
}

type Beerdrinker = {
    drinkBeer: () => void
}

type ChocolateLover = {
    eatChocolate: () => void
}

type Belgian = Complainer & Beerdrinker & ChocolateLover;
function doBelgianThings(belgian: Belgian): void
{
    belgian.complains();
    belgian.drinkBeer();
    belgian.eatChocolate();
}

let me: Belgian = {
    complains: () : void => {
        
    },
    drinkBeer: () : void => {
        
    },
    eatChocolate: () : void => {
        
    }

}
doBelgianThings(me);

module.exports = {
    isEven,
    print,
    encryptText
};