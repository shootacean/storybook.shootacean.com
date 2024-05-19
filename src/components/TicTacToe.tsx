import { useState } from 'react';

function Square({value, onSquareClick}: {value: string | null, onSquareClick: () => void}) {
  return (
    <button 
      className="border float-left text-2xl font-[bold] leading-[34px] h-[34px] text-center w-[34px] -mr-px -mt-px p-0 border-solid border-[#999]"
      onClick={onSquareClick}
    >{value}</button>
  );
}

function Board({xIsNext, squares, onPlay}: {xIsNext: boolean, squares: Array<string | null>, onPlay: (squares: Array<string | null>) => void}) {
    // const [squares, setSquares] = useState(Array(9).fill(null));

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = `Winner: ${winner}`;
    } else {
        status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }

    function handleClick(i: number) {
        if (squares[i] || calculateWinner(squares)) return;
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        onPlay(nextSquares);
    }
    return (
        <>
        <div className='mb-[10px]'>{status}</div>
            <div className="clear-both content-[''] table">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
                <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
                <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
            </div>
            <div className="clear-both content-[''] table">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
                <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
                <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
            </div>
            <div className="clear-both content-[''] table">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
                <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
                <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
            </div>
        </>
    )
}

function Game() {
    const [history, sethistory] = useState<Array<Array<string | null>>>([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState<number>(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares: Array<string | null>) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        sethistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove: number) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description: string;
        if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }
        return (
            <li key={move}>
                <button className='border hover:font-bold' onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    return (
        <div className='flex flex-row'>
            <div className='game-board'>
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className='game-info ml-[20px]'>
                <ol>{moves}</ol>
            </div>
        </div>
    );
}

function calculateWinner(squares: Array<string | null>) {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export const TicTacToe = () => {
  return (
    <>
      <h1 className='text-3xl mb-4'>Tic Tac Toe</h1>
      <Game />
    </>
  );
};
