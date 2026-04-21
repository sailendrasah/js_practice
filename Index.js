// // // // //1  Given the array:


// // // // // Task: Use forEach to console.log each number multiplied by 2

// // // // // Expected output: 2, 4, 6, 8, 10 (on separate lines) ;

// // // // const numbers = [1, 2, 3, 4, 5];
// // // //  const newArr = numbers.forEach((item)=>{
// // // //      console.log(item*2)
// // // //  })

// // // // // -----------------------------------------------------Q.N.2------------------------------

// // // // // 2. Given the array:
// // // // // Task: Create a new array with 10% discount applied to each price

// // // // // Expected result: [90, 180, 270, 360]

// // // // const prices = [100, 200, 300, 400];

// // // // const arr = prices.map((item)=>{
// // // //     return  item-(item*10)/100;
// // // // })
// // // // console.log(arr)
// // // // // -----------------------------------------------------Q.N.3------------------------------
// // // // // 3  Given the array:
// // // // // Task: Create a new array with only ages 18 and above

// // // // // Expected result: [18, 25, 30, 40]
// // // // const ages = [12, 18, 25, 16, 30, 17, 40];
// // // //  const newAge = ages.filter((item)=>{
// // // //     return item>=18;
// // // //  })
// // // //  console.log(newAge)

// // // // // -----------------------------------------------------Q.N.4------------------------------
// // // // // 4  Given the array:

// // // // // Task: Calculate the total price of all items

// // // // // Expected result: 450

// // // // const cartItems = [50, 120, 80, 200];
// // // //  const totalPrice = cartItems.reduce((total,item)=>{
// // // //     return total+item;
// // // //  },0);
// // // //  console.log(totalPrice)

// // // // // -----------------------------------------------------Q.N.5------------------------------

// // // // // 5 Given the array:

// // // // const products = [

// // // //     { id: 1, name: 'Laptop', inStock: true },

// // // //     { id: 2, name: 'Mouse', inStock: false },

// // // //     { id: 3, name: 'Keyboard', inStock: true }

// // // // ];
// // // // // Task 1: Find the first product that is in stock
// // // // const prod = products.find((item)=>
// // // //      item.inStock==true
// // // // )
// // // // console.log(prod)
// // // // // Task 2: Find the index of the product named 'Mouse'
// // // // const prodIndex = products.findIndex((item)=>item.name=="Mouse")
// // // // console.log(prodIndex)
// // // // // -----------------------------------------Q.N.6-------------------------
// // // // //  6. Given the array:
// // // // const scores = [85, 90, 78, 92, 88];
// // // // // Task 1: Check if some scores are above 90
// // // // const isScore = scores.some((item)=>item>90);
// // // // console.log(isScore)
// // // // // Task 2: Check if all scores are above 75
// // // // const isScor = scores.every((item)=>item>75);
// // // // console.log(isScor)
// // // // // -----------------------------------------Q.N.7-------------------------

// // // // // 7 Given the array:

// // // // const fruits = ['banana', 'apple', 'cherry', 'date'];

// // // // // Task 1: Sort alphabetically (ascending)
// // // // const sorted = fruits.sort((a,b)=>a.localeCompare(b));
// // // // console.log(sorted)
// // // // // Task 2: Sort by string length (shortest to longest)
// // // // const sortedByLength = fruits.reduce((max='',item)=>{
// // // //     return item.length>max.length? item:max
// // // // })
// // // // console.log(sortedByLength)
// // // // // -----------------------------------------Q.N.8-------------------------

// // // // const arr1 = [1, 2, 3];

// // // // const arr2 = [4, 5, 6];

// // // //  // Task 1: Combine arr1 and arr2 into a new array
// // // //  const combime = arr1.concat(arr2)
// // // //  console.log(combime)

// // // // // Task 2: Extract elements from index 1 to 3 from the combined array
// // // // const extract = combime.slice(1,3);
// // // // console.log(extract)
// // // // // Task 3: Insert the number 99 at index 2 (modifying original array)
// // // // const insert = combime.splice(2,0,99);
// // // // console.log(combime)
// // // // // --------------------------------------------------------------------Q.N.9------------------------------
// // // // //  Given the object:

// // // // const person = {

// // // //   name: 'Alice',

// // // //   age: 30,

// // // //   occupation: 'Developer',

// // // //   city: 'New York'

// // // // };

// // // // // Task 1: Get all property names (keys)
// // // // const key = Object.keys(person)
// // // // console.log(key)
// // // // // Task 2: Get all property values
// // // // const value = Object.values(person)
// // // // console.log(value)
// // // // // Task 3: Get all key-value pairs as arrays
// // // // const array = Object.entries(person)
// // // // console.log(array)
// // // // // --------------------------------------------------------------------Q.N.10------------------------------
// // // // //  Given:
// // // // const target = { a: 1, b: 2 };
// // // // const source = { b: 4, c: 5 };

// // // // // // Task: Merge source into target
// // // // // // Then create a completely new object by merging both
// // // // const merge = Object.assign({},target,source)
// // // // console.log(merge)
// // // // // --------------------------------------------------------------------Q.N.11------------------------------
// // // //  //Q.NO: 3. Create an object:

// // // // const config = {

// // // //   theme: 'dark',

// // // //   language: 'en',

// // // //   version: '1.0'

// // // // };

// // // //  // Task 1: Seal the object and try to modify and add properties
// // // // //   const sealObj =Object.seal(config)
// // // // //    sealObj.language="nepali"
// // // // //    delete sealObj.language
// // // // //    console.log(sealObj)
// // // //    // Task 2: Freeze the object and try to modify properties
// // // //    const Freezeobj = Object.freeze(config);
// // // //    Freezeobj.language ="nepali"
// // // //  delete  Freezeobj.language
// // // //  console.log(Freezeobj)
// // // // // --------------------------------------------------------------------Q.N.12------------------------------

// // // //  // 4 Given:

// // // // const car = {

// // // //   brand: 'Toyota',

// // // //   model: 'Camry',

// // // //   year: 2020

// // // // };

// // // //  // Task: Check if 'model' property exists******
// // // //  const isExisit = car.hasOwnProperty("model");
// // // //  console.log(isExisit)
// // // // //  Check if 'color' property exists (should return false)

// // // // const isExisitColor = car.hasOwnProperty("color")
// // // // console.log(isExisitColor)
// // // // // --------------------------------------------------------------------Q.N.13--------------------------
// // // //  Need a function to get name initial

