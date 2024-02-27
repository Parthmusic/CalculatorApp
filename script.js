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
let decimalPoint;
let finalAns;
//num[] = {};
let index = 0;
//num[index]={};
let j=0;
let operation=0;
let position;
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
buttonPoint.onclick = point;

function addZero()
{
  if(i==0 && index==0)
    result.innerText = 0;
  else
    result.innerText += 0;
  num[i]=[];
  num[i][index]=0;
  console.log(num[i][index]);
  i++;
 // console.log(i);
  
}
function addOne()
{
  if(i==0 && index==0)
    result.innerText = 1;
  else
    result.innerText += 1;
  num[i]=[];
  num[i][index]=1;
  console.log(num[i][index]);
  i++;
}
function addTwo()
{
  if(i==0 && index==0)
    result.innerText = 2;
  else
    result.innerText += 2;
  num[i]=[];
  num[i][index]=2;
  console.log(num[i][index]);
  i++;
}
function addThree()
{
  if(i==0 && index==0)
    result.innerText = 3;
  else
    result.innerText += 3;
  num[i]=[];
  num[i][index]=3;
  console.log(num[i][index]);
  i++;
}
function addFour()
{
  if(i==0 && index==0)
    result.innerText = 4;
  else
    result.innerText += 4;
  num[i]=[];
  num[i][index]=4;
  console.log(num[i][index]);
  i++;
}
function addFive()
{
  if(i==0 && index==0)
    result.innerText = 5;
  else
    result.innerText += 5;
  num[i]=[];
  num[i][index]=5;
  console.log(num[i][index]);
  i++;
}
function addSix()
{
  if(i==0 && index==0)
    result.innerText = 6;
  else
    result.innerText += 6;
  num[i]=[];
  num[i][index]=6;
  console.log(num[i][index]);
  i++;
}
function addSeven()
{
  if(i==0 && index==0)
    result.innerText = 7;
  else
    result.innerText += 7;
  num[i]=[];
  num[i][index]=7;
  console.log(num[i][index]);
  i++;
}
function addEight()
{
  if(i==0 && index==0)
    result.innerText = 8;
  else
    result.innerText += 8;
  num[i]=[];
  num[i][index]=8;
  console.log(num[i][index]);
  i++;
}
function addNine()
{
  if(i==0 && index==0)
    result.innerText = 9;
  else
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
  if(decimalPoint==1)
  {
    n=position-1;
  }
  else{
    n=l1-1;
  }
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
  if(decimalPoint==1)
  {
    n=position-1;
  }
  else{
    n=l1-1;
  }
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
  result.innerText += "\u00D7";
  operation = 3;
  l1=i;
  if(decimalPoint==1)
  {
    n=position-1;
  }
  else{
    n=l1-1;
  }
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
  result.innerText += "\u00F7";
  operation = 4;
  l1=i;
  if(decimalPoint==1)
  {
    n=position-1;
  }
  else{
    n=l1-1;
  }
  
  
  for(k=0;k<l1;k++)
    {

      a+=(Math.pow(10,n)*num[k][0]);
      n--;
    }
  console.log(a);
  index=1;
  i=0;
  position=0;
  decimalPoint=0;
  
}

function del()
{
  result.innerText =result.innerText.slice(0,-1);
  if(i>0)
    i--;
  
  
}

function equal()
{
  l2=i;
  //console.log(l1,l2);
  if(decimalPoint==1)
  {
    n=position-1;
  }
  else{
    n=l2-1;
  }
  for(k=0;k<l2;k++)
    {

      b+=(Math.pow(10,n)*num[k][1]);
      n--;
    }
  console.log(b);
  if(operation==1)
  {
    ans = a+b;
    
  }
  if(operation==2)
  {
    ans = a-b;
    
  }
  if(operation==3)
  {
    ans = a*b;
    
  }
  if(operation==4)
  {
    ans = a/b;
   
  }
  finalAns = ans.toFixed(5);
  finalAns = parseFloat(finalAns);
  result.innerText = finalAns;
  operation=0;
  i=0;
  index=1;
  a=ans;
  b=0;
  position=0;
  decimalPoint=0;
  
}

function ac()
{
  result.innerText = "0";
  operation=0;
  i=0;
  index=0;
  a=0;
  b=0;
  position=0;
  decimalPoint=0;
}

function point()
{
  result.innerText+=".";
  position = i;
  decimalPoint = 1;
  console.log(position,decimalPoint);
}



//two features : dynamic colouring and copy to clipboard