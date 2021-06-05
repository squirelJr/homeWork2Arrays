function product(a,b) {
    return a*b;
}

console.log(product(7,8));

function task2(days=365,year=24,month=12) {
    console.log('There are ' + days +' days,'+month+' months in the year. ' + 'By the way I am '+ year +' years old.')
}

task2();

/* function christmasEve(){
        console.log("HOHOHOHO");    
}
*/

const christmasEve = function() {
    const print = 'HOHOHOHO';
    return print;
}
console.log(christmasEve());

/* let product = function(a,b,c){
    return a*b*c;
} => arrow */

const product1 = (a,b,c) =>{
    console.log(a*b*c) ;  
} 
product1(4,3,2);

let age = prompt('Enter your age','how old are you?');

const ageCheck = function(){
     if(age>18){
        alert('you are old enough.');
    }else if(age>=16 && age<=18){
        alert('Soon enough');
    }else if(age<16){
        alert('aborted!')
    }
}
ageCheck();

function addFive() {
    const sum =+ 5;
    return 'NaN';
}
console.log(addFive())



let message = function(){
    return 'Hello'
}
function world() {
    return 'World';
}
console.log(message()+' ' + world());

//მასივები
var giosLeqciebi = ['gamarjoba', 'giorgi','andro', 'anar', 'tako', 'tamar','mjera','sauketeso','developerebi', 'iqnebit', 'madloba', 'vashli','yvelas','ani','avto','wasulebi']

giosLeqciebi.push('warmatebebi');
console.log(giosLeqciebi)

giosLeqciebi.splice(10,7,'genacvalet');

console.log (giosLeqciebi)


