const canvas = document.getElementById("paint_area");
// canvas.width = 500;
// canvas.height = 500;
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight
const ctx = canvas.getContext("2d");
const brush = document.getElementsByClassName("brush")
ctx.lineWidth = brush[0].innerHTML;
ctx.strokeStyle = "#000"


// range
const range = document.querySelector(".ranges input")
range.addEventListener("click", function (){
    ctx.lineWidth = this.value;
    brush[0].innerHTML = this.value
    
})

//paint

let painting = false;

function onMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y)
    } else {
        ctx.lineTo(x,y)
        ctx.stroke()
    }
}

function doPaint(event) {
    painting = true;
}

function noPaint(event) {
    painting = false;
}

if (canvas) {
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mousedown", doPaint);
    canvas.addEventListener("mouseup", noPaint);
    canvas.addEventListener("mouseleave", noPaint);
}

//color

const color = document.querySelectorAll(".color");
const colorInput = document.querySelector(".color input");


function getColor(event) {
    console.log(event.target)
    if (event.target == colorInput) {
    ctx.strokeStyle = colorInput.value
    } else {
    ctx.strokeStyle = event.target.style.backgroundColor
    }
    
}
color.forEach(function (colorBtn) {
    colorBtn.addEventListener("click", getColor)

})

colorInput.addEventListener("change", getColor)


// save
const save = document.querySelector(".do_save");

save.addEventListener("click", function () {
    save.href = canvas.toDataURL();
})

//reset
const reset = document.querySelector(".reset");

reset.addEventListener("click", function () {
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
})

//fill
const paint = document.querySelector(".bg_color input");
paint.addEventListener("change", function () {
    ctx.fillStyle = paint.value;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
})

// /ctx.fillRect