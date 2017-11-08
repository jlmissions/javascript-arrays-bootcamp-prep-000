var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
//var "foo" = mnm

function addElementToBeginningOfArray (chocolateBars, mnm){
  return [mnm, ...chocolateBars]
}
function destructivelyAddElementToBeginningOfArray (chocolateBars, mnm){
  chocolateBars.unshift (mnm)
  return chocolateBars
}
