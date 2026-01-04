//your JS code here. If required.
// focus on first input ele when loaded
const firstInput = document.querySelector(".code");
firstInput.focus();

const otpInputs = Array.from(document.querySelectorAll(".otp"));
console.log(otpInputs)
for (let otpInput of otpInputs) {
  // console.log(otpInput)

  otpInput.addEventListener("keyup", (e) => {
    if (e.key === "Backspace") {
      const prevElement = otpInput.previousElementSibling;
      prevElement.focus();
      return;
    }
    const nextElement = otpInput.nextElementSibling;
    nextElement.focus();
  })

  // otpInput.addEventListener("keyup", (e) => {
  //   // console.log(e)
  // })
}