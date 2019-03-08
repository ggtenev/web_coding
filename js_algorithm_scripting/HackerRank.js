// function diagonalDifference(arr) {
    
//     let diagonal1 = 0;
//     let diagonal2 = 0;
//     let j = 0;
//     let k = 0;
//     for(let i = 0; i<arr.length; i++){
        
//         diagonal1 +=arr[i][j];
//         j++;
//     }
     
//     for(let i = arr.length-1; i >= 0; i--){
        
//         diagonal2 +=arr[i][k];
//         k++;
//     }
    
//     return Math.abs(diagonal1 - diagonal2);

// }

// console.log(diagonalDifference([[1,1,1],[88,88,1],[1,1,3]]));

// function plusMinus(arr) {

//     let l = arr.length;
//     let pos = 0;
//     let neg = 0;
//     let zer = 0;
    
//     arr.forEach(a =>{
//         if(a>0)pos++;
//         else if(a===0)zer++;
//         else if(a<0) neg++;
//     })
    
//     return [(pos/l).toFixed(6),(neg/l).toFixed(6),(zer/l).toFixed(6)]
        
        
    

// }

// function staircase(n) {

//     for(let i = 0; i < n; i++){
//         for(let j = n; j > i; j--){
//             document.write(" ");
//         }
//         for(let k = 0; k<=i;k++){
//             document.write('#');
//         }
//         document.write('<br>    ');
//     }

// }

// console.log(staircase(6));

// function miniMaxSum(arr) {

//     let min = +Infinity;
//     let max = -Infinity;
//     let minSum = 0;
//     let maxSum = 0;
//     let sum = 0;
    
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > max) max = arr[i];
//         if(arr[i] < min) min = arr[i];
//     }
    
//     for(let i = 0; i<arr.length; i++){
//         sum +=arr[i];
//     }
    
//     minSum = sum - max;
//     maxSum = sum - min;
    
//     console.log(minSum,maxSum);

// }

// function birthdayCakeCandles(ar) {

//     let max = -Infinity;
//     let count = 0;
    
//     for(let i = 0; i<ar.length; i++){
//         if(ar[i] > max) max = ar[i];
//     }
    
//     ar.forEach(a =>{
//         if(a == max) count++;
//     })
    
//     return count;
// }

// //KANGAROO

// function kangaroo(x1, v1, x2, v2) {
//     let match;
//     for(let i = 0; i < 10000; i++){
//         x1 +=v1;
//         x2 +=v2;
//         if(x1 == x2) return 'YES';
//     }
//     return 'NO';

// }

// //Grading Students

// function gradingStudents(grades) {
    
//      const newArr = grades.map(a =>{
//         if(a >= 38 && (a+1)%5==0 ){
            
//             return a+1;
//         }
//         else if(a >= 38 && (a+2)%5 ==0) {
            
//             return a+2;
//         }
//         else {
            
//             return a;
//         }
//     })
//      return newArr;

// }

//Apple and Orange

// function countApplesAndOranges(s, t, a, b, apples, oranges) {

//     let numApples = 0;
//     let numOranges = 0;
    
//     apples.forEach(apple =>{
//         if(apple + a >=s && apple+a<=t) numApples++;
        
//     })
//     oranges.forEach(orange =>{
//         if(orange + b >=s && orange+b<=t) numOranges++;
        
//     })
    
//     console.log(numApples);
//     console.log(numOranges);

// }

// //Breaking the Records

// function breakingRecords(scores) {
//     let h = scores[0];
//     let l = scores[0];
//     let countHigh = 0;
//     let countLow = 0;
    
//     for(let i = 0; i<scores.length; i++){
//         if(scores[i] > h){
//             h=scores[i];
//             countHigh++;
//         }
//         if(scores[i]< l){
//             l = scores[i];
//             countLow++;
//         }
        
//     }
//     console.log(countHigh + " " + countLow);

// }

//Birthday Chocolate

// function birthday(s, d, m) {