// // // // let str ='tommy smith lucky ';
// // // // function initialName(str){
// // // // const initalWord = str.split(" ").map((word)=>word[0]).join(" ");
// // // // console.log(initalWord.toLocaleUpperCase())
// // // // }
// // // // initialName(str);
// // // //  Input:  [1, 2, 2, 3, 4, 4]
// // // // Output: [1, 2, 3, 4]
// // // // let arr = [1,2,2,3,4,4];
// // // // const unique = arr.filter((item,index,Array)=>{
// // // //   return Array.indexOf(item)==index;
// // // // })
// // // // console.log(unique)
// // // // let arr2 =
// // // // [
// // // //   { name: "Ram", dept: "IT" },
// // // //   { name: "Shyam", dept: "HR" },
// // // //   { name: "Amit", dept: "IT" }
// // // // ]

// // // // Output:
// // // // {
// // // //   IT: [{...}, {...}],
// // // //   HR: [{...}]
// // // // }

// // // // const grp = arr2.reduce((item,product)=>{
// // // //   const key = product.dept;
// // // //   if(!item[key]){
// // // //     item[key] =[];

// // // //   }
// // // //     item[key].push(product)
// // // //   return item;
// // // // },{})
// // // // console.log(grp)

// // // // function maximum(arr,i=0,max=-Infinity){
// // // // if(i==arr.length) return max;
// // // // if(arr[i]>max) {
// // // //   max =arr[i];
// // // //  return  maximum(arr,i+1,max);
// // // // }
// // // // }
// // // // console.log(maximum([1,2,3,4,5,6]))

// // // // let arr5 = [20,30,40,50];
// // // // let larg= arr5[0];
// // // // let second = -Infinity;
// // // // for(let i=0;i<arr5.length;i++){
// // // //   if(larg<arr5[i]){
// // // //   second = larg;
// // // //   larg = arr5[i]
// // // //   }
// // // //   for(let i=0;i<arr5.length;i++){
// // // //     if(second<arr5[i]&&larg!=arr5[i])
// // // //       second= arr5[i]
// // // //   }
// // // // }
// // // // console.log(second)

// // // // constructor and class

// // // // class transactionProcessor{
// // // //   constructor(owner,initialBalance){
// // // //     this.owner = owner,
// // // //     this.balance = initialBalance
// // // //   }
// // // //   deposit(amount){
// // // //     this.balance+=amount;
// // // //     console.log(`deposit : ${amount} final balance: ${this.balance}`);
// // // //   }
// // // //   withDraw(amount){
// // // //   if(amount>this.balance){
// // // //     console.log(`insufficent balance:${this.balance} `);
// // // //     return;
// // // //   }
// // // //   this.balance-=amount;
// // // //   console.log(` withDraw amount ${amount}`);

// // // //  }
// // // //   process(transaction){
// // // //     if(transaction.type=="deposit"){
// // // //       this.deposit(transaction.amount);

// // // //     }
// // // //      if(transaction.type=="withDraw"){
// // // //       this.withDraw(transaction.amount);

// // // //     }
// // // //   }
// // // //   getbalance(){
// // // //     return this.balance;
// // // //   }
// // // // }

// // // // const tp = new transactionProcessor("ram",1000);
// // // // tp.process({type:"deposit", amount:5000})
// // // // tp.process({type:"withDraw", amount:5000})
// // // // console.log(`final balance: `,tp.getbalance())

// // // // class rewardPOint extends transactionProcessor{
// // // //   constructor(owner,initialBalance){
// // // //     super(owner,initialBalance)
// // // //     this.point = 0;
// // // //   }
// // // //   deposit(amount){
// // // //     super.deposit(amount)
// // // //     const reward = Math.floor(amount/100);
// // // //    this.point+=reward
// // // //     console.log(`total point ${reward}`);
// // // //  }

// // // //  getPoint(){
// // // //   return this.point;
// // // //  }
// // // // }
// // // // const rewardTp = new rewardPOint("tommy",5000);
// // // // rewardTp.deposit(15000)
// // // // console.log("final point",rewardTp.getPoint())

// // // // // closure
// // // // function wallet(){
// // // //   let balance =0;
// // // //   return{
// // // //     deposit(amount){
// // // //      balance+=amount
// // // //     },
// // // //      withDraw(amount){
// // // // if(amount>balance){
// // // //   console.log(`insufficent balance`)
// // // //   return;
// // // // }
// // // //      balance-=amount
// // // //     },
// // // //     checkBalance(){
// // // // console.log(`final balance ${balance}`)
// // // //     }
// // // //   }
// // // // }
// // // // const w = wallet()
// // // // w.deposit(5000);
// // // // w.withDraw(1000);
// // // // w.checkBalance();

// // // // non repeating char

// // // // function freq(str) {
// // // //   let obj = {};
// // // //   for (let i = 0; i < str.length; i++) {
// // // //     let ch = str[i];
// // // //     obj[ch] = (obj[ch] || 0) + 1;
// // // //   }
// // // //   for (let i = 0; i < str.length; i++) {
// // // //     let ch = str[i];
// // // //     if (obj[ch] == 1) return ch;
// // // //   }
// // // // }
// // // // console.log(freq("aabccd"));
// // // // let num = [2, 18, 15, 7];
// // // // let target = 9;
// // // // for (let i = 0; i < num.length; i++) {
// // // //   for (let j = i + 1; j < num.length; j++) {
// // // //     if (num[i] + num[j] === target) {
// // // //       console.log(i, j);
// // // //       return;
// // // //     }
// // // //   }
// // // // // }
// // // // function isPalidrome(str, s = 0, e = str.length - 1) {
// // // //   if (s >= e) return true;
// // // //   if (str[s] != str[e]) return false;

// // // //   return isPalidrome(str, s + 1, e - 1);
// // // // }
// // // // console.log(isPalidrome("noonl"));
// // // //   function fact(n){
// // // //     if(n==0)
// // // //       return 1;
// // // //     return n*fact(n-1);
// // // //   }
// // // //   console.log(fact(5))

// // // //   function fib(n,a=0,b=1){
// // // //     if(n<=0)
// // // //       return ;
// // // //     console.log(a)
// // // //     return fib(n-1,b,a+b);
// // // //   }
// // // // fib(7)
// // // // const obj = ['ram','shyam'];
// // // // const obj1 = obj.toString();
// // // // console.log(obj1)
// // // // const obj2 = obj1.split(", ")
// // // // console.log(obj2)

