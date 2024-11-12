let exercise  = [ "Push-ups", "Sit-ups", "Bear Crawls", "1 mile run", "60 second plank", "Burpees", "Jumping Jacks", "Squats", "Weighted Squats", "Inch Worms"];
let shuffleArray = (array) => {
    
    for (let i = array.length - 1; i >= 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    
} 
shuffleArray(exercise);

let myFuction = (array) =>{
    let count = +prompt("Write a lot exercise want to do?");
    if ( count > exercise.length || count < 1 ){
        console.log("turi buti daugiau uz 0 bet mazaiu nei 10");
        
        return;
    }
    let random = [];
    for( let i = 0; i < count; i++){
        random.push(exercise.pop())
    }
    return random;
}
console.log(myFuction(exercise));
