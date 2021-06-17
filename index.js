function scuberGreetingForFeet(feet){
  if (feet <= 400 ){
   return "This one is on me!" 
  }
  else if  (feet>2000 && feet<2500){ 
    return "I will gladly take your thirty bucks."
  }
  else if (feet>2500){
    return "No can do."
  }
}
  
  // Write your code here!
scuberGreetingForFeet(199) 

function ternaryCheckCity(city){
  return (city=="NYC")? "Ok, sounds good." : "No go." 
  // Write your code here!
}

function switchOnCharmFromTip(tipamount){
var tip;
  switch (tipamount) {
  case 'generous':
    tip="Thank you so much.";
    break;
  case'not as generous' :
    tip= "Thank you.";
    break;

  case 'thanks for everything':
    tip="Bye."
    break;
  }
   return tip;
} 

  // Write your code here!