// // // // const myPromises = new Promise((res,rej)=>{
// // // //   res(2)
// // // // })
// // // // .then((x)=>{
// // // //   console.log("step 1",x)
// // // //   return x+2;
// // // // })
// // // // .then((x)=>{
// // // //   console.log("step 2",x)
// // // //   return x+2;
// // // // })b
// // // // .then((x)=>{
// // // //   console.log("step 3",x)
// // // //   return x+2;
// // // // }).then((x)=>{
// // // //   console.log("step 4",x)
// // // //   return x+2;
// // // // })
// // // // let num = -78.85;
// // // // if(num<0)
// // // //   num=-num;
// // // // console.log(num)
// // // // function freq(str,i=0,obj={}){
// // // //   if(i==str.length) return obj;
// // // //   let ch = str[i];
// // // //   obj[ch] = (obj[ch] ||0) +1
// // // //   return freq(str,i+1,obj)
// // // // }
// // // // console.log(freq('javascript'))

// // // // const useId = [
// // // //   {id:1,name:"aahish",active:true},
// // // //   {id:2,name:"rahul",active:false},
// // // //   {id:3,name:"neha",active:true}
// // // // ]

// // // // const activeUser = useId.filter((item)=>item.active).map((item)=>item.name.toLocaleUpperCase())
// // // // console.log(activeUser)

// // // // let number = [4,2,8,2,1,4,9]
// // // // number.sort();
// // // // let unique = number.filter((item,index,arr)=>{
// // // //   return arr.indexOf(item)==index;
// // // // })
// // // // console.log(unique)

// // // // function createCounter(){
// // // //   let count = 0;
// // // //   return function(){
// // // //  count++;
// // // //  return count;
// // // //   }
// // // // }
// // // // const counter = createCounter()
// // // // counter();
// // // // counter();

// // // // function flat(arr){
// // // //   let result = [];
// // // //   function helper(currEle,index){
// // // //     if(index ==currEle.length)
// // // //       return;
// // // //     let item  = currEle[index]
// // // //     if(Array.isArray(item)){
// // // //       helper(item,0)
// // // //     }
// // // //     else{
// // // //       result.push(item)
// // // //     }
// // // //     helper(currEle,index+1)
// // // //   }
// // // //   helper(arr,0);
// // // //   return result;
// // // // }
// // // // console.log(flat([1,[2,[3,4,[5]]]]))

// // // // function createCounter(){
// // // //   let count = 0;
// // // //   return function(){
// // // //     count ++;
// // // //     console.log(count)
// // // //   }
// // // // }
// // // // let count = createCounter();
// // // // count()
// // // // count()
// // // // count()

// // // // class transaction{
// // // //   constructor(owner,initialBalance){
// // // //     this.owner=owner,
// // // //     this.balance = initialBalance;
// // // //   }
// // // //   deposit(amount){
// // // //     this.balance+=amount;
// // // //     console.log(`amount ${ amount}`)
// // // //   }
// // // //   process(transaction){
// // // //     if(transaction.type =="deposit"){
// // // //       this.deposit(transaction.amount)
// // // //     }
// // // //   }
// // // //   showBalance(){
// // // //     console.log(`totalBalance ${this.balance}`)
// // // //   }
// // // // }
// // // // const tp = new transaction("smith",500);
// // // // tp.process({type:"deposit","amount":1000})
// // // // tp.showBalance()

// // // // class rewardpoint extends transaction{
// // // //   constructor(owner,initialBalance){
// // // //     super(owner,initialBalance)
// // // //     this.point = 0;
// // // //   }
// // // //   deposit(amount){
// // // //     super.deposit(amount)

// // // //     const reward = Math.floor(amount/100)
// // // //     this.point+=reward
// // // //   }
// // // //     getPoint(){
// // // //   console.log(`Reward Points: ${this.point}`);
// // // //     return this.point;
// // // //     }

// // // // }
// // // // const rp = new rewardpoint("tommy",500);
// // // // rp.deposit(500)
// // // // rp.getPoint()

// // // // function Print(n){
// // // //   if(n>100) return
// // // //   console.log(n)
// // // //   Print(n+1);
// // // // }
// // // // Print(1)

// // // // const takeInput = require('readline').createInterface({input:process.stdin,output:process.stdout});

// // // // function printMultiple(num,multiple=1){
// // // //   if(multiple>10) return;
// // // //   if(multiple%2)
// // // //     console.log(num + "X" + multiple + "=" + num*multiple)
// // // //   printMultiple(num,multiple+1);
// // // // }
// // // // takeInput.question("enter a number which you want to multple: ",(value)=>{
// // // //   printMultiple(value);
// // // //   takeInput.close();
// // // // })

// // // function reverse(str,i=str.length-1){
// // //   if(i<0)
// // //     return  '';
// // //  return str[i] + reverse(str,i-1);
// // // }
// // // console.log(reverse('hello'))

// // // function isPalidrome(str,s=0,e=str.length-1){
// // //   if(s>e) return
// // //   if(str[s]!=str[e]){
// // //     return false
// // //   }
// // //   else{
// // //     return true;
// // //   }
// // //   return str + isPalidrome(str,s+1,e-1)

// // // }
// // // console.log(isPalidrome('madam'))

// // // // let arr = [50,70,80,90,200,500]
// // // // let larg = arr[0];
// // // // for(let i=0;i<arr.length;i++){
// // // //   if(larg<arr[i]){
// // // //     larg= arr[i]
// // // //   }
// // // // }
// // // // console.log(larg)

// // // // let arr = [1,2,2,3,4,4,4]
// // // // let unique = arr.filter((elem,index,Arr)=>{
// // // // return Arr.indexOf(elem) == index;
// // // // })
// // // // console.log(unique)

// // // // function fibo(n,a=0,b=1){
// // // //   if(n<=0)
// // // //     return ;
// // // //   console.log(a)
// // // //   return fibo(n-1,b,a+b)
// // // // }
// // // // fibo(5)

// // // // function sum(n){
// // // //   if(n<=0) return 0;
// // // //   return n + sum(n-1);
// // // // }
// // // // console.log(sum(5))

// // // // Find the second largest element in an array

