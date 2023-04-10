console.log('='.repeat(25), '\n' + 'QUESTION 1');
// QUESTION 1
for (i=1; i<=7; i++) {
    console.log(i);
}


console.log('='.repeat(25), '\n' + 'QUESTION 2');
// QUESTION 2
for (i=5; i<=25; i+=4) {
    console.log(i);
}


console.log('='.repeat(25), '\n' + 'QUESTION 3a');
// QUESTION 3a
const wizards = ['Harry Potter', 'Hermione Granger', 'Ron Weasley'];
console.log(wizards);


console.log('='.repeat(25), '\n' + 'QUESTION 3b');
// QUESTION 3b
for (index of wizards) {
    console.log(index);
}


console.log('='.repeat(25), '\n' + 'QUESTION 4a');
// QUESTION 4a
let harryPotterMovies = 0;
console.log(harryPotterMovies);


console.log('='.repeat(25), '\n' + 'QUESTION 4b');
// QUESTION 4b
while (harryPotterMovies < 8){
    harryPotterMovies += 1;
}


console.log('='.repeat(25), '\n' + 'QUESTION 4c');
// QUESTION 4c
console.log(harryPotterMovies);


console.log('='.repeat(25), '\n' + 'BONUS 5a');
// BONUS 5a
const hogwartsHouses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
console.log(hogwartsHouses);


console.log('='.repeat(25), '\n' + 'BONUS 5b');
// BONUS 5b
for (house of hogwartsHouses) {
    for (letter of house){
        console.log(letter);
    };
};


console.log('='.repeat(25), '\n' + 'BONUS 6a');
// BONUS 6a
const quote = ['Yer', 'A', 'Wizard', 'Harry'];
console.log(quote);


console.log('='.repeat(25), '\n' + 'BONUS 6b');
// BONUS 6b

let sentence = '';
for (i=0; i<quote.length; i++) {
    if (i === 2) {
        sentence += quote[i] + ', '
    } else if (i === 3) {
        sentence += `${quote[i]}!`
    } else {
    sentence += quote[i] + ' ';
    }
    }
    
    console.log(sentence);




console.log('='.repeat(25), '\n' + 'BONUS 7');
// BONUS 7
for (i=1; i<=25; i++){
    if (i % 3 == 0 && i % 5 == 0) {
    console.log('Expecto Patronum');
    } else if (i % 3 == 0){
        console.log('Expecto');
    } else if (i % 5 == 0) {
        console.log('Patronum');
    } else {
        console.log(i);
    }
    
}
console.log('='.repeat(25), '\n' + 'END');





