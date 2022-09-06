const baseInput = document.querySelector("#base-value")
const heightInput = document.querySelector("#height-value")
const calculateBtn = document.querySelector(".btn-calculate")
const output = document.querySelector('.output')

calculateBtn.addEventListener("click" , calculateHypotenous)

function calculateHypotenous () {
    // console.log(baseInput.value , heightInput.value)
   if(Number(baseInput.value) > 0 && Number(heightInput.value) > 0){
    const sumOfSquares =  calculateSumOfSquares((baseInput.value) ,(heightInput.value))
    const lengthOfHypotenous = Math.sqrt(sumOfSquares).toFixed(2)
    output.innerText = "The length of hypotenous is " + lengthOfHypotenous + "cm"

   } else{
    output.innerText = "Please input all fields and (value should be greater than 0)"
   }
 
}

function calculateSumOfSquares (a,b) {
    const sumOfSquares = a*a + b*b
    // console.log(sumOfSquares)
    return sumOfSquares

}