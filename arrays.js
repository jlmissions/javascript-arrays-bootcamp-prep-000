var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
//var "foo" = mnm

function addElementToBeginningOfArray (chocolateBars, mnm){
  return [mnm, ...chocolateBars]
}
function destructivelyAddElementToBeginningOfArray (chocolateBars, mnm){
  chocolateBars.unshift (mnm)
  return chocolateBars
}
function addElementToEndOfArray (chocolateBars, mnm){
  return [...chocolateBars, mnm]
}
function destructivelyAddElementToEndOfArray (chocolateBars, mnm){
  chocolateBars.push (mnm)
  return chocolateBars
}
