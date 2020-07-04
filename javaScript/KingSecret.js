const crypto = require('crypto');
const mysecret = "terrible secret"
var secret = Buffer.from(mysecret).toString('hex'); 
//transformar hex em binario
//preencher o lado esqqerdo com 0 até o tamanho da string
function hextobin(s){
    let binaryString = '';

    for (let i = s.length - 1; i >= 0; i--) {
      let num = parseInt(s[i], 16);

      if (isNaN(num)) {
        throw new Error('Invalid hex character.');
      }
      binaryString = leftpadzero(num.toString(2), 4) + binaryString;
      }
      return binaryString;
}
const fieldBits = 8;
let zeroPadding = new Array(1024).join('0');
function leftpadzero(stringToPad, multipleOfBits = fieldBits) {
    let bitsToPad;

    if (multipleOfBits === 0 || multipleOfBits === 1) {
      return stringToPad;
    }

    if (multipleOfBits && multipleOfBits > 1024) {
      throw new Error('Padding must be multiples of no larger than 1024 bits.');
    }

    if (stringToPad) {
      bitsToPad = stringToPad.length % multipleOfBits;
    }

    if (bitsToPad) {
      return (zeroPadding + stringToPad).slice(-(multipleOfBits - bitsToPad + stringToPad.length));
    }

    return stringToPad;
}
secret = hextobin(secret);
console.log(mysecret + " " + secret)
const prime = (2**521) - 1

console.log(secret < prime)
var modulus =  secret % prime
console.log(modulus);

var polinomial = []
for (i = 0 ; i <=2 ; i++){
    var newran = crypto.randomBytes(16);
    console.log(newran)
    newran = hextobin (newran);
    polinomial.push( newran % prime);
}
console.log(polinomial.length)
console.log(polinomial)