import React from "react";

function Board({ board, setBoard, size, handleClick, winner }) {
  return (
    <div
      style={{ gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))` }}
      className={`w-full md:w-2/3 lg:w-1/3 grid gap-1 ${winner && "opacity-30"}`}
    >
      {board.map((row, rowNo) =>
        row.map((cell, colNo) => (
          <div
            onClick={() => handleClick(rowNo, colNo)}
            key={`${rowNo}${colNo}`}
            className={`aspect-square flex items-center justify-center border rounded-md border-zinc-400 text-zinc-400 font-semibold ${
              size > 4 ? (size <= 6 ? "text-3xl" : "text-2xl") : "text-5xl"
            }`}
          >
            {cell}
          </div>
        ))
      )}
    </div>
  );
}

export default Board;
