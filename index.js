let randomNumber ;
let inputNumber = [];
let maxAttempt;
let buttonSound = new Audio("./gamesound.mp3");

const init = () => {
    randomNumber = Math.floor(Math.random() * 100);
    document.getElementById("playField").style.display="none";
    document.getElementById("newGameButton").style.display="none";
}

const gameBegin = () => {
    document.getElementById("MainPage").style.display="none";
    document.getElementById("playField").style.display="block";
}

const gameOver = () => {
    document.getElementById("newGameButton").style.display="block";
    document.getElementById("inputBox").setAttribute("disabled", true);
}

const gameRestart = () =>{
    buttonSound.play();
    window.location.reload();
}

const compareGuess = () => {
    buttonSound.play();
    const enteredNumber = Number(document.getElementById("inputBox").value);
    
    if(enteredNumber > 100 || enteredNumber < 1){
        document.getElementById("showError").innerHTML = "Invalid guess!!, Try Again";
        document.getElementById("inputBox").value = ""; 
    }
    else{
        document.getElementById("showError").innerHTML = "";
        inputNumber = [...inputNumber, enteredNumber];
        document.getElementById("guesses").innerHTML = inputNumber ;

        // checking low or high
        if(inputNumber.length < maxAttempt)
        {
            if(enteredNumber > randomNumber){
                document.getElementById("lowHighText").innerHTML = "Your Guess is High😮";
                document.getElementById("inputBox").value = "";
            }
            else if(enteredNumber < randomNumber){
                document.getElementById("lowHighText").innerHTML = "Your Guess is Low😢";
                document.getElementById("inputBox").value = "";
            }
            else{
                document.getElementById("lowHighText").innerHTML = "Wohoo!! You Did It!!🤩🤩";
                document.getElementById("inputBox").value = "";
                gameOver();
            }
       }
       else
       {
            if(enteredNumber > randomNumber){
                document.getElementById("lowHighText").innerHTML = `You Loose!!😢 Number was ${randomNumber}`;
                document.getElementById("inputBox").value = "";
                gameOver();
            }
            else if(enteredNumber < randomNumber){
                document.getElementById("lowHighText").innerHTML = `You Loose!!😢 Number was ${randomNumber}`;
                document.getElementById("inputBox").value = "";
                gameOver();
            }
            else if(enteredNumber == randomNumber){
                document.getElementById("lowHighText").innerHTML = "Wohoo!! You Did It!!🤩🤩";
                document.getElementById("inputBox").value = "";
                gameOver();
            }
        }
        document.getElementById("attempts").innerHTML = inputNumber.length;
    }
}


const begLevel = () => {
    buttonSound.play();
    maxAttempt = 10;
    gameBegin();
}

const proLevel = () => {
    buttonSound.play();
    maxAttempt = 5;
    gameBegin();
}

const expertLevel = () => {
    buttonSound.play();
    maxAttempt = 3;
    gameBegin();
}