//     let count = 0;
//     let sum = 0;
//     let squares = 0;
//     for(let i  = 0; i < s.length; i++){
//         for(let j = i; j < m+i ;j++){
//             squares++;
//             sum+=s[j];
//             if(sum === d && squares == m)count++;
//         }
//         sum = 0;
//         squares =0;
//         console.log(count);
//     }
//     console.log(count);
//     return count;
// }

// //Cat and Mouse

// function catAndMouse(x, y, z) {


//     let catA = Math.abs(x-z);
//     let catB = Math.abs(y-z);
    
//     if(catA<catB) return 'Cat A';
//     else if(catA>catB) return 'Cat B';
//     else if(catA == catB) return 'Mouse C';
// }

// Unique In Order 
/* Implement the function unique_in_order which takes as argument a sequence and returns a
 list of items without any elements with the same value next to each other and preserving the 
 original order of elements.*/

// var uniqueInOrder = function(arr){
  
//   if(typeof arr == 'string'){
//   let ar = arr.split('');
//   let final = [];
//   for(let i = 0; i<ar.length; i++){
//     if(ar[i] != ar[i+1]) final.push(ar[i]);
//   }
//   return final;
// }
//   else{
//   let final = [];
//   for(let i = 0; i<arr.length; i++){ 
//     if(arr[i] != arr[i+1]) final.push(arr[i]);
//   }
//   return final;
// }
// }

// //Exes and Ohs
// /*Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. The string can contain any char.*/

// function XO(str) {
//     let st = str.toLowerCase();
//     let arr = st.split('');

//     let os = 0;
//     let xs = 0;

//     arr.forEach(a =>{
//         if(a == 'o')os++;
//         if(a == 'x')xs++;
//     })

//     if(os ==xs) return true;
//     else return false;
// }


// //BLACK JACk COUNTING
// /*In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the 
// relative number of high and low cards remaining in the deck. This is called Card Counting.
// Having more high cards remaining in the deck favors the player. Each card is assigned a 
// value according to the table below. When the count is positive, the player should bet high. 
// When the count is zero or negative, the player should bet low.*/

// function cc(card) {
//   let count = 0;
//   switch(card){
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//          count++;
//          break;
//     case 10:
//     case 'J':
//     case 'Q':
//     case 'K':
//     case 'A':
//         count--;
//         break;
//   }
  
//   if(count > 0) return count + ' Bet';
//   else return count + ' Hold';


/*SOME RANDOM GAME FROM COLT STEELE COURSE*/


// let first = 0;
// let second = 0;
// let number = document.querySelector("input");
// let up = document.getElementById("up");
// let playerOne = document.getElementById("playerOne");
// let playerTwo = document.getElementById("playerTwo");
// let span1 = document.getElementById("first");
// let span2 = document.getElementById("second");
// let targetReached = false;
// let reset = document.getElementById("reset");

// number.addEventListener("change",function(){
//     up.textContent = number.value;
//     resetScore();
// })

// playerOne.addEventListener("click", function(){
    
//     if(!targetReached){
//     first++;
//     document.getElementById("first").textContent = first;
//     if(first ==number.value) {targetReached = true;
//        span1.classList.add("winner");
        
//         }
//     }
// });

// playerTwo.addEventListener("click", function(){
    
//     if(!targetReached){
//     second++;
//     document.getElementById("second").textContent = second;
//     if(second == number.value) {targetReached = true;
//        span2.classList.add("winner");
       
//         }
//     }
// });

// reset.addEventListener("click", resetScore);

// function resetScore(){
//     span2.classList.remove("winner");
//     span1.classList.remove("winner");
//     first = 0;
//     second = 0;
//     document.getElementById("first").textContent = first;
//     document.getElementById("second").textContent = second;
//     targetReached = false;
// }

//CODEWARS BUS STOP KATA

// var number = function(busStops){
//   let people = 0;
//   busStops.forEach(a => {
//     people = people + a[0] - a[1];
//   })

//   return people;
// }

