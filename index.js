function scuberGreetingForFeet(value){
if (value <= 400){
  return "This one is on me!"
}else if (value <= 2000){
  return "That will be twenty bucks."
}if (value <= 2500){
  return "I will gladly take your thirty bucks."
}if (value > 2500){
  return "No can do."
}
}scuberGreetingForFeet()

function ternaryCheckCity(city){
  return city === `NYC`? `Ok, sounds good.`: `No go.`
}

function switchOnCharmFromTip(trip){
  switch (trip){
    case `generous`:
      return `Thank you so much.`
    case `not as generous`:
      return `Thank you.`
    default:
      return `Bye.`
  }
}