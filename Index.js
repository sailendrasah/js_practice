// // //1  Given the array:

// // // Task: Use forEach to console.log each number multiplied by 2

// // // Expected output: 2, 4, 6, 8, 10 (on separate lines) ;

// // const numbers = [1, 2, 3, 4, 5];
// //  const newArr = numbers.forEach((item)=>{
// //      console.log(item*2)
// //  })

// // // -----------------------------------------------------Q.N.2------------------------------

// // // 2. Given the array:
// // // Task: Create a new array with 10% discount applied to each price

// // // Expected result: [90, 180, 270, 360]

// // const prices = [100, 200, 300, 400];

// // const arr = prices.map((item)=>{
// //     return  item-(item*10)/100;
// // })
// // console.log(arr)
// // // -----------------------------------------------------Q.N.3------------------------------
// // // 3  Given the array:
// // // Task: Create a new array with only ages 18 and above

// // // Expected result: [18, 25, 30, 40]
// // const ages = [12, 18, 25, 16, 30, 17, 40];
// //  const newAge = ages.filter((item)=>{
// //     return item>=18;
// //  })
// //  console.log(newAge)

// // // -----------------------------------------------------Q.N.4------------------------------
// // // 4  Given the array:

// // // Task: Calculate the total price of all items

// // // Expected result: 450

// // const cartItems = [50, 120, 80, 200];
// //  const totalPrice = cartItems.reduce((total,item)=>{
// //     return total+item;
// //  },0);
// //  console.log(totalPrice)

// // // -----------------------------------------------------Q.N.5------------------------------

// // // 5 Given the array:

// // const products = [

// //     { id: 1, name: 'Laptop', inStock: true },

// //     { id: 2, name: 'Mouse', inStock: false },

// //     { id: 3, name: 'Keyboard', inStock: true }

// // ];
// // // Task 1: Find the first product that is in stock
// // const prod = products.find((item)=>
// //      item.inStock==true
// // )
// // console.log(prod)
// // // Task 2: Find the index of the product named 'Mouse'
// // const prodIndex = products.findIndex((item)=>item.name=="Mouse")
// // console.log(prodIndex)
// // // -----------------------------------------Q.N.6-------------------------
// // //  6. Given the array:
// // const scores = [85, 90, 78, 92, 88];
// // // Task 1: Check if some scores are above 90
// // const isScore = scores.some((item)=>item>90);
// // console.log(isScore)
// // // Task 2: Check if all scores are above 75
// // const isScor = scores.every((item)=>item>75);
// // console.log(isScor)
// // // -----------------------------------------Q.N.7-------------------------

// // // 7 Given the array:

// // const fruits = ['banana', 'apple', 'cherry', 'date'];

// // // Task 1: Sort alphabetically (ascending)
// // const sorted = fruits.sort((a,b)=>a.localeCompare(b));
// // console.log(sorted)
// // // Task 2: Sort by string length (shortest to longest)
// // const sortedByLength = fruits.reduce((max='',item)=>{
// //     return item.length>max.length? item:max
// // })
// // console.log(sortedByLength)
// // // -----------------------------------------Q.N.8-------------------------

// // const arr1 = [1, 2, 3];

// // const arr2 = [4, 5, 6];

// //  // Task 1: Combine arr1 and arr2 into a new array
// //  const combime = arr1.concat(arr2)
// //  console.log(combime)

// // // Task 2: Extract elements from index 1 to 3 from the combined array
// // const extract = combime.slice(1,3);
// // console.log(extract)
// // // Task 3: Insert the number 99 at index 2 (modifying original array)
// // const insert = combime.splice(2,0,99);
// // console.log(combime)
// // // --------------------------------------------------------------------Q.N.9------------------------------
// // //  Given the object:

// // const person = {

// //   name: 'Alice',

// //   age: 30,

// //   occupation: 'Developer',

// //   city: 'New York'

// // };

