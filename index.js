// Code your solutions in this file
//for (let age = 30; age < 40; age++) {
//    console.log(`I'm ${age} years old. Happy birthday to me!`);
//    debugger;
//  }

//const gifts = ["teddy bear", "drone", "doll"];

//function wrapGifts(gifts) {
//  for (let i = 0; i < gifts.length; i++) {
//   console.log(`Wrapped ${gifts[i]} and added a bow!`);
//    debugger;
//  }
//
//  return gifts;
//}

//wrapGifts(gifts);

const names = ["Guadalupe", "Ollie", "Aki"];



function writeCards(names, event) {
const message = []
   for (let i = 0; i < names.length; i++) {
       message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
}
return message;
}
console.log(writeCards(names, "surprise"));

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        --number;
    }
}

console.log(countDown(4));
