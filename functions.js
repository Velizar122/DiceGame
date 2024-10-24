var countPress1=0;

var countPress2=0;

var randomValue2=0;

var randomValue1=0

function rerollDice1() {
    const image1 = document.querySelector("#img-1");
    const btn1 = document.querySelector("#btn1");


    randomValue1 = Math.floor(Math.random() * 6) + 1;

    image1.classList.add("btn-pressed");
    image1.style.transform = 'rotate(360deg) scale(0)';

    setTimeout(() => {
        image1.setAttribute("src", `dice${randomValue1}.png`);
        
        image1.style.transform = 'rotate(0deg) scale(1)';
    }, 500);

    countPress1++;
    btn1.classList.add("active"); 
    chooseWinner();
}

function rerollDice2() {
    const image2 = document.querySelector("#img-2");
    const btn2 = document.querySelector("#btn2");


    randomValue2 = Math.floor(Math.random() * 6) + 1;

    image2.classList.add("btn-pressed");
    image2.style.transform = 'rotate(360deg) scale(0)';

    setTimeout(() => {
        image2.setAttribute("src", `dice${randomValue2}.png`);
        
        image2.style.transform = 'rotate(0deg) scale(1)';
    }, 500);

    countPress2++;
    btn2.classList.add("active"); 
    chooseWinner();
}


function chooseWinner(){
    setTimeout(() => {
        if (countPress1 === 1 && countPress2 === 1) {
            var winner = document.querySelector("#winner");
            if (randomValue1 > randomValue2) {
                winner.textContent="Winner is player 1!"
            } 
            else if (randomValue1 < randomValue2) {
                winner.textContent="Winner is player 2!"
            } 
            else {
                winner.textContent="Draw!"
            }
            winner.classList.add('winner-class');

            btn2.classList.remove("active");
            btn1.classList.remove("active");
            countPress2=0;
            countPress1=0;
        }
    }, 500);

}   
