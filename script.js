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
let num = [];
let i=0;
let k=0;
let l=0;
let l1;
let l2;
let a=0;
let b=0;
let n;
let ans;

//num[] = {};
let index = 0;
//num[index]={};
let j=0;
let operation=0;
//num[i][index] = {};
button0.onclick = addZero;
button1.onclick = addOne;
button2.onclick = addTwo;
button3.onclick = addThree;
button4.onclick = addFour;
button5.onclick = addFive;
button6.onclick = addSix;
button7.onclick = addSeven;
button8.onclick = addEight;
button9.onclick = addNine;
buttonAdd.onclick = add;
buttonSub.onclick = subtract;
buttonMul.onclick = multiply;
buttonDiv.onclick = divide;
buttonEq.onclick = equal;
buttonDel.onclick = del;
buttonAc.onclick = ac;

function addZero()
{
  result.innerText += 0;
  num[i]=[];
  num[i][index]=0;
  console.log(num[i][index]);
  i++;
 // console.log(i);
  
}
function addOne()
{
  result.innerText += 1;
  num[i]=[];
  num[i][index]=1;
  console.log(num[i][index]);
  i++;
}
function addTwo()
{
  result.innerText += 2;
  num[i]=[];
  num[i][index]=2;
  console.log(num[i][index]);
  i++;
}
function addThree()
{
  result.innerText += 3;
  num[i]=[];
  num[i][index]=3;
  console.log(num[i][index]);
  i++;
}
function addFour()
{
  result.innerText += 4;
  num[i]=[];
  num[i][index]=4;
  console.log(num[i][index]);
  i++;
}
function addFive()
{
  result.innerText += 5;
  num[i]=[];
  num[i][index]=5;
  console.log(num[i][index]);
  i++;
}
function addSix()
{
  result.innerText += 6;
  num[i]=[];
  num[i][index]=6;
  console.log(num[i][index]);
  i++;
}
function addSeven()
{
  result.innerText += 7;
  num[i]=[];
  num[i][index]=7;
  console.log(num[i][index]);
  i++;
}
function addEight()
{
  result.innerText += 8;
  num[i]=[];
  num[i][index]=8;
  console.log(num[i][index]);
  i++;
}
function addNine()
{
  result.innerText += 9;
  num[i]=[];
  num[i][index]=9;
  console.log(num[i][index]);
  i++;
}
function add()
{
  result.innerText += "+";
  operation = 1;
  l1=i;
  n=l1-1;
  for(k=0;k<l1;k++)
    {
      
      a+=(Math.pow(10,n)*num[k][0]);
      n--;
    }
  console.log(a);
  index=1;
  i=0;
}
function subtract()
{
  result.innerText += "-";
  operation = 2;
  l1=i;
  n=l1-1;
  for(k=0;k<l1;k++)
    {

      a+=(Math.pow(10,n)*num[k][0]);
      n--;
    }
  console.log(a);
  index=1;
  i=0;
}
function multiply()
{
  result.innerText += "*";
  operation = 3;
  l1=i;
  n=l1-1;
  for(k=0;k<l1;k++)
    {

      a+=(Math.pow(10,n)*num[k][0]);
      n--;
    }
  console.log(a);
  index=1;
  i=0;
}
function divide()
{
  result.innerText += "/";
  operation = 4;
  l1=i;
  n=l1-1;
  for(k=0;k<l1;k++)
    {

      a+=(Math.pow(10,n)*num[k][0]);
      n--;
    }
  console.log(a);
  index=1;
  i=0;
}

function del()
{
  result.innerText =result.innerText.slice(0,-1);
}

function equal()
{
  l2=i;
  //console.log(l1,l2);
  n=l2-1;
  for(k=0;k<l2;k++)
    {

      b+=(Math.pow(10,n)*num[k][1]);
      n--;
    }
  console.log(b);
  if(operation==1)
  {
    ans = a+b;
    result.innerText = ans;
  }
  if(operation==2)
  {
    ans = a-b;
    result.innerText = ans;
  }
  if(operation==3)
  {
    ans = a*b;
    result.innerText = ans;
  }
  if(operation==4)
  {
    ans = a/b;
    result.innerText = ans;
  }
  operation=0;
  i=0;
  index=1;
  a=ans;
  b=0;
  
}

function ac()
{
  result.innerText = "";
  operation=0;
  i=0;
  index=0;
  a=0;
  b=0;
}