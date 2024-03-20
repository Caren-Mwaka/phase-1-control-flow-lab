function scuberGreetingForFeet(ride){
  if(ride <= 400){
    return 'This one is on me!'
  }
  if(ride > 400 && ride <= 2000){
    return 'That will be twenty bucks.'
  }
  if (ride > 2000 && ride <=2500){
    return 'I will gladly take your thirty bucks.'
  }
  else{
    return 'No can do.'
  }
}
console.log(scuberGreetingForFeet(2100));
function ternaryCheckCity(city){
  if(city ==='NYC' ){
    return 'Ok, sounds good.'
  }
  else{
    return 'No go.'
  }
}
console.log(ternaryCheckCity('NYC'));

function switchOnCharmFromTip(tip){
  if(tip === 'generous'){
    return 'Thank you so much.'
  }
  if (tip === 'not as generous' ){
    return 'Thank you.'
  }
  else{
    return 'Bye.'
  }
}
console.log(ternaryCheckCity())