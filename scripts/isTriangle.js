const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#output-btn");
const outputMsg = document.querySelector("#output-value");

function sumOfAngles(angle1, angle2, angle3) {
  const sum = angle1 + angle2 + angle3;
  return sum;
}

function isTriangle() {
  const sum = sumOfAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );
  if (sum === 180) {
    console.log("Yay, the angles form a triangle!");
    outputMsg.innerText = "Yay, the angles form a triangle!";
  } else {
    console.log("Oh Oh! The angle doesn't form a triangle");
    outputMsg.innerText = "Oh Oh! The angle doesn't form a triangle";
  }
}

isTriangleBtn.addEventListener("click", isTriangle);