// SILLY STORY TELLING

// var customName = document.getElementById('customname');
// var randomize = document.querySelector('.randomize');
// var story = document.querySelector('.story');

// var storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'
// var insertX = [ 'Willy the Goblin',
//                 'Big Daddy',
//                 'Father Christmas'];

// var insertY = [ 'the soup kitchen',
//                 'Disneyland',
//                 'the White House'];

// var insertZ = [ 'spontaneously combusted',
//                 'melted into a puddle on the sidewalk',
//                 'turned into a slug and crawled away'];    

// function randomValueFromArray(array){
//   return array[Math.floor(Math.random()*array.length)];
// }
// randomize.addEventListener('click', result);

// function result() {

//     var newStory = storyText;

//   if(customName.value !== '') {
//     var name = customName.value;
//     newStory = newStory.replace('Bob',namste);

//   }

//   if(document.getElementById("uk").checked) {
//     var weight = Math.round(300 * 0.071428571428571) + ' stones';
//     var temperature = Math.round((94 - 32) * (5/9)) + 'degrees';
//     newStory = newStory.replace('94 fahrenheit',temperature);
//     newStory = newStory.replace('300 pounds',weight); 

//   }

//   var xItem = randomValueFromArray(insertX);
//   var yItem = randomValueFromArray(insertY);
//   var zItem = randomValueFromArray(insertZ);

//   newStory = newStory.replace(':insertx:',xItem);
//   newStory = newStory.replace(':insertx:',xItem);
//   newStory = newStory.replace(':inserty:',yItem);
//   newStory = newStory.replace(':insertz:',zItem);
   


//   story.textContent = newStory;
//   story.style.visibility = 'visible';

// }



// Find the Odd Int 

// function findOdd(A) {
  
//   for(let j = 0; j < A.length; j++){
//   let temp = A[j];
//   let count = 0;
//     for(let i = 0; i < A.length; i++){
//       if(A[i] === temp)count++;
//     }
//     if(count % 2 != 0)return temp;
    
//   }
  
// }


//DRAWING BOOK - HACKERRANK

// function pageCount(n, p) {
    
//     let i = 0; let  j = n; let count = 0;
//     while(i != p){
//     	i++;
//     }
//     while(j != p){
//     	j--;
//     	count++;
//     }

//     if(i<count) return Math.floor(i/2);
//     else return Math.floor(count/2);

// }

// Between Two Sets - Hacer rank

// function getTotalX(a, b) {
//     let nums = [];
//     let count = 0;
//     for(let i = 1; i <=100;i++){
//     	for(let j = 0; j < a.length; j++){
//     		if( i % a[j] == 0) {count++;}
//     	}
    	
//     	for(let s = 0; s < b.length; s++){
//     		if(b[s] % i == 0) {count++;}
//     	}

//     	if(count == (a.length + b.length)) nums.push(i);
//     	count = 0;
//     }
   
//    return nums.length;
    
// }

// function timeConversion(s) {
// 	let str = s;
// 	let n;
    
//     if(str.includes('PM')){
//     	let hours = str.slice(0,2);
//     	switch (hours){
//     		case '01': str=str.replace('01','13');break;
//     		case '02': str=str.replace('02','14');break;
//     		case '03': str=str.replace('03','15');break;
//     		case '04': str=str.replace('04','16');break;
//     		case '05': str=str.replace('05','17');break;
//     		case '06': str=str.replace('06','18');break;
//     		case '07': str=str.replace('07','19');break;
//     		case '08': str=str.replace('08','20');break;
//     		case '09': str=str.replace('09','21');break;
//     		case '10': str=str.replace('10','22');break;
//     		case '11': str=str.replace('11','23');break;
//     	}
//     }
//     else if(str.includes('AM')){
//     	if(str.slice(0,2) == '12'){
//     		str = str.replace('12','00');
//     	}
//     }
//     return str.slice(0,8);
// }


//Bon Appetit

// function bonAppetit(bill, k, b) {

