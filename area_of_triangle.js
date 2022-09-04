const sidesInput = document.querySelectorAll('.side')
const output = document.querySelector(".output")
const calculateBtn = document.querySelector(".btn-calculate")

calculateBtn.addEventListener("click" , calculateArea)

function calculateArea () {
    // console.log(sidesInput[0].value , sidesInput[1].value , sidesInput[2].value)
    if(Number(sidesInput[0].value) >0 &&Number(sidesInput[1].value)>0) {
        const baseAndHeight = calculateBaseAndHeight((sidesInput[0].value) ,(sidesInput[1].value))
        const areaOfTriangle = (baseAndHeight/2)
        output.innerText = "Area of tringle = " + areaOfTriangle + " cm2"

    } else{
        output.innerText = "Please input all fields and (value must be greater than 0) "
    }
}

function calculateBaseAndHeight (base,height) {
    const result =  (base*height)
    return result

}