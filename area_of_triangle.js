const sidesInput = document.querySelectorAll('.side')
const output = document.querySelector(".output")
const calculateBtn = document.querySelector(".btn-calculate")

calculateBtn.addEventListener("click" , calculateArea)

function calculateArea () {
    // console.log(sidesInput[0].value , sidesInput[1].value , sidesInput[2].value)
    if((sidesInput[0].value) &&(sidesInput[1].value)) {
        const baseAndHeight = calculateBaseAndHeight(Number(sidesInput[0].value) ,Number(sidesInput[1].value))
        const areaOfTriangle = (baseAndHeight/2)
        output.innerText = "Area of tringle = " + areaOfTriangle + " cm2"

    } else{
        output.innerText = "Please input all fields "
    }
}

function calculateBaseAndHeight (base,height) {
    const result =  (base*height)
    return result

}