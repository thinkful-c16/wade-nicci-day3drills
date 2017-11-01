const cipher = {
    a: 2,
    b: 3,
    c: 4,
    d: 5
};

const str = 'craft block argon meter bells brown croon droop';
//console.log(typeof str);

function decode(string){
    const strToArr = string.split(" ");
    //console.log(strToArr);
    let decodedWord = "";

    strToArr.forEach(function(word){
        const firstLetter = word.charAt(0);

        switch(firstLetter){

            case 'a':
            //console.log(cipher.a);
            //console.log(word.charAt(cipher.a - 1));
            decodedWord += word.charAt(cipher.a - 1);
            break;

            case 'b':
            decodedWord += word.charAt(cipher.b - 1);
            break;

            case 'c':
            decodedWord += word.charAt(cipher.c - 1);
            break;

            case 'd':
            decodedWord += word.charAt(cipher.d - 1);
            break;

            default:
            decodedWord += " ";

        }
    })

    return decodedWord;

}

console.log(decode(str));