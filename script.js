const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");
const button6 = document.querySelector("#button6");
const button7 = document.querySelector("#button7");
const button8 = document.querySelector("#button8");
const button9 = document.querySelector("#button9");
const button0 = document.querySelector("#button0");
const buttonAdd = document.querySelector("#buttona");
const buttonSub = document.querySelector("#buttons");
const buttonMul = document.querySelector("#buttonm");
const buttonDiv = document.querySelector("#buttond");
const buttonEq = document.querySelector("#buttone");
const buttonDel = document.querySelector("#buttondel");
const buttonAc = document.querySelector("#buttonac");
const buttonPoint = document.querySelector("#buttonpoint");
const buttonCopy = document.querySelector("#buttoncopy");
let num = [];
let i = 0;
let k = 0;
let l = 0;
let l1;
let l2;
let a = 0;
let b = 0;
let n;
let ans;
let decimalPoint;
let finalAns = 0;
let index = 0;
let j = 0;
let operation = 0;
let position;
let copyAns;
button0.onclick = clickZero;
button1.onclick = clickOne;
button2.onclick = clickTwo;
button3.onclick = clickThree;
button4.onclick = clickFour;
button5.onclick = clickFive;
button6.onclick = clickSix;
button7.onclick = clickSeven;
button8.onclick = clickEight;
button9.onclick = clickNine;
buttonAdd.onclick = add;
buttonSub.onclick = subtract;
buttonMul.onclick = multiply;
buttonDiv.onclick = divide;
buttonEq.onclick = equal;
buttonDel.onclick = del;
buttonAc.onclick = ac;
buttonPoint.onclick = point;
buttonCopy.onclick = copy;

function clickZero() {
  if (i == 0 && index == 0) {
    result.innerText = 0;
    a = 0;
  }
  else
    result.innerText += 0;
  num[i] = [];
  num[i][index] = 0;
  i++;
}
function clickOne() {
  if (i == 0 && index == 0) {
    result.innerText = 1;
    a = 0;
  }
  else
    result.innerText += 1;
  num[i] = [];
  num[i][index] = 1;
  
  i++;
}
function clickTwo() {
  if (i == 0 && index == 0) {
    result.innerText = 2;
    a = 0;
  }
  else
    result.innerText += 2;
  num[i] = [];
  num[i][index] = 2;
  
  i++;
}
function clickThree() {
  if (i == 0 && index == 0) {
    result.innerText = 3;
    a = 0;
  }
  else
    result.innerText += 3;
  num[i] = [];
  num[i][index] = 3;
  
  i++;
}
function clickFour() {
  if (i == 0 && index == 0) {
    result.innerText = 4;
    a = 0;
  }
  else
    result.innerText += 4;
  num[i] = [];
  num[i][index] = 4;
  
  i++;
}
function clickFive() {
  if (i == 0 && index == 0) {
    result.innerText = 5;
    a = 0;
  }
  else
    result.innerText += 5;
  num[i] = [];
  num[i][index] = 5;
  
  i++;
}
function clickSix() {
  if (i == 0 && index == 0) {
    result.innerText = 6;
    a = 0;
  }

  else
    result.innerText += 6;
  num[i] = [];
  num[i][index] = 6;
  
  i++;
}
function clickSeven() {
  if (i == 0 && index == 0) {
    result.innerText = 7;
    a = 0;
  }
  else
    result.innerText += 7;
  num[i] = [];
  num[i][index] = 7;
  
  i++;
}
function clickEight() {
  if (i == 0 && index == 0) {
    result.innerText = 8;
    a = 0;
  }
  else
    result.innerText += 8;
  num[i] = [];
  num[i][index] = 8;
  
  i++;
}
function clickNine() {
  if (i == 0 && index == 0) {
    result.innerText = 9;
    a = 0;
  }
  else
    result.innerText += 9;
  num[i] = [];
  num[i][index] = 9;
  
  i++;
}
function add() {
  result.innerText += "+";
  operation = 1;
  l1 = i;
  if (decimalPoint == 1) {
    n = position - 1;
  }
  else {
    n = l1 - 1;
  }
  for (k = 0; k < l1; k++) {

    a += (Math.pow(10, n) * num[k][0]);
    n--;
  }
  
  index = 1;
  i = 0;
}
function subtract() {
  result.innerText += "-";
  operation = 2;
  l1 = i;
  if (decimalPoint == 1) {
    n = position - 1;
  }
  else {
    n = l1 - 1;
  }
  for (k = 0; k < l1; k++) {

    a += (Math.pow(10, n) * num[k][0]);
    n--;
  }
  
  index = 1;
  i = 0;
}
function multiply() {
  result.innerText += "\u00D7";
  operation = 3;
  l1 = i;
  if (decimalPoint == 1) {
    n = position - 1;
  }
  else {
    n = l1 - 1;
  }
  for (k = 0; k < l1; k++) {

    a += (Math.pow(10, n) * num[k][0]);
    n--;
  }
  
  index = 1;
  i = 0;
}
function divide() {
  result.innerText += "\u00F7";
  operation = 4;
  l1 = i;
  if (decimalPoint == 1) {
    n = position - 1;
  }
  else {
    n = l1 - 1;
  }


  for (k = 0; k < l1; k++) {

    a += (Math.pow(10, n) * num[k][0]);
    n--;
  }
  
  index = 1;
  i = 0;
  position = 0;
  decimalPoint = 0;

}

function del() {
  if (result.innerText != 0)
    result.innerText = result.innerText.slice(0, -1);
  if (i > 0)
    i--;


}

function equal() {
  l2 = i;
  //console.log(l1,l2);
  if (decimalPoint == 1) {
    n = position - 1;
  }
  else {
    n = l2 - 1;
  }
  for (k = 0; k < l2; k++) {

    b += (Math.pow(10, n) * num[k][1]);
    n--;
  }
  //console.log(b);
  if (operation == 1) {
    ans = a + b;

  }
  if (operation == 2) {
    ans = a - b;

  }
  if (operation == 3) {
    ans = a * b;

  }
  if (operation == 4) {
    ans = a / b;

  }
  finalAns = ans.toFixed(5);
  finalAns = parseFloat(finalAns);
  result.innerText = finalAns;
  operation = 0;

  i = 0;


  //index=1;
  index = 0;
  a = ans;
  b = 0;
  position = 0;
  decimalPoint = 0;

}

function ac() {
  result.innerText = "0";
  operation = 0;
  i = 0;
  index = 0;
  a = 0;
  b = 0;
  position = 0;
  decimalPoint = 0;
}

function point() {

  if (i == 0 && index == 0) {
    result.innerText = "0.";
    a = 0;
    num[i] = [];
    num[i][index] = 0;
    
    i++;
  }
  else
    result.innerText += "."
  position = i;
  decimalPoint = 1;
  console.log(position, decimalPoint);
}

function copy() {
  navigator.clipboard.writeText(finalAns);
}

