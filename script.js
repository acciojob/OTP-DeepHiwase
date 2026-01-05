// focus on first input ele when loaded
const firstInput = document.querySelector(".code");
firstInput.focus();

const otpInputs = Array.from(document.querySelectorAll(".code"));
console.log(otpInputs)
for (let otpInput of otpInputs) {
  // console.log(otpInput)

  otpInput.addEventListener("keyup", (e) => {
    if (e.key === "Backspace") {
      // otpInput.textContent = "";
      while (otpInput.previousElementSibling && otpInput.previousElementSibling.textContent === "") {
        const prevElement = otpInput.previousElementSibling;
        prevElement.focus();
        console.log("1");
      }
      return;
    }
    if (e.key >= 0 && e.key <= 9) {
      const nextElement = otpInput.nextElementSibling;
      nextElement.focus();
    } else {

    }
  })

  // otpInput.addEventListener("keyup", (e) => {
  //   // console.log(e)
  // })
}