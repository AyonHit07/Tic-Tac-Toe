let boxes = document.querySelectorAll(".box");
let rstBtn = document.querySelector("#rstBtn");
let newBtn = document.querySelector("#newBtn");
let msgCont = document.querySelector(".msg-contaier");
let msg = document.querySelector("#msg");
let turn0 = true;

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turn0) {
      box.innerHTML = "X";
      box.style.color = "red";
      turn0 = false;
    } else {
      box.innerHTML = "O";
      box.style.color = "blue";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const resetGame = () => {
  turn0 = true;
  enableBoxes();
  msgCont.classList.add("hide");
};
const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgCont.classList.remove("hide");
  disableBoxes();
};
const checkWinner = () => {
  for (let pattern of winPattern) {
    // console.log(pattern);
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(
    //      boxes[pattern[0]].innerText,
    //      boxes[pattern[1]].innerText,
    //      boxes[pattern[2]].innerText
    //     );

    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner", pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};

newBtn.addEventListener("click", resetGame);
rstBtn.addEventListener("click", resetGame);
