// //E - Task

console.log('train task ishga tushdi! ');
 const calculator  = (a, b, c) =>{
 

        if (b== "/" && c == 0) {
      return "not valid to operate";
   }
    else if (b== "+") {
      return a + c;
      }
  else if (b == "-") {
      return a - c;
       }
  else if (b == "*"){
   return a * c;
   }
    else if (b == "/"){
       return a / c;
    }
 }
 
 const result = calculator(15, "-", 2);
 console.log (result);