// // // Task 1: Get all property names (keys)
// // const key = Object.keys(person)
// // console.log(key)
// // // Task 2: Get all property values
// // const value = Object.values(person)
// // console.log(value)
// // // Task 3: Get all key-value pairs as arrays
// // const array = Object.entries(person)
// // console.log(array)
// // // --------------------------------------------------------------------Q.N.10------------------------------
// // //  Given:
// // const target = { a: 1, b: 2 };
// // const source = { b: 4, c: 5 };

// // // // Task: Merge source into target
// // // // Then create a completely new object by merging both
// // const merge = Object.assign({},target,source)
// // console.log(merge)
// // // --------------------------------------------------------------------Q.N.11------------------------------
// //  //Q.NO: 3. Create an object:

// // const config = {

// //   theme: 'dark',

// //   language: 'en',

// //   version: '1.0'

// // };

// //  // Task 1: Seal the object and try to modify and add properties
// // //   const sealObj =Object.seal(config)
// // //    sealObj.language="nepali"
// // //    delete sealObj.language
// // //    console.log(sealObj)
// //    // Task 2: Freeze the object and try to modify properties
// //    const Freezeobj = Object.freeze(config);
// //    Freezeobj.language ="nepali"
// //  delete  Freezeobj.language
// //  console.log(Freezeobj)
// // // --------------------------------------------------------------------Q.N.12------------------------------

// //  // 4 Given:

// // const car = {

// //   brand: 'Toyota',

// //   model: 'Camry',

// //   year: 2020

// // };

// //  // Task: Check if 'model' property exists******
// //  const isExisit = car.hasOwnProperty("model");
// //  console.log(isExisit)
// // //  Check if 'color' property exists (should return false)

// // const isExisitColor = car.hasOwnProperty("color")
// // console.log(isExisitColor)
// // // --------------------------------------------------------------------Q.N.13--------------------------
// //  Need a function to get name initial

// // let str ='tommy smith lucky ';
// // function initialName(str){
// // const initalWord = str.split(" ").map((word)=>word[0]).join(" ");
// // console.log(initalWord.toLocaleUpperCase())
// // }
// // initialName(str);
// //  Input:  [1, 2, 2, 3, 4, 4]
// // Output: [1, 2, 3, 4]
// // let arr = [1,2,2,3,4,4];
// // const unique = arr.filter((item,index,Array)=>{
// //   return Array.indexOf(item)==index;
// // })
// // console.log(unique)
// // let arr2 =
// // [
// //   { name: "Ram", dept: "IT" },
// //   { name: "Shyam", dept: "HR" },
// //   { name: "Amit", dept: "IT" }
// // ]

// // Output:
// // {
// //   IT: [{...}, {...}],
// //   HR: [{...}]
// // }

// // const grp = arr2.reduce((item,product)=>{
// //   const key = product.dept;
// //   if(!item[key]){
// //     item[key] =[];

// //   }
// //     item[key].push(product)
// //   return item;
// // },{})
// // console.log(grp)

// // function maximum(arr,i=0,max=-Infinity){
// // if(i==arr.length) return max;
// // if(arr[i]>max) {
// //   max =arr[i];
// //  return  maximum(arr,i+1,max);
// // }
// // }
// // console.log(maximum([1,2,3,4,5,6]))

// // let arr5 = [20,30,40,50];
// // let larg= arr5[0];
// // let second = -Infinity;
// // for(let i=0;i<arr5.length;i++){
// //   if(larg<arr5[i]){
// //   second = larg;
// //   larg = arr5[i]
// //   }
// //   for(let i=0;i<arr5.length;i++){
// //     if(second<arr5[i]&&larg!=arr5[i])
// //       second= arr5[i]
// //   }
// // }
// // console.log(second)

// // constructor and class

// // class transactionProcessor{
// //   constructor(owner,initialBalance){
// //     this.owner = owner,
// //     this.balance = initialBalance
// //   }
// //   deposit(amount){
// //     this.balance+=amount;
// //     console.log(`deposit : ${amount} final balance: ${this.balance}`);
// //   }
// //   withDraw(amount){
// //   if(amount>this.balance){
// //     console.log(`insufficent balance:${this.balance} `);
// //     return;
// //   }
// //   this.balance-=amount;
// //   console.log(` withDraw amount ${amount}`);

