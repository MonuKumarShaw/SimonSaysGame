let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let score =0;
let btns = ["yellow", "red", "green", "purple"];
let h3 = document.querySelector("h3");
let BTN = document.querySelector('#start');
BTN.addEventListener("click", function () {
    if (!started) {
        console.log("Game has started");
        started = true;
        levelUp();
    }
});

function flashbtn(btn) {
    btn.classList.add("gameflash");
    setTimeout(() => {
        btn.classList.remove("gameflash");
    }, 250);
}

function flashuser(btn) {
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let randidx = Math.floor(Math.random() * 4);
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);

    gameSeq.push(randcolor);
    console.log(gameSeq);
    flashbtn(randbtn);
}

function check(idx) {
    if (gameSeq[idx] === userSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        score = level;
        resetGame();
    }
}

function resetGame() {
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
    h3.innerText = `Oops! Game Over.Your score is ${score} Press start button to start again!`;
    score =0;
}

function btnpress(event) {
    let clickedBtn = event.target; 
    flashuser(clickedBtn);
    let userColor = clickedBtn.getAttribute("id");
    userSeq.push(userColor);
    check(userSeq.length - 1);
}

let Btns = document.querySelectorAll(".btn");
for (let Btn of Btns) {
    Btn.addEventListener("click", btnpress);
}
