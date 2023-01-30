function scuberGreetingForFeet(tripLength){
  if (tripLength <= 400)
  return 'This one is on me!'
  else if (tripLength > 400 && tripLength <= 2000)
  return 'That will be twenty bucks.'
  else if (tripLength > 2000 && tripLength <= 2500)
  return 'I will gladly take your thirty bucks.'
  else
  return 'No can do.'

 }


 const NYC = "NYC";

 function ternaryCheckCity(City){
 if (City === NYC){
 return 'Ok, sounds good.'
 } else {
 return 'No go.'
 }
  // Write your code here!
}


function switchOnCharmFromTip(Tip) {
  if (Tip === 'generous') {
    return 'Thank you so much.';
  } else if (Tip === 'not as generous') {
    return 'Thank you.';
  } else { 
    return 'Bye.'
  }
}