// // // let arr = [10,20,40,50,80];
// // // let largest = arr[0];
// // // let smallest = arr[0];
// // // for(let i=0;i<arr.length;i++){
// // //   if(arr[i]>largest){
// // //     secondLarg =largest;
// // //     largest =arr[i];
// // //   }
// // // }
// // // for(let i=0;i<arr.length;i++){
// // //   if(arr[i]>secondLarg&&arr[i]!=largest){
// // //     secondLarg = arr[i]
// // //   }
// // // }
// // // console.log(secondLarg)
// // // console.log(largest)
// // // // Find the smallest and largest element in an array
// // // for(let i=0;i<arr.length;i++){
// // //   if(arr[i]>largest){
// // //     largest =arr[i];
// // //   }
// // // }
// // // for(let i=0;i<arr.length;i++){
// // //   if(arr[i]<smallest){

// // //     smallest =arr[i];
// // //   }
// // // }
// // // console.log(largest)
// // // console.log(smallest)
// // // // Reverse an array without using built-in methods
// // // function reverse(str){
// // //   let result = "";
// // // for(let i=str.length-1;i>=0;i--){
// // // result = result+str[i];
// // // }
// // // return result
// // // }
// // // console.log(reverse('hello'))

// // // // Remove duplicates from an array
// // // let arr2 = [1,2,3,2,3,4,4,4,5,5,5,5];
// // // const duplicate = arr2.filter((item,index ,Array)=>{
// // //   return Array.indexOf(item)==index;
// // // })
// // // console.log(duplicate)

// // // // Find missing number in an array (1 to n)
// // // function missing(str,n){
// // //   let actualsum = n*(n+1)/2;
// // //   let sum =0;
// // //   for (let i=0;i<str.length;i++){
// // //     sum = sum + str[i];
// // //   }
// // //   let realsum = actualsum-sum;
// // // return realsum
// // // }
// // // console.log(missing([1,2,3,5,6,7],7))

// // // // Move all zeros to the end
// // // let arr4 =[1,0,2,0,3,2,0,5];
// // // function moves(arr4,s=0,e=arr4.length){
// // // if(s>e) return;
// // // if(arr4[s]!=0){
// // //   swap(arr4[s],arr4[e])
// // // }

// // // }
// // // let arr5 = [1,2,3,4,5]
// // // const oddEven = arr5.map((item)=>{
// // // //   if(item%2==0){
// // // //     return "even";
// // // //   }
// // // //   else{
// // // //     return "odd"
// // // //   }
// // // // })
// // // // console.log(oddEven)
// // //  let arr =[1,2,3,4,5]
// // //  let result =arr.splice(1,3,'a','b','c')
// // //  console.log(result)
// // //  console.log(arr)

// // console.log(Math.floor(98 * 10e7 + Math.random() * 100000000));

// // let ary = ["apple", "banana", "apple", "orange", "banana", "apple"];
// // function freq(ary, i = 0, obj = {}) {
// //   if (i == ary.length) return obj;
// //   let item = ary[i];
// //   obj[item] = (obj[item] || 0) + 1;
// //   if (obj[item] === 1) return item;
// //   return freq(ary, i + 1, obj);
// // }
// // console.log(freq(ary));

// // const user1 = {
// //   name: "Ashish",
// //   address: {
// //     city: "Delhi",
// //   },
// // };
// // const user2 = JSON.parse(JSON.stringify(user1));
// // user2.address.city = "mumbai";
// // console.log(user1);
// // console.log(user2);

// // const data = {
// //   user: {
// //     profile: {
// //       name: "Ashisah",
// //       skills: ["JS", "React"],
// //     },
// //   },
// // };
// // data.user.profile.skills.push("Node");
// // console.log(JSON.stringify(data));

// // const arr = [1, 2, 3, 4, 5];
// // function sum(arr, i = 0) {
// //   if (i == arr.length) return 0;
// //   return arr[i] + sum(arr, i + 1);
// // }
// // console.log(sum(arr));

// // // ------------------------------------------arr method------------------------
// // let Array = [1, 2, 3, 4, 5];
// // const sumArray = Array.reduce((item, total) => {
// //   return item + total;
// // }, 0);
// // console.log(sumArray);

// // console.log(Math.floor(100000 + Math.random() * 100000));

// // // const students=[
// // //   {user:"A",mark:[20,25,35]},
// // //   {user: "B",mark:[30,35,45]},
// // //   {user: "C",mark:[20,10,35]},
// // // ]

// // // const avg = students.reduce((item,value)=>{
// // // const total = value.mark.reduce((a,b)=>a+b ,0)
// // // const avg = total/value.mark.length;
// // // if(!item[value.user]){
// // //   item[value.user] = 0;
// // // }

// // //   item[value.user]=+ avg;
// // //   return item;

// // // },{})

// // // const avgMark = Object.entries(avg).filter(([user,value])=>{
// // //   return value>30
// // // })

// // // console.log(avgMark)

// // const students = [
// //   { name: "A", marks: [40, 50, 60] },
// //   { name: "B", marks: [20, 30, 35] },
// //   { name: "C", marks: [70, 80, 90] },
// // ];

// // // 👉 Question:
// // // Using .filter(), sirf wo students nikalo jinka average marks 50 se zyada ho

// // const sumMark = students.reduce((item, value) => {
// //   const totalSum = value.marks.reduce((a, b) => a + b, 0);
// //   const avg = totalSum / value.marks.length;
// //   if (!item[value.name]) {
// //     item[value.name] = 0;
// //   }
// //   item[value.name] += avg;
// //   return item;
// // }, {});
// // const filter = Object.entries(sumMark).filter(([user, value]) => {
// //   return value > 50;
// // });
// // console.log(filter);

// // const employees = [
// //   { name: "A", salary: [1000, 2000, 3000] },
// //   { name: "B", salary: [500, 800, 900] },
// //   { name: "C", salary: [4000, 2000, 1000] },
// // ];

// // // 👉 Task:
// // // हर employee का avg salary निकालो
// // // सिर्फ वो names print करो जिनका avg > 2000

// // const employeeAvg = employees.reduce((item, value) => {
// //   const totalSalary = value.salary.reduce((a, b) => a + b, 0);
// //   const avg = totalSalary / value.salary.length;
// //   if (!item[value.name]) {
// //     item[value.name] = 0;
// //   }
// //   item[value.name] += avg;
// //   return item;
// // }, {});
// // console.log(employeeAvg);
// // const employeeNamew = Object.entries(employeeAvg)
// //   .filter(([user, value]) => value > 2000)
// //   .map(([user]) => user);
// // console.log(employeeNamew);
 
