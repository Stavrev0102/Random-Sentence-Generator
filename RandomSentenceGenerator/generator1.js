function randomSentenceGenerator() {
    
    let names = ["Peter", "Michell","Jane","Steve"];
    let places = ["Sofia","Plovdiv","Varna","Burgas"];
    let verbs = ["eats","hold","sees","plays with","brings"];
    let nouns = ["stones", "cake", "apple", "laptop", "bikes"];
    let adverbs = ["slowly", "diligently", "warmly", "sadly", "rapidly"];
    let details = ["near the river", "at home", "in the park"];
    
    function getRandomWord (array) {
    let word = array[Math.floor(Math.random() * array.length)];
    return word;
    }
    
    let randomNames = getRandomWord(names);
    let randomPlaces = getRandomWord(places);
    let randomVerbs = getRandomWord(verbs);
    let randomNouns = getRandomWord(nouns);
    let randomAdverbs = getRandomWord(adverbs);
    let randomDetails = getRandomWord(details);
    
    let who = `${randomNames} from ${randomPlaces}`;
    let action = `${randomAdverbs} ${randomVerbs} ${randomNouns}`;
    let sentence = `${who} ${action} ${randomDetails}`
    
    console.log('Hello, this is your first random-generated sentence:');
    console.log(sentence);
    
    let recursiveAsyncReadLine = function() {
        
         {
    
        }
    } 
    recursiveAsyncReadLine()
    
    } randomSentenceGenerator()