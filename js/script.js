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
//creo numeri random
function getRandomNumber( min, max){
    return Math.floor(Math.random()  * (max - min +1) + min) ;
}

//mostro all'utente 5 numeri random
function getAlert(min, max,total){
    const numbers=[]
    while(numbers.length < total){
        let numb;
        numb=getRandomNumber(min, max)
        if(!numbers.includes(numb)){
            numbers.push(numb);
        }
        
    }
    return alert(numbers),numbers;
}

//chiedo all'utente 5 numeri
function getPrompt(array){

    //*l'utente sceglie 5 numeri
    let userNumb;
    while(!userNumb || !isNaN(userNumb)){

        for(let i = 0; i < 5; i++){
            userNumb=parseInt(prompt('inserisci i numeri che ricordi'))
            if(userNumb !== array[i] || !isNaN(userNumb)){
                array.push(userNumb)
            }else{
                userNumb=parseInt(prompt('inserisci un numero valido'))
                
            }
        }
        return array;
    }
}


//gli mostro il risultato 
function getResult(array,secondArray){

    array=getPrompt(array);

    //*verifico il risultato
    let message=' '
    
    const winners=secondArray.filter((numb,i)=>{
        if( array.includes(numb)){
            return true;
        }
        return false;
    })

    message=(` Hai indovinato ${winners.length} numeri:${winners}`);
    if(!winners.length){
        message=(`Hai indovinato ${winners.length} numeri:${winners}`);
        
    }
            
            
    console.log(message);
    
    console.log(secondArray);
    console.log(array);
    
    alert(message)
    return array,message;
}


//Esecuzione
//*Mostro i numeri all'utente tramite alert
const cpuNumbers=getAlert(1,100,5);
console.log(cpuNumbers)





//*Chiedo all'utente di scrivere 5 numeri e li inserisco in un'array
const list=[];
// dichiaro il risultato
setTimeout( ()=>{
    getResult(list,cpuNumbers,)
}, 5000);