// // // Write a program to create an array with five numbers
// // // const takeInput = require('readline').createInterface({input:process.stdin,output:process.stdout});
// // // let arr =[];
// // // let first  = 0;

// // // function ask(){
// // // if(first<5){
// // //    takeInput.question("enter 1 more  element ",(num)=>{
// // //       arr.push(num);
// // //      first++;
     
// // // ask();
// // //    })
// // // }
// // //    else{
// // //       console.log("your five number is ", arr);

// // //       takeInput.close()

// // //    }
// // // }

// // //  ask();

// // // function print(n){
// // //    if(n<=100){
// // //       console.log(n);
// // //       print(n+1);
// // //       return;
// // //    }

// // // }
// // // print(1)
// // // const readline = require("readline").createInterface({input:process.stdin,output:process.stdout});

// // // function printOddmultiple(n,multiple=1){
// // //          if((n&1)==0){
// // //    console.log("only odd number required between 1 to 10");
// // // return
// // // }
// // //    let result = n* multiple;

// // //    if(result>50)
// // //       return;

// // //    if(result&1){
// // //       console.log(result);

// // //    }

// // //    printOddmultiple(n,multiple+1);
// // // }
// // // readline.question("enter a number from 1 to 10 : ",(value)=>{
// // // printOddmultiple(value);
// // // readline.close();
// // // })


// // // const takeInput = require("readline").createInterface({
// // //   input: process.stdin,
// // //   output: process.stdout,
// // // });

// // // function EvenMultiple(n, multiple = 1) {
// // //   if (n & 1) {
// // //     console.log("only even number is required");
// // //     return;
// // //   }
// // //   let result = n * multiple;
// // //   if (result > 50) return;
// // //   if ((result & 1) == 0) {
// // //     console.log(result);
// // //   }
// // //   EvenMultiple(n, multiple + 1);
// // // }

// // // takeInput.question("enter a number between 1 to 10 ", (value) => {
// // //   if (value > 10 || value == 0) {
// // //     console.log("please enter number between 1 to 10");
// // //     takeInput.close();
// // //   } else {
// // //     EvenMultiple(value);
// // //     takeInput.close();
// // //   }
// // // });


// // // const readline = require('readline').createInterface({input:process.stdin,output:process.stdout});

// // // function printOddmultiple(num,multiple=1){
// // //    if(num%2==0){
// // //       console.log("only odd number is required");
// // //       return;
// // //    }
// // //    let result = num * multiple;
// // //    if(result>50)
// // //       return;
// // //    if(result% 2 !=0){
// // //       console.log(result);
// // //    }
// // //    printOddmultiple(num,multiple+1);
// // // }
// // // readline.question("enter a nuumber between 1 to 10: ",(value)=>{
// // //    if(value==0)
// // //       console.log("please enter number between 1 to 10");
// // //       readline.close()
// // //    printOddmultiple(value);
// // //    readline.close();
// // // })

// // // const takeInput = require('readline').createInterface({input:process.stdin,output:process.stdout})

// // // function EvenMultiple(num,multiple=1){
// // //    if(num%2!=0){
// // //       console.log("only even number is reqired");
// // //       return;
      
// // //    }
// // //    let result= num *multiple;
// // //    if(result>50){
// // //       return;
// // //    }
// // //    if(result%2==0){
// // //       console.log(result);
      
// // //    }
// // //    EvenMultiple(num,multiple+1);
// // // }
// // // takeInput.question("enter a number between 1 to 10: ",(value)=>{
// // //    if(value==0){
// // //       console.log("please enter a number between 1 to 10");
// // //       takeInput.close();
// // //       return;
// // //    }
// // //    EvenMultiple(value);
// // //    takeInput.close()
// // // })


// // // const takeInput = require('readline').createInterface({input:process.stdin,output:process.stdout});
// // // function EvenMultiple(num ,multipler=1){
// // //    if(num%2!=0){
// // //       console.log("even number is only required");
// // //       return;
// // //    }
// // //    let result = num * multipler;
// // //    if(result>50){
// // //       return;
// // //    }
// // //    if( result % 2 ==0){
// // //       console.log(result);
// // //    }
// // //    EvenMultiple(num,multipler+1);
// // // }


// // // function oddMultiple(n ,multiple=1){
// // //    if(n%2==0){
// // //       console.log("odd number is only required");
// // //       return;
// // //    }
// // //    let result = n * multiple;
// // //    if(result>50){
// // //       return;
// // //    }
// // //    if(result%2!=0){
// // //       console.log(result);
      
// // //    }
// // //    oddMultiple(n,multiple+1);
// // // }
// // // takeInput.question("enter a number you want to get multiple: ",(value)=>{
// // //    if(value == 0){
// // //       console.log("please enter number between 1 to 10");
// // //    takeInput.close();
// // //    }
// // //    if(value%2==0){
// // //       EvenMultiple(value);
// // //       takeInput.close();
// // //    }
// // //    else{
// // //       oddMultiple(value);
// // //       takeInput.close();
// // //    }
// // // })


// // // const readline = require('readline').createInterface({input:process.stdin,output:process.stdout});

// // // function printMultiple(num,multiple = 1){
// // //    if(multiple>10) return;
// // //    if(multiple%2==0){
// // //       console.log(num + "X" + multiple + "=" + num*multiple)
// // //    }
// // //    printMultiple(num,multiple+1);
// // // }
// // // readline.question("Enter a number you want to multiple: ",(value)=>{
// // //    printMultiple(value);
// // //    readline.close();
// // // })

// // // function fib(n,a=0,b=1){
// // // if(n<=0) return;
// // // console.log(a)
// // //  fib(n-1,b,a+b)
// // // }
// // // fib(8)


// // function printNum(n){
// //    if(n>100) return;
// //    console.log(n)
// //    printNum(n+1);
// // }
// // printNum(90)





// // // 2. Write a program to add a new element to the end of an array.
// // // const takeInput = require('readline').createInterface({input:process.stdin,output:process.stdout});
// // // let arr = [1,2,3,4,5];
// // // takeInput.question("enter a number which you want to inset: ",(value)=>{
// // //     arr.push(Number(value));
// // //     console.log("value to be inseted:  ",arr);
    
// // //     takeInput.close();
// // // })

// // // 3. Write a program to add a new element at the beginning of an array.
// // // let arr = [1,2,3,4,5];
// // //     arr.unshift(Number(value));
// // //     console.log(arr);
    
