let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset"); 
let new_b = document.querySelector(".newbutton");
let msg_c = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let count = 0;
let turn_O = true;
const win = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=> {
    box.addEventListener("click",() => {
        if (turn_O){
            box.innerText = "O";
            box.classList.add("blue");
            turn_O = false;
        }else{
            box.innerText = "X";
            box.classList.add("red");
            turn_O = true;
        }
        count = count + 1;
        box.disabled = true;
        let ch = check_winner();
        if(count === 9 && !ch){
        msg.innerText = "Draw :) ";
        msg_c.classList.remove("hide");
        disableboxes();
        }
    });
});

const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enable_box = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const show_winner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
    msg_c.classList.remove("hide");
    disableboxes();
};

const check_winner = () =>{
    for(let pattern of win){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                show_winner(pos1val);
                return true;
            }
        }
    }
};

const reset_game = () => {
    count = 0;
    turn_O = true;
    enable_box();
    msg_c.classList.add("hide");
};

new_b.addEventListener("click",reset_game);
reset.addEventListener("click",reset_game);