// 	let total = 0;
// 	bill.forEach(function(a){
// 		total +=a;
// 	})
// 	total-=bill[k];
// 	let anna = total/2;
// 	if(b-anna == 0)console.log('Bon Appetit') ;
// 	else{
// 		console.log(b-anna);
// 	}

// }

//SOCK MERCHANT - HACKER RANK

// function sockMerchant(n, ar) {

// 	function removeDuplicates(arr){
// 		let uniqueArray = [];
// 		for(let i = 0; i < arr.length; i++){
// 			if(uniqueArray.indexOf(arr[i]) == -1){
// 				uniqueArray.push(arr[i]);
// 			}
// 		}

// 		return uniqueArray;
// 	}

// 	let sockColors = removeDuplicates(ar);
// 	let count = 0;
// 	let pairs = 0;
// 	for(let i = 0; i < sockColors.length; i++){
// 		for(let j = 0; j < ar.length; j++){
// 			if(sockColors[i] === ar[j]) count++;
// 		}
// 		pairs += Math.floor(count/2);
// 		count = 0;
// 	}

// 	return pairs;

// }


//MIGRATORY BIRDS - HACKER RANK

// function migratoryBirds(arr) {

//     let t1 = 0;
//     let t2 = 0;
//     let t3 = 0;
//     let t4 = 0;
//     let t5 = 0;
    
//     for(let i = 0; i < arr.length; i++){
        
//         if(arr[i] === 1) t1++;
//         if(arr[i] === 2) t2++;
//         if(arr[i] === 3) t3++;
//         if(arr[i] === 4) t4++;
//         if(arr[i] === 5) t5++;
        
//     }
    
// let sorted = [t1,t2,t3,t4,t5];
// sorted = sorted.sort(function(a, b){return b-a});
    
//     if(sorted[0] == t1)return 1;
//     if(sorted[0] == t2)return 2;
//     if(sorted[0] == t3)return 3;
//     if(sorted[0] == t4)return 4;
//     if(sorted[0] == t5)return 5;
   
// }


//DAY OF PROGRAMMER - HACKER RANK
// function dayOfProgrammer(year) {
// let day;
// 	if(year < 1918){
// 		if(year % 4 === 0){
// 			day = 256 - 244;
// 			return day + '.09.' + year;
// 		}
// 		else{
// 			day = 256 - 243;
// 			return day + '.09.' + year;

// 		}
// 	}
// 	else if(year > 1918){
// 		if((year % 400 === 0) || (year % 4 ===0 && year % 100 !== 0)){
// 			day = 256 - 244;
// 			return day + '.09.' + year;
// 		}
// 		else{
// 			day = day = 256 - 243;
// 			return day + '.09.' + year;
// 		}
// 	}
// 	else {
// 		day = 256 - 230;
// 		return day + '.09.' + year;
// 	}
// }

// COUNTING VALLEYS - HACKER RANK

// function countingValleys(n, s) {

//     let steps = s.split('');
//     let count = 0;
//     let valleys = 0;
//     if(steps[0] == 'D')valleys++;

//     for(let i = 0; i < steps.length; i++){
//         if(steps[i] === 'U')count++;
//         else count--;
//         if(count == 0 && steps[i+1] == 'D')valleys++;
//     }

//     return valleys;
// }

//GET MONEY SPENT  HACKER RANK
// function getMoneySpent(keyboards, drives, b) {
//     let max = 0;
//     for(let i = 0; i < keyboards.length; i++){
//     	for (let j = 0; j < drives.length; j++){
//     		if(max < keyboards[i] + drives[j] && keyboards[i] + drives[j] <= b){
//     			max = keyboards[i] + drives[j];
//     		}
//     	}
//     }
//     if(max == 0) return -1;
//     return max;
// }

// PICKING NUMBERS - HACKING RANK

// function pickingNumbers(a) {
   
//    let b = a.sort(function(a,b) { return a-b});

//    let total = 0;
//    let max = 0;

