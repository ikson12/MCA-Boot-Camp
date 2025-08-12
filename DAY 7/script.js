/** Q1
	 * Write a program to read the radius of a circle and calculate 
	 * its area using the formula:
		A = π * r²
	
	Problem Flow:
	1. User inputs radius (r)
	2. Program calculates: area = (22.0 / 7) * r * r
	3. Output displays area with radius
	
	Input / Output Example:
	Input:
	Enter Radius of Circle: 7
	Output:
	Area of Circle with Radius 7.0000 is 154.0000
let r = parseFloat(prompt("Enter Radius of Circle:"));
let area = (22 / 7) * r * r;
console.log(`Area of Circle with Radius ${r.toFixed(4)} is ${area.toFixed(4)}`);
*/
/** Q2
	 * Write a Java program to calculate Simple Interest using the formula:
 		SI = (P × N × R) / 100
 		Where:
		P = Principal amount
		N = Number of years
		R = Rate of interest
		
		Problem Flow:
		User inputs:
			Principal (P)
			Rate (R)
			Years (N)
		Program calculates:
			SI = (P × N × R) / 100
		Output displays the Simple Interest value.
		
		Input / Output Example:
		Input:
		Enter Principle Amount: 10000  
		Enter Rate of Interest: 5  
		Enter No. of Years: 2
		Output:
		Simple Interest = 1000.00

let P = parseFloat(prompt("Enter Principal Amount:"));
let R = parseFloat(prompt("Enter Rate of Interest:"));
let N = parseFloat(prompt("Enter No. of Years:"));
let SI = (P * N * R) / 100;
console.log(`Simple Interest = ${SI.toFixed(2)}`);
*/
/** Q3
	 * This program calculates Compound Interest using the formula:
 		F = P × (1 + i)ⁿ
 		Where:
			P = Principal amount
			i = Rate/100
			n = Number of years
 			Here, F is the final amount (principal + interest)
	
		 Problem Flow:
		Input P, R, and N from user
		Calculate i = R / 100
		Use formula F = P × (1 + i)^N
		Display the final compound amount
		
		Input / Output Example:
		Input:
		Enter Principal Value: 10000  
		Enter Rate of Interest: 10  
		Enter No. of Years: 2
		Output:
		Compound Interest 12100.00

let P = parseFloat(prompt("Enter Principal Value:"));
let R = parseFloat(prompt("Enter Rate of Interest:"));
let N = parseInt(prompt("Enter No. of Years:"));
let i = R / 100;
let F = P * Math.pow((1 + i), N);
console.log("Compound Amount: " + F.toFixed(2));
let compoundInterest = F - P;
console.log("Compound Interest: " + compoundInterest.toFixed(2));
*/
/** Q4
	 * This program converts temperature from Fahrenheit to Celsius using the formula:
		C = (5/9) × (F - 32)
		
	Problem Flow:
	Input temperature in Fahrenheit
	Apply formula: C = (5 / 9.0) × (F - 32)
	Display result in Celsius
	
	Input / Output Example:
	Sample Inputs to Test (from question):
	68, 150, 212, 0, -22
	Sample Output (for 68°F):
	68.000000 deg F is 20.000000 deg C
	

	let F = parseFloat(prompt("Enter temperature in Fahrenheit:"));
	let C = (5 / 9) * (F - 32);
	console.log(F.toFixed(6) + " deg F is " + C.toFixed(6) + " deg C");
*/
/** Q5
	 *  This program calculates the Volume and Surface Area of a sphere 
	 *  using the following formulas:
			Volume (V) = (4/3) × π × r³
			Area (A) = 4 × π × r²
	
	Problem Flow:
	Get r (radius) from user
	Calculate area using A = 4πr²
	Calculate volume using V = (4/3)πr³
	Display both values
	
	 Input / Output Example:
	Input:
	Enter Radius of Sphere: 7
	Output:
	Volume of Sphere: 1436.571429
	Area of Sphere  : 615.428571

let r = parseFloat(prompt("Enter Radius of Sphere:"));
let area = 4 * Math.PI * Math.pow(r, 2);
let volume = (4 / 3) * Math.PI * Math.pow(r, 3);
console.log("Volume of Sphere: " + volume.toFixed(6));
console.log("Area of Sphere  : " + area.toFixed(6));
*/

