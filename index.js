// Code your solutions in this file
function countDown(posInt){
    for(let i = posInt; i > 0 ; i--){
        console.log(i);
    }
    console.log(0);
}

function writeCards(strArray, eventName){
    let temp = [];
    for(let i = 0; i < strArray.length; i++){
        let str = (`Thank you, ${strArray[i]}, for the wonderful ${eventName} gift!`);
        temp = [...temp, str];
    }
    return temp;
}