const angleInputs = document.querySelectorAll(".angle-input")
const isTriangleBtn = document.querySelector("#btn-triangle")
const outputBox = document.querySelector("#output")
console.log(angleInputs)


isTriangleBtn.addEventListener("click" , isTriangle)


function calculateSumOfAngles (angle1,angle2,angle3) {
    const sumOfAngles = angle1 + angle2 + angle3
    return sumOfAngles

}


function isTriangle() {
    const sumOfAngles = calculateSumOfAngles(Number(angleInputs[0].value) , Number(angleInputs[1].value) ,  Number(angleInputs[2].value))

    if(sumOfAngles === 180) {
        outputBox.innerText = "Yay , The angles form a triangle"
    } else{
        outputBox.innerText = "Oops , The angles doesnot form a triangle"
    }
    
}