// //  }
// //   process(transaction){
// //     if(transaction.type=="deposit"){
// //       this.deposit(transaction.amount);

// //     }
// //      if(transaction.type=="withDraw"){
// //       this.withDraw(transaction.amount);

// //     }
// //   }
// //   getbalance(){
// //     return this.balance;
// //   }
// // }

// // const tp = new transactionProcessor("ram",1000);
// // tp.process({type:"deposit", amount:5000})
// // tp.process({type:"withDraw", amount:5000})
// // console.log(`final balance: `,tp.getbalance())

// // class rewardPOint extends transactionProcessor{
// //   constructor(owner,initialBalance){
// //     super(owner,initialBalance)
// //     this.point = 0;
// //   }
// //   deposit(amount){
// //     super.deposit(amount)
// //     const reward = Math.floor(amount/100);
// //    this.point+=reward
// //     console.log(`total point ${reward}`);
// //  }

// //  getPoint(){
// //   return this.point;
// //  }
// // }
// // const rewardTp = new rewardPOint("tommy",5000);
// // rewardTp.deposit(15000)
// // console.log("final point",rewardTp.getPoint())

// // // closure
// // function wallet(){
// //   let balance =0;
// //   return{
// //     deposit(amount){
// //      balance+=amount
// //     },
// //      withDraw(amount){
// // if(amount>balance){
// //   console.log(`insufficent balance`)
// //   return;
// // }
// //      balance-=amount
// //     },
// //     checkBalance(){
// // console.log(`final balance ${balance}`)
// //     }
// //   }
// // }
// // const w = wallet()
// // w.deposit(5000);
// // w.withDraw(1000);
// // w.checkBalance();

// // non repeating char

// // function freq(str) {
// //   let obj = {};
// //   for (let i = 0; i < str.length; i++) {
// //     let ch = str[i];
// //     obj[ch] = (obj[ch] || 0) + 1;
// //   }
// //   for (let i = 0; i < str.length; i++) {
// //     let ch = str[i];
// //     if (obj[ch] == 1) return ch;
// //   }
// // }
// // console.log(freq("aabccd"));
// // let num = [2, 18, 15, 7];
// // let target = 9;
// // for (let i = 0; i < num.length; i++) {
// //   for (let j = i + 1; j < num.length; j++) {
// //     if (num[i] + num[j] === target) {
// //       console.log(i, j);
// //       return;
// //     }
// //   }
// // // }
// // function isPalidrome(str, s = 0, e = str.length - 1) {
// //   if (s >= e) return true;
// //   if (str[s] != str[e]) return false;

// //   return isPalidrome(str, s + 1, e - 1);
// // }
// // console.log(isPalidrome("noonl"));
// //   function fact(n){
// //     if(n==0)
// //       return 1;
// //     return n*fact(n-1);
// //   }
// //   console.log(fact(5))

// //   function fib(n,a=0,b=1){
// //     if(n<=0)
// //       return ;
// //     console.log(a)
// //     return fib(n-1,b,a+b);
// //   }
// // fib(7)
// // const obj = ['ram','shyam'];
// // const obj1 = obj.toString();
// // console.log(obj1)
// // const obj2 = obj1.split(", ") 
// // console.log(obj2)

// // const myPromises = new Promise((res,rej)=>{
// //   res(2)
// // })
// // .then((x)=>{
// //   console.log("step 1",x)
// //   return x+2;
// // })
// // .then((x)=>{
// //   console.log("step 2",x)
// //   return x+2;
// // })b
// // .then((x)=>{
// //   console.log("step 3",x)
// //   return x+2;
// // }).then((x)=>{
// //   console.log("step 4",x)
// //   return x+2;
// // })
// // let num = -78.85;
// // if(num<0)
// //   num=-num;
// // console.log(num)
// // function freq(str,i=0,obj={}){
// //   if(i==str.length) return obj;
// //   let ch = str[i];
// //   obj[ch] = (obj[ch] ||0) +1
// //   return freq(str,i+1,obj)
// // }
// // console.log(freq('javascript'))


