'use client';

import { useEffect, useState, useCallback } from 'react';
import PageLayout from '../../components/PageLayout';

type Position = {
  x: number;
  y: number;
};

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

const GRID_SIZE = 20; // Fixed grid size
const CELL_SIZE = 30; // Size of each cell in pixels
const HIGH_SCORE = 122; // Raad's high score

export default function GamePage() {
  // Initialize snake with 4 segments in the center
  const [snake, setSnake] = useState<Position[]>([
    { x: 10, y: 10 },
    { x: 9, y: 10 },
    { x: 8, y: 10 },
    { x: 7, y: 10 }
  ]);
  const [food, setFood] = useState<Position>({ x: 5, y: 5 });
  const [direction, setDirection] = useState<Direction>('RIGHT');
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [localHighScore, setLocalHighScore] = useState(0);

  // Load local high score from localStorage on component mount
  useEffect(() => {
    const savedHighScore = localStorage.getItem('snakeHighScore');
    if (savedHighScore) {
      setLocalHighScore(parseInt(savedHighScore));
    }
  }, []);

  // Update local high score when game ends
  useEffect(() => {
    if (gameOver && score > localHighScore) {
      setLocalHighScore(score);
      localStorage.setItem('snakeHighScore', score.toString());
    }
  }, [gameOver, score, localHighScore]);

  const generateFood = useCallback(() => {
    return {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE)
    };
  }, []);

  const resetGame = () => {
    setSnake([
      { x: 10, y: 10 },
      { x: 9, y: 10 },
      { x: 8, y: 10 },
      { x: 7, y: 10 }
    ]);
    setFood(generateFood());
    setDirection('RIGHT');
    setGameOver(false);
    setScore(0);
    setGameStarted(true);
  };

  const moveSnake = useCallback(() => {
    if (gameOver || !gameStarted) return;

    setSnake(prevSnake => {
      const newSnake = [...prevSnake];
      const head = { ...newSnake[0] };

      switch (direction) {
        case 'UP':
          head.y -= 1;
          break;
        case 'DOWN':
          head.y += 1;
          break;
        case 'LEFT':
          head.x -= 1;
          break;
        case 'RIGHT':
          head.x += 1;
          break;
      }

      // Check collision with walls
      if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
        setGameOver(true);
        return prevSnake;
      }

      // Check collision with self
      if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
        setGameOver(true);
        return prevSnake;
      }

      newSnake.unshift(head);

      // Check if food is eaten
      if (head.x === food.x && head.y === food.y) {
        setFood(generateFood());
        setScore(prev => prev + 1);
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, gameOver, gameStarted, generateFood]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!gameStarted) {
        if (e.code === 'Space') {
          resetGame();
        }
        return;
      }

      switch (e.code) {
        case 'ArrowUp':
          if (direction !== 'DOWN') setDirection('UP');
          break;
        case 'ArrowDown':
          if (direction !== 'UP') setDirection('DOWN');
          break;
        case 'ArrowLeft':
          if (direction !== 'RIGHT') setDirection('LEFT');
          break;
        case 'ArrowRight':
          if (direction !== 'LEFT') setDirection('RIGHT');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [direction, gameStarted]);

  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const gameLoop = setInterval(moveSnake, 150);
    return () => clearInterval(gameLoop);
  }, [moveSnake, gameStarted, gameOver]);

  return (
    <PageLayout filePath="src/app/game/page.tsx">
      <div className="flex flex-col items-center justify-center h-full w-full overflow-hidden">
        <div className="relative flex flex-col items-center gap-4">
          {/* Score Display */}
          <div className="flex gap-8 text-[#cccccc] text-xl">
            <div className="bg-[#252526] px-6 py-3 rounded shadow-lg">
              Current Score: {score}
            </div>
            <div className="bg-[#252526] px-6 py-3 rounded shadow-lg">
              Your High Score: {localHighScore}
            </div>
            <div className="bg-[#252526] px-6 py-3 rounded shadow-lg">
              Raad's High Score: {HIGH_SCORE}
            </div>
          </div>

          {/* Game Board */}
          <div 
            className="relative bg-black border-4 border-[#3e3e42] rounded-lg shadow-lg"
            style={{
              width: GRID_SIZE * CELL_SIZE,
              height: GRID_SIZE * CELL_SIZE
            }}
          >
            {/* Grid Background */}
            <div className="absolute inset-0 grid grid-cols-20 grid-rows-20">
              {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => (
                <div
                  key={i}
                  className="border border-[#1e1e1e]/30"
                  style={{
                    width: CELL_SIZE,
                    height: CELL_SIZE
                  }}
                />
              ))}
            </div>
            
            {/* Snake */}
            {snake.map((segment, index) => (
              <div
                key={index}
                className="absolute bg-[#264f78] rounded-md shadow-md"
                style={{
                  width: CELL_SIZE - 2,
                  height: CELL_SIZE - 2,
                  left: `${segment.x * CELL_SIZE + 1}px`,
                  top: `${segment.y * CELL_SIZE + 1}px`,
                }}
              />
            ))}
            
            {/* Food */}
            <div
              className="absolute bg-[#E06C75] rounded-full shadow-lg"
              style={{
                width: CELL_SIZE - 2,
                height: CELL_SIZE - 2,
                left: `${food.x * CELL_SIZE + 1}px`,
                top: `${food.y * CELL_SIZE + 1}px`,
              }}
            />
          </div>

          {/* Game Over Overlay */}
          {gameOver && (
            <div className="absolute inset-0 bg-[#1e1e1e]/90 flex flex-col items-center justify-center">
              <h2 className="text-2xl font-semibold text-[#E06C75] mb-4">Game Over!</h2>
              <p className="text-[#cccccc] mb-4">Score: {score}</p>
              {score > localHighScore && (
                <p className="text-[#98C379] mb-4">New High Score! 🎉</p>
              )}
              <button
                onClick={resetGame}
                className="bg-[#264f78] text-[#cccccc] px-6 py-2 rounded hover:bg-[#365373] transition-colors"
              >
                Play Again
              </button>
            </div>
          )}

          {/* Start Screen */}
          {!gameStarted && !gameOver && (
            <div className="absolute inset-0 bg-[#1e1e1e]/90 flex flex-col items-center justify-center">
              <h2 className="text-2xl font-semibold text-[#C678DD] mb-4">Snake Game</h2>
              <p className="text-[#cccccc] mb-4">Press Space to Start</p>
              <p className="text-[#cccccc] text-sm">Use arrow keys to control the snake</p>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
} 