let nextPlayer = 'X';

document.getElementById('next-lbl').innerText = nextPlayer;
createGameBoard();

function createGameBoard()
{
    const cells = document.querySelectorAll('#gameboard td');

    for (let i = 0; i < cells.length; i++)
    {
        const button = document.createElement('button');
        button.innerText = '[ ]';
        button.addEventListener('click', takeCell);
        cells[i].appendChild(button);
    }
}

// Input: event is a click event from a gameboard button.
function takeCell(event)
{
    const button = event.currentTarget;

    if (button.disabled)
    {
        return;
    }

    button.innerText = '[' + nextPlayer + ']';
    button.disabled = true;

    nextPlayer = nextPlayer === 'X' ? 'O' : 'X';
    document.getElementById('next-lbl').innerText = nextPlayer;

    if (isGameOver())
    {
        document.getElementById('game-over-lbl').innerHTML = '<h1>Game Over</h1>';
    }
}

function isGameOver()
{
    const buttons = document.querySelectorAll('#gameboard button');

    for (let i = 0; i < buttons.length; i++)
    {
        if (!buttons[i].disabled)
        {
            return false;
        }
    }

    return true;
}