// // const useId = [
// //   {id:1,name:"aahish",active:true},
// //   {id:2,name:"rahul",active:false},
// //   {id:3,name:"neha",active:true}
// // ]

// // const activeUser = useId.filter((item)=>item.active).map((item)=>item.name.toLocaleUpperCase())
// // console.log(activeUser)


// // let number = [4,2,8,2,1,4,9]
// // number.sort();
// // let unique = number.filter((item,index,arr)=>{
// //   return arr.indexOf(item)==index;
// // })
// // console.log(unique)

// // function createCounter(){
// //   let count = 0;
// //   return function(){
// //  count++;
// //  return count;
// //   }
// // }
// // const counter = createCounter()
// // counter();
// // counter();

// // function flat(arr){
// //   let result = [];
// //   function helper(currEle,index){
// //     if(index ==currEle.length)
// //       return;
// //     let item  = currEle[index]
// //     if(Array.isArray(item)){
// //       helper(item,0)
// //     }
// //     else{
// //       result.push(item)
// //     }
// //     helper(currEle,index+1)
// //   }
// //   helper(arr,0);
// //   return result;
// // }
// // console.log(flat([1,[2,[3,4,[5]]]]))

// // function createCounter(){
// //   let count = 0;
// //   return function(){
// //     count ++;
// //     console.log(count)
// //   }
// // }
// // let count = createCounter();
// // count()
// // count()
// // count()


// // class transaction{
// //   constructor(owner,initialBalance){
// //     this.owner=owner,
// //     this.balance = initialBalance;
// //   }
// //   deposit(amount){
// //     this.balance+=amount;
// //     console.log(`amount ${ amount}`)
// //   }
// //   process(transaction){
// //     if(transaction.type =="deposit"){
// //       this.deposit(transaction.amount)
// //     }
// //   }
// //   showBalance(){
// //     console.log(`totalBalance ${this.balance}`)
// //   }
// // }
// // const tp = new transaction("smith",500);
// // tp.process({type:"deposit","amount":1000})
// // tp.showBalance()


// // class rewardpoint extends transaction{
// //   constructor(owner,initialBalance){
// //     super(owner,initialBalance)
// //     this.point = 0;
// //   }
// //   deposit(amount){
// //     super.deposit(amount)
  
// //     const reward = Math.floor(amount/100)
// //     this.point+=reward
// //   }
// //     getPoint(){
// //   console.log(`Reward Points: ${this.point}`);
// //     return this.point;
// //     }
  
// // } 
// // const rp = new rewardpoint("tommy",500);
// // rp.deposit(500)
// // rp.getPoint()


// // function Print(n){
// //   if(n>100) return
// //   console.log(n)
// //   Print(n+1);
// // }
// // Print(1)
 
 
// // const takeInput = require('readline').createInterface({input:process.stdin,output:process.stdout});

// // function printMultiple(num,multiple=1){
// //   if(multiple>10) return;
// //   if(multiple%2)
// //     console.log(num + "X" + multiple + "=" + num*multiple)
// //   printMultiple(num,multiple+1);
// // }
// // takeInput.question("enter a number which you want to multple: ",(value)=>{
// //   printMultiple(value);
// //   takeInput.close();
// // })

// function reverse(str,i=str.length-1){
//   if(i<0)
//     return  '';
//  return str[i] + reverse(str,i-1);
// }
// console.log(reverse('hello'))



// function isPalidrome(str,s=0,e=str.length-1){
//   if(s>e) return 
//   if(str[s]!=str[e]){
//     return false
//   }
//   else{
//     return true;
//   }
//   return str + isPalidrome(str,s+1,e-1)

// }
// console.log(isPalidrome('madam'))


// // let arr = [50,70,80,90,200,500]
// // let larg = arr[0];
// // for(let i=0;i<arr.length;i++){
// //   if(larg<arr[i]){
// //     larg= arr[i]
// //   }
// // }
// // console.log(larg)