/** Q6
	 * This program allows the user to enter 3 test marks of a student, 
	 calculates the total and average, and displays the result.
	 
	Problem Flow:
	Get 3 marks from user
	Add marks → total
	Divide total by 3.0 → average
	Display total and average
	
	Input / Output Example:
	Input:
	Enter Mark 1: 80  
	Enter Mark 2: 75  
	Enter Mark 3: 85  
	Output:
	Total Marks   = 240  
	Average Marks = 80.0
	 
	let m1 = parseFloat(prompt("Enter Mark 1:"));
let m2 = parseFloat(prompt("Enter Mark 2:"));
let m3 = parseFloat(prompt("Enter Mark 3:"));
let total = m1 + m2 + m3;
let average = total / 3.0;
console.log("Total Marks   = " + total);
console.log("Average Marks = " + average.toFixed(1));
*/

/** Q7
	 * This program reads a five-letter word from the user and encodes 
	 it by subtracting 1 from the ASCII value of each character. 
	 It then prints the newly encoded word.
	 
	 Problem Flow:
	Get 5-letter word input
	Loop each character → subtract 1 from ASCII
	Build new string with changed characters
	Print encoded result
	
	Input / Output Example:
	Input:
	Enter a Five letter word: white
	Output:
	Encoded Word: vghsd
	

	let word = prompt("Enter a Five letter word:");
if (word.length !== 5) {
    console.log("Error: Please enter exactly five letters.");
} else {
    
    let encoded = "";
    for (let i = 0; i < word.length; i++) {
        let asciiValue = word.charCodeAt(i); 
        let newChar = String.fromCharCode(asciiValue - 1); 
        encoded += newChar; 
    }
    console.log("Encoded Word: " + encoded);
}
 */

/** Q8
	 * This program calculates the sum of the first n odd integers 
	 (Example: 1 + 3 + 5 + ... + (2n - 1)).
	 
	 Problem Flow:
	Input n from user
	Loop from 1 to (2n−1) in steps of 2
	Accumulate the sum
	Print the result
	
	Input / Output Example:
	Input:
	Enter how many odd numbers to sum: 5
	Output:
	Sum of first 5 odd numbers is 25
	(1 + 3 + 5 + 7 + 9 = 25)

	 

	let n = parseInt(prompt("Enter how many odd numbers to sum: "));

let sum = 0;

for (let i = 1; i <= (2 * n - 1); i += 2) {
    sum += i; 
}

console.log(`Sum of first ${n} odd numbers is ${sum}`);
*/

/** Q9
	 * This program finds the sum of even numbers between 2 and 30 (inclusive).
	 	
	 Problem Flow:
	Start loop from 2 to 30
	Check if number is even (i % 2 == 0)
	Add to sum
	Print final sum
	
	 Input / Output Example:
	Output:
	Sum of even numbers from 2 to 30 = 240
	(Even numbers: 2 + 4 + 6 + ... + 30 = 240)
	

	let sum = 0;

for (let i = 2; i <= 30; i++) {
    if (i % 2 === 0) { 
        sum += i;
    }
}

console.log(`Sum of even numbers from 2 to 30 = ${sum}`);

 */

/** Q10
	 * This program calculates and prints the product of odd numbers from 1 to 15.
		(Odd numbers: 1, 3, 5, 7, ..., 15)
		
		Problem Flow:
		Start from 1 to 15
		Increment by 2 to get odd numbers
		Multiply all odd numbers
		Print the final product
		
		Input / Output Example:
		Output:
		Product of odd numbers from 1 to 15 = 2027025
		(Odd numbers: 1 × 3 × 5 × 7 × 9 × 11 × 13 × 15 = 2027025)

	

		let product = 1;

for (let i = 1; i <= 15; i++) {
    if (i % 2 !== 0) { 
        product *= i;
    }
}

console.log(`Product of odd numbers from 1 to 15 = ${product}`);

*/

/** Q11
	 * This program reads a number n from the user and prints the 
	 factorial of numbers from 1 to n in a table format.
	 
	 Problem Flow:
	Read n from user
	Start fact = 1
	Loop from 1 to n
	Multiply fact *= i
	Print each number with its factorial
	
	Sample Output:
	Input:
	Enter the N value: 5

	Output:
	N   |   Factorial
	--------------------
  	1  |            1
  	2  |            2
  	3  |            6
  	4  |           24
  	5  |          120
	 

	let n = parseInt(prompt("Enter the N value: "));
let fact = 1;

console.log("N   |   Factorial");
console.log("--------------------");

for (let i = 1; i <= n; i++) {
    fact *= i;
    console.log(`${i.toString().padEnd(3)} |   ${fact}`);
}

*/

