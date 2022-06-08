function scuberGreetingForFeet(feet){
  // Write your code here!
let result;

  if (feet <= 400) {
    return "This one is on me!";
  }
  else if(feet > 2500){
    return 'No can do.'
  }
  else if (feet > 2000) {
    return "I will gladly take your thirty bucks.";
  }
  else{
    return 'No rides'
  }
}
scuberGreetingForFeet(200);

function ternaryCheckCity(city){
  // Write your code here!
  let result;

  if (city === 'NYC') {
    return 'Ok, sounds good.';
  } else{
    return 'No go.';
  }  
}
   

function switchOnCharmFromTip(tip){
  // Write your code here!


    let result;

    switch (tip) {
      case 'generous':{
       result ='Thank you so much.'
        break;
      }
      case 'not as generous':{
        result ='Thank you.'
         break;
       }
      default:{
       result = 'Bye.'
      }
    }

    return result;
}
