function checkType(arg, type)
{
    return typeof(arg) === type? true : false;
}

// 1. Crea una funzione che controlli due numeri. Restituisci "true" se uno dei due è 50 o se la somma dei due è 50.

function fiftyCheck(a, b)
{
    if(!checkType(a,'number') || !checkType(b,'number')){
        return "wrong argument type, please make sure only numbers are being passed";
    }

    return a === 50 || b === 50 || (a + b) === 50 ? true : false;;
}

console.log("fiftyCheck - " + fiftyCheck("1",49));

// 2. Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa.
//    Passa la stringa e la posizione come parametri e restituisci la stringa modificata

function stringModifier(str, p)
{
    if(!checkType(str,'string')){
        return "Invalid type argument (" + typeof(str) +" instead of string)";
    }

   if (p > str.length){
      return "The string is shorter than the position to remove";
   }

   return str.replace(str.charAt(p),"");
}

console.log("stringModifier - " + stringModifier("Test String", 6));

// 3. Crea una funzione che controlli se due numeri siano compresi  tra 40 e 60 o tra 70 e 100.
//    Restituisci 'true' se rispecchiano queste condizioni, altrimenti restituisci 'false'

function checkIntervals(a,b)
{
    if(!checkType(a,'number') || !checkType(b,'number')){;
        return "Wrong argument type, please make sure only numbers are being passed";
    }

    return (a >= 40 && a <= 60 && b >= 40 && b <= 60) || (a >= 70 && a <= 100 && b >= 70 && b <= 100) ? true : false;
}

console.log("checkIntervals - " + checkIntervals(40,50));

// 4. Crea una funzione che accetti un nome di città come parametro e restituisca il nome stesso se inizia con "Los" o "New",
//    altrimenti restituisci false

function townCheck(str)
{    
    if(!checkType(str,'string')){
        return "invalid type argument (" + typeof(str) +" instead of string)";
    }

    let tempStr = str.slice(0,3);

    return tempStr === "Los" || tempStr === "New" ? str : "false";
}

console.log("townCheck - " + townCheck("Los Angeles"));

// 5. Crea una funzione che calcoli e restituisca la somma di tutti gli elementi di un array. L'array deve essere passato come argomento

function arrCalc(arr)
{
    let sum = 0;

    for(let i = 0; i < arr.length; i++)
    {
        let n = arr[i];
        if(!checkType(n,'number')){
            console.log("arrCalc - slot " + i + " " + "of argument array is not a number, excluding it from the calculation");
            continue;
        }
        sum += n;
    }

    return sum;
}

let array = [2,"a",3];
console.log("arrCalc - " + arrCalc(array));

// 6. Crea una funzione che controlli che un array NON contenta i numeri 1 o 3 , se NON li contiene restituisci true, altrimenti false

function arrCheck(arr)
{
    for(let i = 0; i < arr.length; i++)
    {
        let n = arr[i];
        if(!checkType(n,'number')){
            continue;
        }

        if(n === 1 || n === 3)
            return false;
    }

    return true;
}

console.log("arrCheck - " + arrCheck(array));

// 7. Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro
//    Angolo acuto < 90
//    Angolo ottuso >= 90 e < 180
//    Angolo Piatto === 180
//    Angolo Concavo > 180 e < 360
//    Angolo Giro >= 360

function angleType(deg)
{
    if(deg < 1 || deg > 360){
        return "Please keep the degree interval between 1 and 360";
    }

    if(!checkType(deg,'number')){
        return "Please insert a number";
    }

    if(deg < 90){
        return "deg " + deg + " " + "forms an acute angle"; 
    }
    else if(deg === 90){
        return "deg " + deg + " " +  "forms a right angle"; 
    }
    else if(deg > 90 && deg < 180){
        return "deg " + deg + " " +  "forms an obtuse angle"; 
    }
    else if(deg === 180){
        return "deg " + deg + " " +  "forms a straight angle"; 
    }
    else if(deg > 180 && deg < 360){
        return "deg " + deg + " " +  "forms a concave angle"; 
    }
  
    return "deg " + deg + " " +  "forms a round angle"; 
}

console.log("angleType - " + angleType(360));

// 8. Crea una funzione che costruisca un acronimo a partire da una frase. Es: "Fabbrica Italiana Automobili Torino" -> FIAT

function shortener(str)
{
    let short = "";
    for(let s = 0; s < str.length; s++)
    {
       
        let str2 = s === 0 ? str[s] : str[s+1];
        if(s === 0 || str[s] === " "){
           
            short += str2;
           
        }
    }
    return short;
}

console.log("shortener - " + shortener("Industrie Biochimiche Associate"));