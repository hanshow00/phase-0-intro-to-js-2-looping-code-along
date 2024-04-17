// Code your solutions in this file
// Function to generate thank you messages for each name provided
function writeCards(namesArray, eventName) {
    const messagesArray = [];

    for (let i = 0; i < namesArray.length; i++) {
        const message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
        messagesArray.push(message);
    }

    return messagesArray;
}

// Function to count down from a given number to zero
function countDown(number) {
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}