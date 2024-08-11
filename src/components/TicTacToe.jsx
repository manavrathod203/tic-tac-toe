import React, { useState, useEffect } from "react";
import Board from "./Board";
import { checkWinner } from "../utils/TicTacToeUtils";

function TicTacToe() {
  const [size, setSize] = useState(3); // Initial board size
  const [board, setBoard] = useState(
    Array.from({ length: size }, () => Array(size).fill(null))
  );
  const [turnX, setTurnX] = useState(true);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    setBoard(Array.from({ length: size }, () => Array(size).fill(null)));
    setTurnX(true);
    setWinner(null);
  }, [size]);

  useEffect(() => {
    if (board && board.length === size) {
      const winner = checkWinner(board, size);
      setWinner(winner);
    }
  }, [board]);

  const handleSizeChange = (event) => {
    setSize(parseInt(event.target.value, 10));
  };

  const handleStart = () => {
    setBoard(Array.from({ length: size }, () => Array(size).fill(null)));
    setTurnX(true);
    setWinner(null);
  };

  const handleClick = (rowIdx, colIdx) => {
    if (board[rowIdx][colIdx] || winner) return;
    const deepCopyOfBoard = JSON.parse(JSON.stringify(board));
    deepCopyOfBoard[rowIdx][colIdx] = turnX ? "x" : "0";
    setBoard(deepCopyOfBoard);
    setTurnX(!turnX);
  };

  return (
    <div className="w-full px-4 flex flex-col items-center gap-10 ">
      <div className="text-lg flex gap-4">
        <label>Select Board Size: </label>
        <select
          id="board-size"
          value={size}
          onChange={handleSizeChange}
          className="text-black pr-5 border border-gray-300 rounded-md"
        >
          {[3, 4, 5, 6, 7, 8].map((sizeOption) => (
            <option key={sizeOption} value={sizeOption}>
              {sizeOption} x {sizeOption}
            </option>
          ))}
        </select>
        
      </div>
      <div className="text-2xl font-semibold">
        {winner
          ? `Winner is ${winner}`
          : turnX
          ? "Player X turn"
          : "Player 0 turn"}
      </div>
      <Board winner={winner} handleClick={handleClick} board={board} size={size} />
      <button onClick={handleStart} className="bg-red-600 px-3 py-1 rounded-md font-semibold text-xl border-2 border-red-900">
        Reset
      </button>
    </div>
  );
}

export default TicTacToe;