// // // 4.Write a program to remove the last element from an array.
// // // let arr = [1,2,3,4,5];
// // // arr.pop();
// // // console.log(arr);
// // // 5.Write a program to remove the first element from an array.
// // // let arr =[1,2,3,4,5]
// // // arr.shift();
// // // console.log(arr);


// // // 6.Write a program to print all elements of an array using a loop.
// // // let arr = [1,2,3,4,5];

// // // for(let i=0;i<arr.length;i++){
// // // console.log(arr[i]);
// // // }


// // // 7.Write a program to count the number of elements in an array.
// // // let arr = [1,2,3,4,5,6];
// // //  let count =0;
// // // for(let i=0;i<arr.length;i++){
// // //   count =  count+arr[i];
// // // }
// // // console.log(count);


// // // 8,Write a program to check whether an array is empty or not.
// // // let arr =[];
// // // if(arr.length==0){
// // //     console.log("arr is empty");
// // // }
// // // else{
// // //     console.log("arr is not empty");
// // // }


// // // 9.Write a program to access and print the first element of an array.
// // // let arr = [1,2,3,4,5]
// // // console.log(arr[0]);


// // // 10.Write a program to access and print the last element of an array
// // // let arr = [4,5,6,7,8,10,11,16];
// // // const removedItem = arr.pop();
// // // console.log(removedItem)
// // //OR
// // // let size = arr.length;
// // // console.log(arr[size-1]);


// // // 11.Write a program to reverse an array.
// // // let str =" hello";
// // // let string = str.split("").reverse().join("");
// // // console.log(string);


// // // 12.sort a number
// // // let arr = [5, 4, 3, 2, 1];
// // // let result = arr.sort((a,b)=>{ return b-a}  );
// // // // console.log(result);
// // // let arr = [1,5,4,7,8,9,10];
// // // let result = arr.map((a,b)=>{
// // //     return a%2==0;
// // // })
// // // console.log(result);


// // // 13. Use filter method
// // // let arr = [7,8,5,2,6,9];
// // // let result =  arr.filter((a,b)=>{
// // //     return a*b;
// // // })
// // // console.log(result);


// // // 14. use splice method
// // // let arr =['mango','lemon','apple'];
// // // let result = arr.splice(2,0,'banana');
// // // console.log(arr);


// // // 15. use replaceAll method
// // // let str ='ram is a good boy.boy of clz';
// // // let result = str.replaceAll("boy",'student');
// // // console.log(result);


// // // 16. Check a number is prime or not
// // // const takeinput = require("readline").createInterface({
// // //   input: process.stdin,
// // //   output: process.stdout,
// // // });
// // // function isprime(num) {
// // //   if (num == 1) {
// // //     console.log("enter greater than 1");
// // //   }
// // //   for (let i = 2; i < num - 1; i++) {
// // //     if (num % i == 0) {
// // //       console.log("not prime", i);
// // //       return;
// // //     }

// // //   }
// // // }

// // // takeinput.question("enter a number: ", (value) => {
// // //   isprime(value);
// // //   takeinput.close();
// // // });


// // // 17. Check prime number using recursion
// // const takeinput = require("readline").createInterface({
// //   input: process.stdin,
// //   output: process.stdout,
// // });
// // function isprime(num, divisior = 2) {
// //   if (num == 0) {
// //     console.log("enter geater than 0");
// //   }
// //   if (divisior >= num - 1) {
// //     console.log("prime number");
// //   }
// //   if (num % divisior == 0) {
// //     console.log("not a prime",divisior);
// //     return;
// //   }
// //   isprime(num,divisior+1);
// // }
// // takeinput.question("enter a number: ", (value) => {
// //   isprime(Number(value));
// //   takeinput.close();
// // });


// // // 18.Remove duplicate elements
// // // let arr =[1,2,5,4,3,2,6];
// // //  arr.sort((a,b)=>{
// // //     return a-b;
// // // })

// // // let ans =0;
// // // for(let i = 0;i<arr.length;i++){
// // //     ans = ans^arr[i];
// // // }
// // // for(let i = 0;i<arr.length;i++){
// // // ans = ans^i;
// // // }
// // // console.log(ans);

// // // let arr =[20,50,60,80,70];
// // // let result = arr.slice(1,2);
// // // console.log(result);


// // // 1.Check a number is palindrome or not

// // // const readline = require('readline').createInterface({input:process.stdin,output:process.stdout})
// // // function isPalindrome(string){
// // // const reversed = string.split("").reverse().join("");
// // // if(string==reversed){
// // //     console.log("string is palidrome");
// // // }
// // // else{
// // //     console.log("string is not palidrome");
// // // }
// // // }


// // // readline.question("enter a sting: ",(value)=>{
// // // isPalindrome(value);
// // // readline.close();
// // // })
// // // const takeinput = require("readline").createInterface({
// // //   input: process.stdin,
// // //   output: process.stdout,
// // // });
// // // function missingNumber(n) {
// // //   let arr = [1, 2, 3, 5];
// // //   let ans = 0;
// // //   let sum = n * (n + 1) / 2;
// // //   for (let i = 0; i < arr.length; i++) {
// // //     ans = ans+ arr[i];
// // //   }
// // //   let actual = sum -ans;
// // //   console.log(actual);

// // // }
// // //   takeinput.question("enter a number: ",(value) => {
// // //     missingNumber(Number(value))
// // //      takeinput.close();
// // //   });

// // // let arr =[4,8,6,7,1,2,3,5];
// // // let temp =0;
// // // for(let i=0;i<arr.length-1;i++){
// // //     for(let j=0;j<arr.length-i-1;j++){
// // //         if(arr[j]>arr[j+1]){
// // //             temp = arr[j];
// // //             arr[j] = arr[j+1];
// // //             arr[j+1] = temp;
// // //         }
// // //     }
// // // }
// // // console.log(arr);

// // // let arr = [1, 2, 3, 4, 5];

// // // function Binarysearch(arr, target, start = 0, end = arr.length - 1) {
    
// // //   if (start > end) {
// // //     return -1;
// // //   }
// // //   let mid = Math.floor(start + (end - start) / 2);
// // //   if (arr[mid] == target) {
// // //     return mid;
// // //   } else if (arr[mid] < target) {
// // //     return Binarysearch(arr, target, mid + 1, end);
// // //   } else {
// // //     return Binarysearch(arr, target, start, mid - 1);
// // //   }
// // // }
// // // let result = Binarysearch(arr, 6);

