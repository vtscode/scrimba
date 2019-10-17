let sentence = "The dog chased the cat."
let regex = /the/

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); 
console.log(result);

// searching regex
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result1 = waldoRegex.test(waldoIsHiding);
console.log(result1);

// regex atau dngan |
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result2 = petRegex.test(petString);
console.log(result2);


// ignore flag for key like upper or lower case
let myString3 = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result3 = fccRegex.test(myString3);
console.log(result3);

// extract matches
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result4 = extractStr.match(codingRegex); 
console.log(result4);

// more than the first match
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/g;
testStr.match(ourRegex);

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig;
let result5 = twinkleStar.match(starRegex); 
console.log(result5);

// Match anything with wildcard period
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
humStr.match(huRegex); // Returns ["hum"]
hugStr.match(huRegex); // Returns ["hug"]

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result6 = unRegex.test(exampleStr);
console.log(result6);

// match single chars with multiple possibilities
let bgRegex = /b[aiu]g/;
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /b[aeiou]g/ig;
let result7 = quoteSample.match(vowelRegex);
console.log(result7);

// match letters of the alphabet
let quoteSample1 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; 
let result8 = quoteSample1.match(alphabetRegex); 
console.log(result8);

// match numbers and letters of the alphabet
let quoteSample2 = "Blueberry 3.141592653s are delicious.";
let myRegex1 = /[2-6h-s]/ig;
let result9 = quoteSample2.match(myRegex1); 
console.log(result9);

// match chars that occur one or more times
// angka 0-9 tidak kita ambil dan aeiou juga tidak hnya karakter lain selain itu
let quoteSample3 = "3 blind mice.";
let myRegex2 = /[^0-9aeiou]/ig; 
let result10 = quoteSample3.match(myRegex2); 
console.log(result10);

// match chars that occur one or more times
let difficultSpelling = "Mississipspi";
let myRegex3 = /s+/g; 
let result11 = difficultSpelling.match(myRegex3);
console.log(result11);


// Match chars that occur zero or more times 
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // Change this line
let result12 = chewieQuote.match(chewieRegex);
console.log(result12);


// find chars with lazy matching
let string = "titanic";
let regex1 = /t[a-z]*?i/; 
string.match(regex1);

let text = "<h1>Winter is coming</h1>";
let myRegex4 = /<.*?>/; 
let result13 = text.match(myRegex4);
console.log(result13);

// find one or more criminals in a hunt
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /C+/; // Change this line

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);


// Match beginning string patterns
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result14 = calRegex.test(rickyAndCal);
console.log(result14);

// natch ending string patterns
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result15 = lastRegex.test(caboose);
console.log(result15);

// match any letters and numbers
let quoteSample4 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result16 = quoteSample4.match(alphabetRegexV2).length;
console.log(result16);

// match everything but not letters n numbers
let quoteSample5 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result17 = quoteSample5.match(nonAlphabetRegex).length;
console.log(quoteSample5.match(nonAlphabetRegex));
console.log(result17);

// match All numbers
let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g; // Change this line
let result18 = numString.match(numRegex).length;
console.log(result18);

// match all non-numbers
let numString1 = "Your sandwich will be $5.00";
let noNumRegex = /\D/g; // Change this line
let result19 = numString1.match(noNumRegex).length;
console.log(result19);


// restrict possible usernames
/*
1) If there are numbers, they must be at the end.
2) Letters can be lowercase and uppercase.
3) At least two characters long. Two-letter names can't have numbers.
*/ 

let username = "JackOfAllTrades";
let userCheck = /^[A-Za-z]{2,}\d*$/; // Change this line
let result20 = userCheck.test(username);
console.log(result20);


// match whitespace char
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result21 = sample.match(countWhiteSpace);
console.log(result21);

// match non-whitespace chars
let sample1 = "Whitespace is important in separating words";
let countWhiteSpace1 = /\S/g; // Change this line
let result22 = sample1.match(countWhiteSpace1);
console.log(result22);

// Specify Upper and Lower number of Matches
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // Change this line
// let result23 = ohRegex.test(ohStr);
let result23 = ohStr.match(ohRegex);
console.log(result23);

// specify only the lower Number of matches
let haStr = "Hazzzzah";
let haRegex = /z{4,}/; // Change this line
let result24 = haRegex.test(haStr); 
console.log(result24);

// specify exact number of matches
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result25 = timRegex.test(timStr);
console.log(result25);

// check for all or none
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
// let result26 = favRegex.test(favWord);
let result26 = favWord.match(favRegex);
console.log(result26);

// positive n negative lookahead
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex); // Returns ["q"]
noquit.match(qRegex); // Returns ["q"]


let sampleWord = "astronaut12";
// 5 or more chars and 2 or more digits
let pwRegex = /(?=\w{5})(?=\D*\d{2})/; // Change this line
let result27 = pwRegex.test(sampleWord);
console.log(result27);	

// Reuse patterns using capture groups
let repeatStr = "regex regex";
// \1 (slash one) utk mengulang dari sebelumnya yaitu (\w+)
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"]

let repeatNum = "42 42 42";
// caret(^) => match for begining
// dollar($) => match for ending
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result28 = reRegex.test(repeatNum);
console.log(result28);

// Use capture groups to search n replace
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
// Returns "The sky is blue."

"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
// Returns "Camp Code"

let huhText = "This sandwich is good.";
let fixRegex = /good/; // Change this line
let replaceText = "okey-dokey"; // Change this line
let result29 = huhText.replace(fixRegex, replaceText);
console.log(result29);


// Remove whitespace from start n end
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result30 = hello.replace(wsRegex, ''); // Change this line
console.log(result30);












