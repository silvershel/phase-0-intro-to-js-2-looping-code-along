//build a function named writeCards() 
//that accepts two arguments: an array of string names, and an event name.

function writeCards(names, eventName) {
  let thankYouMessages = []; //create a new, empty array to hold the messages;

//Create a for loop with a counter that starts at 0 and increments at the end of each loop. 
//The for loop should stop once it has iterated over the length of the array.
  for (let i = 0; i < names.length; i++) {
    //build out the 'thank you' message for each name using string interpolation, 
    let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`; 
    //then add that message to the new array you created;
    //iterate through the input array and, inside the loop,
    thankYouMessages.push(message);
  }

//after the loop finishes and all of the messages have been added to the new array, 
//return the new array.
  return thankYouMessages;
}

//write a function, countDown, that takes in any positive integer and, 
//starting from that number, counts down to zero using console.log(). 
//Note that this means that running countDown(10); would actually log 11 times:


function countDown(startingNumber) {
    while (startingNumber >= 0) {
      console.log(startingNumber);
      startingNumber--;
    }
  }