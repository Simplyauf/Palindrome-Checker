function palindromeChecker(str){
  let whiteSpaceRegex=/\s/g;
 str= str.replaceAll(whiteSpaceRegex, "");
  console.log(str)
 str=str.toLowerCase();
 let reverse=str.split('').reverse().join('');
 let a;
 if(str===reverse){
  a= ` '${str}' is a palindrome  `
 }
 else{
  a=  ` '${str}' is not a palindrome  `
 }
console.log(a)
}

palindromeChecker('eYe');       //   'eye' is a palindrome 
palindromeChecker('2_4_2');    //  '2_4_2' is a palindrome 
palindromeChecker('man');      //   'man' is not a palindrome 
palindromeChecker("22 02 2022"); // '22022022' is a palindrome