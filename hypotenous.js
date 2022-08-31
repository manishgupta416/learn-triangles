const baseInput = document.querySelector("#base-value")
const heightInput = document.querySelector("#height-value")
const calculateBtn = document.querySelector(".btn-calculate")
const output = document.querySelector('.output')

calculateBtn.addEventListener("click" , calculateHypotenous)

function calculateHypotenous () {
    // console.log(baseInput.value , heightInput.value)
   if((baseInput.value )&& (heightInput.value)){
    const sumOfSquares =  calculateSumOfSquares(Number(baseInput.value) ,Number(heightInput.value))
    const lengthOfHypotenous = Math.sqrt(sumOfSquares)
    output.innerText = "The length of hypotenous is " + lengthOfHypotenous

   } else{
    output.innerText = "Please input all fields "
   }
 
}

function calculateSumOfSquares (a,b) {
    const sumOfSquares = a*a + b*b
    // console.log(sumOfSquares)
    return sumOfSquares

}