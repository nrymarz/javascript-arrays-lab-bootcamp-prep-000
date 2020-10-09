var kittens = [] //define your array here

// Add your functions and code here
var kittens = ["Milo, Otis, Garfield"]
function destructivelyAppendKitten(element){
  kittens.push(element);
}
function destructivelyPrependKitten(kitten){
  kittens.unshift(kitten);
}
function destructivelyRemoveLastKitten(){
  kittens.pop();
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
}
function appendKitten(kitten){
  newKittens = [...kittens,kitten];
  return newKittens
}
function prependKitten(kitten){
  newKittens = [kitten,...kittens]
}