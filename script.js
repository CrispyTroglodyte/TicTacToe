
const cells = document.querySelectorAll( '[data-cell]' );
const restartButton = document.getElementById( 'restart-btn' );
const scoreX = document.getElementById( 'score-x' );
const scoreO = document.getElementById( 'score-o' );
const scoreDraws = document.getElementById( 'score-draws' );
const themeButton = document.getElementById( 'theme-btn' );

let currentPlayer = 'X';

const winningCombinations = [

    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]

];

const checkWinner = () => {

    for( const combination of winningCombinations ){

        const [a, b, c] = combination;

        if( cells[ a ].textContent && cells[ a ].textContent === cells[ b ].textContent && cells[ a ].textContent === cells[ c ].textContent ){

            alert(`${currentPlayer} wins!`);
            updateScore( currentPlayer );
            resetGame();

            return;

        }

    }

    if( [...cells].every( cell => cell.textContent ) ){

        alert("It's a draw!");
        updateScore( 'draw' );
        resetGame();

    }

};

const handleClick = ( e ) => {

    const cell = e.target;
    if( cell.textContent ) return;
    cell.textContent = currentPlayer;
    cell.classList.add( 'clicked' );
    checkWinner();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

};

const resetGame = () => {

    cells.forEach( cell => {

        cell.textContent = '';
        cell.classList.remove( 'clicked' );

    });

    currentPlayer = 'X';

};

const updateScore = ( result ) => {
    
    if( result === 'X' ){

        scoreX.textContent = parseInt( scoreX.textContent ) + 1;

    } else if( result === 'O' ){

        scoreO.textContent = parseInt( scoreO.textContent ) + 1;

    } else if( result === 'draw' ){

        scoreDraws.textContent = parseInt( scoreDraws.textContent ) + 1;

    }

};

restartButton.addEventListener( 'click', resetGame );

themeButton.addEventListener( 'click', () => {

    document.body.classList.toggle( 'dark-theme' );

});

cells.forEach( cell => cell.addEventListener( 'click', handleClick ) );