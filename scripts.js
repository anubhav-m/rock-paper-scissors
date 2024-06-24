const buttonContainer = document.querySelector(".button-container");

buttonContainer.addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON") return; // Ensure a button was clicked
    function humanInput(){
        return e.target.textContent;
    }

    function randIntGenerator(){
        return Math.floor(Math.random()*10);
    }

    function computerInput(){
        let randInt=randIntGenerator();
        if (randInt==0) return computerInput();
        else if (randInt==1 || randInt == 2 || randInt == 3) return "Rock";
        else if (randInt==4 || randInt == 5 || randInt == 6) return "Paper";
        else if (randInt==7 || randInt == 8 || randInt == 9) return "Scissors"; 
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
    
    const result = document.querySelector("p");
    result.textContent = "";

    result.textContent = winnerCheck();


    let realHScore = document.querySelector(".human span");
    let realCScore = document.querySelector(".computer span");

    let tempHScore=Number(realHScore.textContent);
    let tempCScore=Number(realCScore.textContent);
    if (result.textContent === "Human wins") tempHScore++;
    else if (result.textContent === "Computer wins") tempCScore++;

    realHScore.textContent=tempHScore;
    realCScore.textContent=tempCScore;
})