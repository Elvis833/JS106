//Q1
//1. ForEach 
const numbArray = [1,2,3,4,5,6,7,8,9,10];
function plusAndLog(num){
  console.log (num+3)
};
numbArray.forEach(plusAndLog);

//Line4,5,6&7 can be written same as
numbArray.forEach((num)=>{console.log(num+3)});

//2. For Of 

for (let sum of numbArray) {
  console.log(sum +4)
};

//3. For Loop

for (let i = 0; i < numbArray.length; i++) {
  console.log(numbArray[i]+5);
}

//4. while 
let i = 0;
while (i < numbArray.length) {
  console.log(numbArray[i]+6);
  i++;
}

//5. do-while 

let j = 0;
do {
  console.log(numbArray[j]+7);
  j++;
} while (j < numbArray.length);

//Q2
//1
const numba = [1, 2, 3, 4];
const dub= numba.map(num => num * 2);

console.log(dub);
//2 
const numb = [1, 2, 3, 4];
const filteredNumbers = numb.filter(num => num > 2);
console.log(filteredNumbers);

//3

//sorry dont know how to do filter yet

//Q3
// 1. while (true) & break

let k = 0;
while (true) {
  k++;
  if (k == 10) {
    break;}
  }
  console.log(k);

//2. do-while

  let d= 0;
  do {d++;
  }while (d < 10);
  console.log(d);

//Q4
//1

let numbers = [1, 2, 3];
function total (num){
console.log(num)
}
numbers.forEach (total);

//2

let me = [1, 2, 3];
let totals = 0;

me.forEach(num => {
  totals += num;
});
console.log(totals);