//    for(let j = 0; j < b.length; j++){
//        for(let i = 0; i < b.length; i++){
//         if(Math.abs(b[j] - b[j+i]) < 2) total++;
//         else total = 0;
//         if(max < total) max  = total;
//        }
//        total = 0;
//      }  
//    return max;
// }


//DesignerPdfViewer - HACKER RANK

// function designerPdfViewer(h, word) {
//     let max = 0;
//     for(let i = 0; i < word.length; i++){

//         switch (word[i]){
//             case 'a': {
//                 if (max < h[0]) max = h[0];break;
//             }
//             case 'b': {
//                 if (max < h[1]) max = h[1];break;
//             }
//             case 'c': {
//                 if (max < h[2]) max = h[2];break;
//             }
//             case 'd': {
//                 if (max < h[3]) max = h[3];break;
//             }
//             case 'e': {
//                 if (max < h[4]) max = h[4];break;
//             }
//             case 'f': {
//                 if (max < h[5]) max = h[5];break;
//             }
//             case 'g': {
//                 if (max < h[6]) max = h[6];break;
//             }
//             case 'h': {
//                 if (max < h[7]) max = h[7];break;
//             }
//             case 'i': {
//                 if (max < h[8]) max = h[8];break;
//             }
//             case 'j': {
//                 if (max < h[9]) max = h[9];break;
//             }
//             case 'k': {
//                 if (max < h[10]) max = h[10];break;
//             }
//             case 'l': {
//                 if (max < h[11]) max = h[11];break;
//             }
//             case 'm': {
//                 if (max < h[12]) max = h[12];break;
//             }
//             case 'n': {
//                 if (max < h[13]) max = h[13];break;
//             }
//             case 'o': {
//                 if (max < h[14]) max = h[14];break;
//             }
//             case 'p': {
//                 if (max < h[15]) max = h[15];break;
//             }
//             case 'q': {
//                 if (max < h[16]) max = h[16];break;
//             }
//             case 'r': {
//                 if (max < h[17]) max = h[17];break;
//             }
//             case 's': {
//                 if (max < h[18]) max = h[18];break;
//             }
//             case 't': {
//                 if (max < h[19]) max = h[19];break;
//             }
//             case 'u': {
//                 if (max < h[20]) max = h[20];break;
//             }
//             case 'v': {
//                 if (max < h[21]) max = h[21];break;
//             }
//             case 'w': {
//                 if (max < h[22]) max = h[22];break;
//             }
//             case 'x': {
//                 if (max < h[23]) max = h[23];break;
//             }
//             case 'y': {
//                 if (max < h[24]) max = h[24];break;
//             }
//             case 'z': {
//                 if (max < h[25]) max = h[25];break;
//             }

//         }
//     }
//             return max * word.length;
// }


//UTOPIAN TREE - HACKER RANK

// function utopianTree(n) {

//     let h = 1;
//     for(let i = 1; i <= n; i++){
//         if(i%2 !== 0) h = h*2;
//         else h+=1;
//     }

//     return h;
// }


// climbingLeaderboard - Hacker Rank

// function climbingLeaderboard(scores, alice) {

//     let arrr = [];
//     let ss = 0;
    
//     for(let i = 0; i <alice.length; i++){
//         scores.push(alice[i]);
//         scores.sort(function(a,b){return b-a});

//         for(let j = 0; j < scores.length; j++){
//             if(scores[j] == scores[j+1]){
//             scores.splice(j,1);
//             }
//         }
        

//         for(let k = 0; k < scores.length; k++){
//             if(alice[i] == scores[k]){
//                 arrr.push([k+1]);


//             }
//         }
        
//         
//     }
        // return arrr;
// }



//angryProfessor - Hacker Rank

// function angryProfessor(k, a) {

//     let s = 0;
//     for(let i = 0; i < a.length; i++){
//         if(a[i] <= 0) s++;
//     }

//     if(s >= k) return 'NO';
//     else return 'YES';
// }