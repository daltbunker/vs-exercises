var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

function encrypt(message, value) {
    let encryptedMessage = ""
    for (let i = 0; i < message.length; i++) {
        if (/[a-z]/.test(message[i])) {
            const newCharCode = message[i].charCodeAt() + value
            encryptedMessage +=  newCharCode > 122 ? String.fromCharCode(newCharCode - 122 + 96) : String.fromCharCode(newCharCode)
        } else {
            encryptedMessage += message[i]
        }
    }
    console.log(encryptedMessage)
}

encrypt(input, shift)
