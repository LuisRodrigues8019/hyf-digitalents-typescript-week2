import axios from "axios"


type Question = {
    "id": string;
    "tags": string[];
    "difficultyLevel": number;
    "difficulty": string; 
    "question": string;
}

const fetchQuestions = async () : Promise <Question[]> => {
    const response= await axios("https://the-trivia-api.com/api/questions");
    const data : Question[] = response.data
   const filteredValues : Question[] = data.filter(question => {
      if(!question.tags.includes("film")) {
        return question;
      }
    })
    return filteredValues;
 
  };


const difficultyQuestion = (filteredValues : Question []) => {
  filteredValues.forEach((question : Question) => {
    const difficulty : string = question.difficulty;
    let difficultyLevel : number = 0;
    switch (difficulty) {
      case "hard": difficultyLevel = 3;
        
        break;
        case "medium": difficultyLevel = 2;

     break;
        case "eassy": difficultyLevel = 1;

         break;
      default: difficultyLevel = 1;
        break;
    }

    question.difficultyLevel = difficultyLevel;
  });
  return filteredValues.sort((a,b) =>a.difficultyLevel - b.difficultyLevel)
}


const init = async () : Promise <void> => {
  const data: Question[] = await fetchQuestions();
  const sortedValues : Question[] = difficultyQuestion(data);
  sortedValues.forEach((value: Question) => {
    console.log(value.question)
  });
  
}

init();

// Fetch a set of questions from https://the-trivia-api.com/api/questions?limit=5
// Filter out any questions with tag "film"
// Sort them according to the difficulty
// Log the output to the user

// Sample Output:
// Who succeeded Winston Churchill when he resigned in 1955?
// Which author wrote 'The Left Hand of Darkness'?
// Who was the first female American astronaut?