// // // if (result!=-1) {
// // //   console.log("element found");

// // // } 

// // // const readline = require("readline").createInterface({input:process.stdin,output:process.stdout})
// // // function multipleNum(n,multiple = 1){
// // //     let result = n*multiple;
// // //     if(result>50){
// // //         return;
// // //     }
// // //     console.log(result);
// // //     multipleNum(n,multiple+1);
// // // }
// // // readline.question("enter a number which you want to multiple: ",(value)=>{
// // //     multipleNum(value);
// // //     readline.close();
// // // })


// // // function sumDigit(n){
// // //     if(n==0) return 0;
// // //     let digit = n%10;
// // //     n =Math.floor( n/10);
// // //   return digit +  sumDigit(n);
// // // }
    
// // // // console.log(sumDigit(123));
// // // const takeinput = require('readline').createInterface({input:process.stdin,output:process.stdout})
// // // function reverseNumber(num){
// // //     let result = num.split('').reverse().join("")
// // //     console.log(result);
// // // }
// // // takeinput.question("enter a number: ",(value)=>{
// // //     reverseNumber(value);
// // //     takeinput.close();
// // // })


// // function isPrime(n,divisor=2){
// //     if(n>100) return;
// //     if(divisor > n-1){
// //         console.log("prime number");
// //         return;
// //         }
// //         if(n % divisor == 0){
// //             console.log("not prime number",n);
// //             return;
// //         }
// //         isPrime(n,divisor+1)
// // }
// // isPrime(12)
// // // // print factorial Number
// // // const takeInput = require("readline").createInterface({
// // //   input: process.stdin,
// // //   output: process.stdout,
// // // });

// // // function fact(num) {
// // //   if (num == 0) {
// // //     return 1;
// // //   }
// // //   return num * fact(num - 1);
// // // }
// // // takeInput.question("enter a number: g", (value) => {
// // //   let result = fact(value);
// // //   console.log(result);

// // //   takeInput.close();
// // // });


// // // //  print Fibonacci series
// // // function Fibonacci(n){
// // //     let a= 0; 
// // //     let b=1;
// // //     for(let i=0;i<n;i++){
// // //         console.log(a);
// // //         let temp = a+b;
// // //         a = b;
// // //         b = temp;
// // //     }
// // //     return a;
// // // }
// // // console.log(Fibonacci(8));


// // // Print 1 to 100 without loop
// // // function print(n){
// // //     if(n<1)
// // //         return;
// // //     console.log(n);
// // //     print(n-1);
// // //     return;
// // // }
// // // print(100);


// // // Print even numbers without loop

// // // function even(n){
// // //     if(n>50)
// // //  return;
// // // if(n%2==0){
// // //     console.log(n);
// // // }
// // // even(n+1);

// // // }
// // // even(0);


// // // Print odd numbers without loop
// // // function odd(n){
// // //     if(n>50)
// // //         return;
// // //     if(n%2!=0){
// // //         console.log(n);
// // //     }
// // //     odd(n+1);
// // // }
// // // odd(5);

// // // // Sum of numbers 1 to N without loop
// // const takeInput = require('readline').createInterface({input:process.stdin,output:process.stdout})
// // const ans = 0;
// // function sum(n){
// //     if(n==0)
// //         return ans;
// //    return ans+ sum(n-1);
// // }
// // takeInput.question("enter a number: ",(value)=>{
// //     let result = Number(value);
// //     console.log(sum(result));
    
// //     takeInput.close();
// // })
// // // Reverse array
// // // let arr =[5,4,3,2,1];
// // // let result = arr.reverse();
// // // console.log(result);


// // // // print 1 to 100
// // // const takeInput = require("readline").createInterface({
// // //   input: process.stdin,
// // //   output: process.stdout,
// // // });

// // // function print(n) {
// // //   if (n > 100) return;
// // //   console.log(n);

// // //   print(n + 1);
// // // }
// // // takeInput.question("ewnter a initial number: ", (value) => {
// // //   print(Number(value));
// // //   takeInput.close();
// // // });

// // // WAP to find largest number in Array
// // // let arr =[10,20,50,90,100];
// // // let max = arr[0];
// // // for(let i=0;i<arr.length;i++){
// // // if(arr[i]>max){
// // //     max= arr[i];
// // // }
// // // }
// // // console.log(max);

// // // WAP to print smallest number in an Array

// // // let arr = [10,20,50,90,100];
// // // let min = arr[0];
// // //   for(let i=0;i<arr.length;i++){
// // //     if(arr[i]<min){
// // //         min = arr[i];
// // //     }
// // //   }
// // //   console.log(min);

// // // WAp to move all zero to the end
// // // let arr = [10, 0, 50, 0, 2, 0, 1, 0];
// // // let j = 0;
// // // for (let i = 0; i < arr.length; i++) {
// // //   if (arr[i] != 0) {
// // //     let temp = arr[i];
// // //     arr[i] = arr[j];
// // //     arr[j] = temp;

// // //     j++;
// // //   }
// // // }
// // // console.log(arr);
// // // WAP to find number using linear search
// // // let arr = [5,4,2,1,3];
// // //  function linear(arr,target,i=0){
// // // if(i==arr.length)
// // //     return -1;
// // // if(arr[i]==target){
// // //     console.log(i);
    
// // // }
// // // linear(arr,target,i+1);
// // //  }
// // //  linear(arr,1);
 
// // // let arr = [1, 2, 5, 4, 3, 2, 6];
// // // arr.sort((a, b) => {
// // //   return a - b;
// // // });
// // // console.log(arr);

// // // remove duplicate
// // // let duplicate = arr.filter((element, index) => {
// // //   return arr.indexOf(element) == index;
// // // });
// // // console.log(duplicate);

// // // count no. of apperance
// // let str = "javascript";
// // let obj = {};
// // for (let i = 0; i < str.length; i++) {
// //   let ch = str[i];
// //   if (obj[ch]) {
// //     obj[ch] = obj[ch] + 1;
// //   } else {
// //     obj[ch] = 1;
// //   }
// // }
// // console.log(obj);

// // // print 1 to 100
// // // const takeInput = require("readline").createInterface({
// // //   input: process.stdin,
// // //   output: process.stdout,
// // // });

