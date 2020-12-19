//CLICK HANDLERS
let calcInput = document.getElementById('calc_input');
calcInput.value = (' ');
document.getElementById('a7').onclick = function (){
    calcInput.value += '7';
}
document.getElementById('a8').onclick = function (){
    calcInput.value += '8';
}
document.getElementById('a9').onclick = function (){
    calcInput.value += '9';
}
document.getElementById('a4').onclick = function (){
    calcInput.value += '4';
}
document.getElementById('a5').onclick = function (){
    calcInput.value += '5';
}
document.getElementById('a6').onclick = function (){
    calcInput.value += '6';
}
document.getElementById('a1').onclick = function (){
    calcInput.value += '1';
}
document.getElementById('a2').onclick = function (){
    calcInput.value += '2';
}
document.getElementById('a3').onclick = function (){
    calcInput.value += '3';
}
document.getElementById('a0').onclick = function (){
    if ((calcInput.value.indexOf('1')) !== -1
        || (calcInput.value.indexOf('2')) !== -1
        || (calcInput.value.indexOf('3')) !== -1
        || (calcInput.value.indexOf('4')) !== -1
        || (calcInput.value.indexOf('5')) !== -1
        || (calcInput.value.indexOf('6')) !== -1
        || (calcInput.value.indexOf('7')) !== -1
        || (calcInput.value.indexOf('8')) !== -1
        || (calcInput.value.indexOf('9')) !== -1) {
        calcInput.value += '0';
    }
}
    document.getElementById('aS').onclick = function () {
        CheckOperation();
            if (CheckerOperation === 0) {
                if ((calcInput.value.indexOf('1')) !== -1
                    || (calcInput.value.indexOf('2')) !== -1
                    || (calcInput.value.indexOf('3')) !== -1
                    || (calcInput.value.indexOf('4')) !== -1
                    || (calcInput.value.indexOf('5')) !== -1
                    || (calcInput.value.indexOf('6')) !== -1
                    || (calcInput.value.indexOf('7')) !== -1
                    || (calcInput.value.indexOf('8')) !== -1
                    || (calcInput.value.indexOf('9')) !== -1) {
                    calcInput.value += '/';
                }
            }
    }
    document.getElementById('aX').onclick = function () {
        CheckOperation();
        if (CheckerOperation === 0) {
            if ((calcInput.value.indexOf('1')) !== -1
                || (calcInput.value.indexOf('2')) !== -1
                || (calcInput.value.indexOf('3')) !== -1
                || (calcInput.value.indexOf('4')) !== -1
                || (calcInput.value.indexOf('5')) !== -1
                || (calcInput.value.indexOf('6')) !== -1
                || (calcInput.value.indexOf('7')) !== -1
                || (calcInput.value.indexOf('8')) !== -1
                || (calcInput.value.indexOf('9')) !== -1) {
                calcInput.value += '*';
            }
        }
    }
    document.getElementById('aM').onclick = function () {
        CheckOperation();
        if (CheckerOperation === 0) {
            if ((calcInput.value.indexOf('1')) !== -1
                || (calcInput.value.indexOf('2')) !== -1
                || (calcInput.value.indexOf('3')) !== -1
                || (calcInput.value.indexOf('4')) !== -1
                || (calcInput.value.indexOf('5')) !== -1
                || (calcInput.value.indexOf('6')) !== -1
                || (calcInput.value.indexOf('7')) !== -1
                || (calcInput.value.indexOf('8')) !== -1
                || (calcInput.value.indexOf('9')) !== -1) {
                calcInput.value += '-';
            }
        }
    }
    document.getElementById('aP').onclick = function () {
        CheckOperation();
        if (CheckerOperation === 0) {
            if ((calcInput.value.indexOf('1')) !== -1
                || (calcInput.value.indexOf('2')) !== -1
                || (calcInput.value.indexOf('3')) !== -1
                || (calcInput.value.indexOf('4')) !== -1
                || (calcInput.value.indexOf('5')) !== -1
                || (calcInput.value.indexOf('6')) !== -1
                || (calcInput.value.indexOf('7')) !== -1
                || (calcInput.value.indexOf('8')) !== -1
                || (calcInput.value.indexOf('9')) !== -1) {
                calcInput.value += '+';
            }
        }
    }
document.getElementById('aE').onclick = function (){
    CheckSlash();
    CheckerOperation = 0;
    if (CheckSwitch === 0){
        calcInput.value = eval(calcInput.value);
    }else {
        calcInput.value = '!!НЕЛЬЗЯ!!';
    }
}
document.getElementById('C').onclick = function () {
    calcInput.value = (' ');
    CheckSwitch = 0;
    CheckerOperation = 0;
}
//FUNCTIONS
//checking division by zero
let CheckSwitch = 0;
function CheckSlash() {
    if ((calcInput.value.indexOf('/0')) !== -1) {
        //console.log("division by zero");
        CheckSwitch = 1;
    }
}
//Checking number of operations
let CheckerOperation = 0;
function CheckOperation() {
    if ((calcInput.value.indexOf('/')) !== -1
        ||  (calcInput.value.indexOf('+')) !== -1
        ||  (calcInput.value.indexOf('-')) !== -1
        ||  (calcInput.value.indexOf('-')) !== -1
        ||  (calcInput.value.indexOf('*')) !== -1) {
        //console.log("many operations");
        CheckerOperation = 1;
    }
}
