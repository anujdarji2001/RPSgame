const game =  () => {
    let pScore = 0;
    let cScore = 0;
    let totalcount = 0;

    const startGame = () =>{
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');
        const result = document.querySelector('.result');

        playButton.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            result.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };

    const playmatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');
        hands.forEach((hand) => {
            hand.addEventListener('animationend', function(){
                this.style.animation = "";
            })
        })
        
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach((option)=> {
            option.addEventListener('click', function(){
                totalcount++;
                const computerNumber = Math.floor(Math.random() * 3); 
                const computerChoice = computerOptions[computerNumber];

                setTimeout(()=>{                    
                compareHands(this.textContent, computerChoice)
                gamefinish()

                playerHand.src = `./img/${this.textContent}.png`;
                computerHand.src = `./img/${computerChoice}.png`;
                }, 2000)

                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            })
        })
    }

    const gamefinish = () => {
        const match = document.querySelector('.match');
        const result = document.querySelector('.result');
        const resh1 = document.querySelector('.result h1');
        const resultButton = document.querySelector('.result button');
        const winner = document.querySelector('.winner');

        if(totalcount===5){
            
            match.classList.remove('fadeIn');
            result.classList.add('fadeIn');

            if(pScore>cScore){
                resh1.textContent= 'Player Wins';
                pScore=0;
                cScore=0;
                totalcount=0;
            }
            else if(pScore<cScore) {
                resh1.textContent= 'Computer Wins';
                pScore=0;
                cScore=0;
                totalcount=0;
            }
            else {
                resh1.textContent= 'Tie';
                pScore=0;
                cScore=0;
                totalcount=0;
            }

            resultButton.addEventListener('click', () => {
                result.classList.remove('fadeIn');
                match.classList.add('fadeIn')
                updateScore();
                winner.textContent = 'Choose an option';
            });
        }
    }

    const updateScore = () => {
        const playScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice) => {
        
        const winner = document.querySelector('.winner');

        if(playerChoice === computerChoice){
            winner.textContent = 'It is a tie';
            return;
        }

        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Computer wins';
                cScore++;
                updateScore();
                return;
            }
        }

        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Player wins';
                pScore++;
                updateScore();
                return;
            }
        }

        if(playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Player wins';
                pScore++;
                updateScore();
                return;
            }
        }
    }

    startGame();
    playmatch();
}

game();