// // let arr = [1,2,2,3,4,4,4]
// // let unique = arr.filter((elem,index,Arr)=>{
// // return Arr.indexOf(elem) == index;
// // })
// // console.log(unique)

// // function fibo(n,a=0,b=1){
// //   if(n<=0)
// //     return ;
// //   console.log(a)
// //   return fibo(n-1,b,a+b)
// // }
// // fibo(5)

// // function sum(n){
// //   if(n<=0) return 0;
// //   return n + sum(n-1);
// // }
// // console.log(sum(5))

// // Find the second largest element in an array

// let arr = [10,20,40,50,80];
// let largest = arr[0];
// let smallest = arr[0];
// for(let i=0;i<arr.length;i++){
//   if(arr[i]>largest){
//     secondLarg =largest;
//     largest =arr[i];
//   }
// }
// for(let i=0;i<arr.length;i++){
//   if(arr[i]>secondLarg&&arr[i]!=largest){
//     secondLarg = arr[i]
//   }
// }
// console.log(secondLarg)
// console.log(largest)
// // Find the smallest and largest element in an array
// for(let i=0;i<arr.length;i++){
//   if(arr[i]>largest){
//     largest =arr[i];
//   }
// }
// for(let i=0;i<arr.length;i++){
//   if(arr[i]<smallest){
   
//     smallest =arr[i];
//   }
// }
// console.log(largest)
// console.log(smallest)
// // Reverse an array without using built-in methods
// function reverse(str){
//   let result = "";
// for(let i=str.length-1;i>=0;i--){
// result = result+str[i];
// }
// return result
// }
// console.log(reverse('hello'))

// // Remove duplicates from an array
// let arr2 = [1,2,3,2,3,4,4,4,5,5,5,5];
// const duplicate = arr2.filter((item,index ,Array)=>{
//   return Array.indexOf(item)==index;
// })
// console.log(duplicate)


// // Find missing number in an array (1 to n)
// function missing(str,n){
//   let actualsum = n*(n+1)/2;
//   let sum =0;
//   for (let i=0;i<str.length;i++){
//     sum = sum + str[i];
//   } 
//   let realsum = actualsum-sum;
// return realsum
// }
// console.log(missing([1,2,3,5,6,7],7))


// // Move all zeros to the end 
// let arr4 =[1,0,2,0,3,2,0,5];
// function moves(arr4,s=0,e=arr4.length){
// if(s>e) return;
// if(arr4[s]!=0){
//   swap(arr4[s],arr4[e])
// }

// }  
// let arr5 = [1,2,3,4,5]
// const oddEven = arr5.map((item)=>{
// //   if(item%2==0){
// //     return "even";
// //   }
// //   else{
// //     return "odd"
// //   }
// // }) 
// // console.log(oddEven)
//  let arr =[1,2,3,4,5]
//  let result =arr.splice(1,3,'a','b','c')
//  console.log(result)
//  console.log(arr)


console.log(Math.floor(98*10e7 + Math.random()*100000000))


let ary = ['apple','banana','apple','orange','banana','apple']
function freq(ary,i=0,obj={}){
  if(i==ary.length) return obj;
  let item = ary[i];
  obj[item] = (obj[item] ||0) +1
  return freq(ary,i+1,obj);
}
console.log(freq(ary))


const user1 ={
  name:"Ashish",
  address:{
    city:"Delhi"
  }
};
const user2 =JSON.parse(JSON.stringify(user1));
user2.address.city="mumbai";
console.log(user1)
console.log(user2)

const data = {
  user:{
    profile:{
      name:"Ashisah",
      skills:["JS","React"]
    }
  }
}
  data.user.profile.skills.push('Node')
console.log(JSON.stringify(data));

const arr = [1,2,3,4,5];
function sum(arr,i=0){
  if(i==arr.length) return 0;
  return arr[i] + sum(arr,i+1)

}
console.log(sum(arr))

// ------------------------------------------arr method------------------------
let Array = [1,2,3,4,5]
const sumArray = Array.reduce((item,total)=>{
  return item+total
},0)
console.log(sumArray)

console.log(Math.floor(100000 + Math.random()*100000))