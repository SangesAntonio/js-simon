console.log('js ok');
/*Generare 5 numeri casuali e mostrarli in un alert all'utente.
Dall'ok  parte un timer di 30 secondi. (ricordate che l'alert blocca il flusso. il timer partirà a contare dopo che avete schiacciato ok.)
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri  sono stati indovinati dall'utente.
Bonus:
controllare che i numeri casuali siano diversi tra loro
controllare che l'utente non inserisca 2 volte lo stesso numero*/

// 1 genero 5 numeri random
//!funzioni
function getRandomNumber( min, max){
    return Math.floor(Math.random()  * (max - min +1) + min) ;
}
function getPromptFiveTimes(array){
    let userNumb;
    //while(!userNumb){
        for(let i = 0; i < 5; i++){
            userNumb=parseInt(prompt('inserisci i numeri che ricordi'))
            if(userNumb !== array[i]){
                array.push(userNumb)
                
            }
        }
    //}
    return array;
}

//Esecuzione
const numbers= [];
for(let i = 0; i < 5; i++){
    numbers.push(getRandomNumber(1, 50));
}

//*Mostro i numeri all'utente
alert(numbers);


//*Chiedo all'utente di scrivere 5 numeri e li inserisco in un'array
const list=[];

setTimeout( ()=>{getPromptFiveTimes(list)}, 5000);

//*verifico il risultato
let message='';
for(let i = 0; i < 5; i++){
    if(numbers[i] === list[i]){
        message='hai vinto'
    }else{
        message='hai perso'
    }

}
console.log(message);

console.log(numbers);
console.log(list);