// // // function print(n) {
// // //   if (n > 100) return;
// // //   console.log(n);

// // //   print(n + 1);
// // // }
// // // takeInput.question("ewnter a initial number: ", (value) => {
// // //   print(Number(value));
// // //   takeInput.close();
// // // });

// // // multiple number print

// // function printMultiple(num, multiple = 1) {
// //   let result = num * multiple;
// //   if (result > 50) return;
// //   console.log(result);
// //   printMultiple(num, multiple + 1);
// // }
// // printMultiple(5);

// // const user = [
// //   { id: 1, name: "ashish", active: true },
// //   { id: 2, name: "rahul", active: false },
// //   { id: 3, name: "neha", active: true },
// //   { id: 4, name: "ashish", active: false },
// // ];
// // // sort by nameUser name
// // const userSort = user.sort((a, b) => {
// //   return a.name.localeCompare(b.name);
// // });
// // console.log(userSort);

// // // uppercase by name
// // const nameUser = user.map((element) => {
// //   return element.name.toLocaleUpperCase();
// // });
// // console.log(nameUser);

// // // remove duplicate by name
// // const newUesr = user.filter((element, index, arr) => {
// //   return arr.findIndex((u) => u.name == element.name);
// // });
// // console.log(newUesr);

// // //  Delete  by  id
// // let id = 3;
// // user.filter((element) => {
// //   if (element.id != 3) {
// //     console.log(element);
// //   }
// // });

// // // chech number isprime or not

// // // function isPrime(n){
// // //     for(let i=2;i<n;i++){
// // //         if(n%i==0){
// // //             console.log(" not prime");     
// // //             return;
// // //         }
// // //         else{
// // //             console.log(" prime");
// // //             return;
// // //         }
// // //     }
// // // }
// // // isPrime(6);

// // // chech number isprime or not using recursion

// // function isPrime(n,divisor = 2){
// //   if(divisor>n-1){
// //     console.log("prime number");
// //     return;
// //   }
// //   if(n%divisor==0){
// //     console.log("not prime",divisor);
// //     return;
// //   }
// //   isPrime(n,divisor+1);
// // }
// // isPrime(21);


// // // remove duplicate
// // // let arr = [1,2,3,3,4,4,5,5];
// // //  let newArr = arr.filter((element,index)=>{
// // // return  arr.indexOf(element)==index;
// // //  });
// // //  console.log(newArr);
 
// function reverse(str,i=str.length-1){
//   if(i<0)
//     return "";
//   return str[i] + reverse(str,i-1);

// }
// console.log(reverse('hello'))

// function palidrome(str,s=0,e=str.length-1){
// if(s>=e) return "";
// if(str[s]!=str[e]){
//   console.log("not palidrome")
//   return;
// }
// else{
//   console.log("palidrome")
//   return;
// }
// return palidrome(str,s++,e--);
// }
// palidrome('madam')
// palidrome('car')

// let arr = [10,20,30,50];
// const largest = Math.max(...arr);
// const shortest = Math.min(...arr);
// console.log(largest) 
// console.log(shortest) 

// let larg = arr[0];
// for(let i=0;i<arr.length;i++){
// if(arr[i]>larg){
//   larg = arr[i];
// }
// }
// console.log(larg)

// let small = arr[0];
// for(let i=0;i<arr.length;i++){
// if(arr[i]<small){
//   small = arr[i];
// }
// }
// console.log(small)


// function countVowel(str,i=0,count =0){
//   let vowel = 'aeiou'
//   if(i==str.length)
//     return count;
//   if(vowel.includes(str[i])){
//     count++;
//   }
//   return countVowel(str,i+1,count)
// }
// console.log(countVowel('javascript'))
// let a=5;
// let b =10;
// a=a+b;
// b=a-b;
// a= a-b;

// console.log(a,"",b)
//  const users = [
//   {
//     id: 1,
//     orders: [
//       { id: 101, price: 200 },
//       { id: 102, price: 300 }
//     ]
//   }
// ];

// users[0].orders.filter(order => {
//   if (order.id === 102) {
//     order.price = 500;
//   }
// });

// console.log(JSON.stringify(users, null, 2));
//  const j="ram-shyam"
// console.log(j.split('-'))


// let n = 123;
// let ans =0
// while(n!=0){
// ans++;
// n =Math.floor(n/10);
// }
// console.log(ans)

// function rotate(arr8,k){
//   if(k==0) return arr8;
//   let last = arr8.pop();
//   arr8.unshift(last);
//   return rotate(arr8,k-1);
// }
// console.log(rotate([1,2,3,4,5],2))
// function reverse(str,i=str.length-1){
//   if(i<0) return '' ;
//   return str[i]+reverse(str,i-1)
// }
// console.log(reverse('hello'))
// function palidrom(str,s=0,e=str.length-1){
//   if(s>e) return '';
//   if(str[s]!=str[e]){
//     console.log("not palidrome")
//     return
//   }
//   else{
//     console.log("palidrome")
//     return
//   }
//   return palidrom(str,s+1,e-1);
// }
// palidrom("mam")
// palidrom("car")

// let arr = ["a", "b", "a", "c", "b", "d"];
// // find first non-repeating element
// function freq(arr,i=0,obj={}){
// if(i==arr.length) return obj;
// let item = arr[i];
// obj[item] = (obj[item] || 0)+1
// return freq(arr,i+1,obj)
// }
// function firstNonRepeat(arr, i = 0, obj = freq(arr)) {
//   if (i === arr.length) return -1;

//   if (obj[arr[i]] === 1) return arr[i];

//   return firstNonRepeat(arr, i + 1, obj);
// }

// console.log(firstNonRepeat(arr));

// let str = "hello";
// // output: "olleh" using recursion
// function reverse(str,i=str.length-1){
//   if(i<0) return '';
//   return str[i] + reverse(str,i-1);
// }
// console.log(reverse(str))

let arr = [1, [2, [3, 4], 5]];
// output: [1,2,3,4,5]

function flat(arr){
  let result = []
  function helper(currEle,i=0){
    if(i==currEle.length) return '';
    let item = currEle[i];
    if(Array.isArray(item)){
      helper(item)
    }
    else{
      result.push(item)
    }
     helper(currEle,i+1);
  }
  helper(arr)
  return result;
}
function sum(arr,i=0){
if(i==arr.length) return 0;
return arr[i] + sum(arr,i+1)
}
console.log(flat(arr))
console.log(sum(flat(arr)))