/** Q12
	 * This program reads 5 numbers (each between 1 and 30) from the user.
	 For each number, it prints a line with that many asterisks *, 
	 forming a simple bar chart or histogram.
	 
	 Problem Flow:
	Read 5 numbers from the user
	Loop through each number
	For each number:
	Print the number
	Print that many * using inner loop
	
	Sample Output:
	Input:
	Enter 5 Numbers in a same line: 
	3 7 2 6 1
	Output:
	3 ***
 	7 *******
 	2 **
 	6 ******
 	1 *
 	


let input = prompt("Enter 5 Numbers in a same line (1-30):");
let numbers = input.split(" ").map(Number);
for (let num of numbers) {
    let stars = "";
    for (let i = 0; i < num; i++) {
        stars += "*";
    }
    console.log(`${num} ${stars}`);
}
*/

/** Q13
	 * This program first reads how many numbers the user wants to enter 
	 (N). Then it reads those N numbers and finds the smallest among 
	 them.
	 
	 Problem Flow:
	Get total number of inputs N
	Read first number as smallest
	Loop remaining N-1 times
	Compare each number with smallest
	Update smallest if a smaller number is found
	Print final smallest number
	
	Sample Input / Output:
	Input:
	Enter how many numbers you want to input: 5
	Enter number 1: 22
	Enter number 2: 18
	Enter number 3: 31
	Enter number 4: 6
	Enter number 5: 27
	Output:
	The smallest number is: 6


let N = parseInt(prompt("Enter how many numbers you want to input:"));
let smallest = parseFloat(prompt("Enter number 1:"));
for (let i = 2; i <= N; i++) {
    let num = parseFloat(prompt(`Enter number ${i}:`));
    if (num < smallest) {
        smallest = num; 
    }
}
console.log(`The smallest number is: ${smallest}`);

*/

/** Q14
	 *  This program will read a line of text from the user, analyze 
	 each character, and count how many are letters, digits, whitespace, 
	 or other types of characters (like punctuation).
	 
	 Problem Flow:
	Prompt the user to input a line of text.
	Initialize counters for letters, digits, spaces, and other characters.
	Loop through each character and classify it into one of the categories.
	Display the count for each category: letters, digits, spaces, and others.

	Sample Input / Output:
	Input:
	Enter the text below:
	Hello World! 123

	Output:
	Letters : 10
	Digits : 3
	Space Chars : 2
	Others : 2

	let text = prompt("Enter the text below:");

let letters = (text.match(/[a-zA-Z]/g) || []).length;
let digits  = (text.match(/[0-9]/g) || []).length;
let spaces  = (text.match(/ /g) || []).length;
let others  = text.length - (letters + digits + spaces);

console.log(`Letters : ${letters}`);
console.log(`Digits : ${digits}`);
console.log(`Space Chars : ${spaces}`);
console.log(`Others : ${others}`);

*/

/** Q15
	 *  This program uses a switch statement to examine the value of 
	 an integer called flag. Based on its value, it prints one of the
	 following messages:
		HOT if the flag has the value 1.
		LUKE WARM if the flag has the value 2.
		COLD if the flag has the value 3.
		OUT OF RANGE if the flag has any other value.
		
	 Problem Flow:
	Prompt the user to input an integer value for the flag.
	Use a switch statement to check the value of the flag and assign the correct heat status.
	Print the flag value and its corresponding heat status.
	
	Sample Input / Output:
	Input:
	Enter Heat code (1-3): 2

	Output:
	Flag 2 is LUKE WARM


	 */

	// Q15: Heat status using switch statement

let flag = parseInt(prompt("Enter Heat code (1-3):"));
let status;

switch (flag) {
    case 1:
        status = "HOT";
        break;
    case 2:
        status = "LUKE WARM";
        break;
    case 3:
        status = "COLD";
        break;
    default:
        status = "OUT OF RANGE";
        break;
}

console.log(`Flag ${flag} is ${status}`);

