function humanInput(){
    let hInput=prompt("Choose Rock, Paper, Scissors: ");
    return hInput;
}

function randIntGenerator(){
    let randInt=Math.floor(Math.random()*10);
    return randInt;
}

function computerInput(){
    let cInput = "";
    let randInt = randIntGenerator();
    if (randInt==0) return computerInput();
    else if (randInt==1 || randInt==2 || randInt==3) {cInput="Rock"; return cInput;}
    else if (randInt==4 || randInt==5 || randInt==6) {cInput="Paper"; return cInput;}
    else if (randInt==7 || randInt==8 || randInt==9) {cInput="Scissors"; return cInput;}
}

function winnerCheck(){
    let hInput = humanInput();
    let cInput = computerInput();
    if (hInput=="Rock"){
        if (cInput=="Paper") return "Computer wins";
        else if (cInput=="Scissors") return "Human wins";
        else if (cInput=="Rock") return "Draw";
    }

    else if (hInput=="Paper"){
        if (cInput=="Paper") return "Draw";
        else if (cInput=="Scissors") return "Computer wins";
        else if (cInput=="Rock") return "Human wins";
    }

    else if (hInput=="Scissors"){
        if (cInput=="Paper") return "Human wins";
        else if (cInput=="Scissors") return "Draw";
        else if (cInput=="Rock") return "Computer wins";
    }
}

//main

console.log(winnerCheck());