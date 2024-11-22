function times(a,b){
    if (typeof a != "number" || typeof b != "number") throw new Error ("Whoah there! a or b is not a number")
    return a*b
}

try{
   console.log(times(1,8));
   console.log("hey there");
   
} catch(e){
  console.log(e);
  console.log("this is it");
  
} finally{
    console.log("Ngiyagijima kuyimanje washa");
    
}
