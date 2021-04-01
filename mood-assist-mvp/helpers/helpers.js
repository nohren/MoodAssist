//IOCE 
//input is one x array of objects either thoughts or actions
//output is one of those objects at random

const randomObj = (things) => {
  //select a random index
  //use the length because if it gets up to 6.99 then it gets rounded to 6.  It can never make it up to the max
  let index = Math.floor(Math.random() * things.length)
  //return obj at random index
  return things[index];
}

module.exports = randomObj;