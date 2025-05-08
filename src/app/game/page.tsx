'use client';

import { useEffect, useState, useCallback } from 'react';
import PageLayout from '../../components/PageLayout';

type Position = {
  x: number;
  y: number;
};

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

const GRID_SIZE = 20; // Fixed grid size
const DESKTOP_CELL_SIZE = 30; // Size of each cell in pixels on desktop
const HIGH_SCORE = 61; // Raad's high score

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
  const [beatRaadScore, setBeatRaadScore] = useState(false);
  const [cellSize, setCellSize] = useState(DESKTOP_CELL_SIZE);
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);

  // Calculate cell size based on screen width
  useEffect(() => {
    const updateCellSize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) { // mobile
        const maxWidth = screenWidth - 32; // 16px padding on each side
        const calculatedSize = Math.floor(maxWidth / GRID_SIZE);
        setCellSize(calculatedSize);
      } else {
        setCellSize(DESKTOP_CELL_SIZE);
      }
    };

    updateCellSize();
    window.addEventListener('resize', updateCellSize);
    return () => window.removeEventListener('resize', updateCellSize);
  }, []);

  // Load local high score from localStorage on component mount
  useEffect(() => {
    const savedHighScore = localStorage.getItem('snakeHighScore');
    if (savedHighScore) {
      setLocalHighScore(parseInt(savedHighScore));
    }
  }, []);

  // Update local high score when game ends
  useEffect(() => {
    if (gameOver) {
      if (score > localHighScore) {
        setLocalHighScore(score);
        localStorage.setItem('snakeHighScore', score.toString());
      }
      if (score > HIGH_SCORE) {
        setBeatRaadScore(true);
      }
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
    setBeatRaadScore(false);
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
      const ateFood = head.x === food.x && head.y === food.y;
      if (ateFood) {
        setFood(generateFood());
        // Move score update outside of setSnake to prevent double updates
        setTimeout(() => setScore(prev => prev + 1), 0);
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, gameOver, gameStarted, generateFood]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!gameStarted || gameOver) {
        resetGame();
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
  }, [direction, gameStarted, gameOver]);

  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const gameLoop = setInterval(moveSnake, 150);
    return () => clearInterval(gameLoop);
  }, [moveSnake, gameStarted, gameOver]);

  useEffect(() => {
    // Prevent scrolling on the game page
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Handle touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!gameStarted) {
      resetGame();
      return;
    }
    setTouchStart({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart || !gameStarted) return;

    const touchEnd = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    };

    const dx = touchEnd.x - touchStart.x;
    const dy = touchEnd.y - touchStart.y;

    // Require minimum swipe distance
    if (Math.abs(dx) < 30 && Math.abs(dy) < 30) return;

    // Determine swipe direction
    if (Math.abs(dx) > Math.abs(dy)) {
      // Horizontal swipe
      if (dx > 0 && direction !== 'LEFT') {
        setDirection('RIGHT');
      } else if (dx < 0 && direction !== 'RIGHT') {
        setDirection('LEFT');
      }
    } else {
      // Vertical swipe
      if (dy > 0 && direction !== 'UP') {
        setDirection('DOWN');
      } else if (dy < 0 && direction !== 'DOWN') {
        setDirection('UP');
      }
    }

    setTouchStart(null);
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
  };

  return (
    <PageLayout filePath="src/app/game/page.tsx">
      <div 
        className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] w-full overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={() => !gameStarted && typeof window !== 'undefined' && window.innerWidth < 768 && resetGame()}
      >
        <div className="relative flex flex-col items-center justify-center w-full h-full">
          {/* High Scores Display */}
          <div className="flex gap-4 md:gap-8 text-[#cccccc] text-lg md:text-xl">
            <div className="bg-[#252526] px-4 md:px-6 py-2 md:py-3 rounded shadow-lg">
              your high score: {localHighScore}
            </div>
            <div className="bg-[#252526] px-4 md:px-6 py-2 md:py-3 rounded shadow-lg">
              raad's high score: {HIGH_SCORE}
            </div>
          </div>

          {/* Game Board with Score Displays */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 my-2">
            {/* Score Display - Hidden on mobile, shown on desktop */}
            <div className="hidden md:block text-[#cccccc] text-8xl font-bold bg-[#252526] px-8 py-4 rounded-lg shadow-lg min-w-[120px] text-center">
              {score}
            </div>

            {/* Game Board */}
            <div 
              className="relative bg-black border-4 border-[#3e3e42] rounded-lg shadow-lg cursor-pointer"
              style={{
                width: GRID_SIZE * cellSize,
                height: GRID_SIZE * cellSize,
                maxWidth: 'calc(100vw - 32px)',
                maxHeight: 'calc(100vh - 160px)'
              }}
              onClick={() => !gameStarted && resetGame()}
            >
              {/* Grid Background */}
              <div className="absolute inset-0 grid grid-cols-20 grid-rows-20">
                {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => (
                  <div
                    key={i}
                    className="border border-[#1e1e1e]/30"
                    style={{
                      width: cellSize,
                      height: cellSize
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
                    width: cellSize - 2,
                    height: cellSize - 2,
                    left: `${segment.x * cellSize + 1}px`,
                    top: `${segment.y * cellSize + 1}px`,
                  }}
                />
              ))}
              
              {/* Food */}
              <div
                className="absolute bg-[#E06C75] rounded-full shadow-lg"
                style={{
                  width: cellSize - 2,
                  height: cellSize - 2,
                  left: `${food.x * cellSize + 1}px`,
                  top: `${food.y * cellSize + 1}px`,
                }}
              />

              {/* Start Screen */}
              {!gameStarted && !gameOver && (
                <div className="absolute inset-0 bg-[#1e1e1e]/90 flex flex-col items-center justify-center">
                  <h2 className="text-2xl font-semibold text-[#C678DD] mb-4">Snake Game</h2>
                  <p className="text-[#cccccc] mb-4">
                    {typeof window !== 'undefined' && window.innerWidth < 768 ? (
                      'tap to start'
                    ) : (
                      'press any key to start'
                    )}
                  </p>
                  <p className="text-[#cccccc] text-sm">
                    {typeof window !== 'undefined' && window.innerWidth < 768 ? (
                      'swipe to control the snake'
                    ) : (
                      'use arrow keys to control the snake'
                    )}
                  </p>
                </div>
              )}

              {/* Game Over Overlay */}
              {gameOver && (
                <div 
                  className="absolute inset-0 bg-[#1e1e1e]/90 flex flex-col items-center justify-center cursor-pointer"
                  onClick={resetGame}
                >
                  <h2 className="text-2xl font-semibold text-[#E06C75] mb-4">fin</h2>
                  <p className="text-[#cccccc] mb-4">score: {score}</p>
                  {score > localHighScore && (
                    <p className="text-[#98C379] mb-4">personal highscore</p>
                  )}
                  {score > HIGH_SCORE && (
                    <div className="text-center mb-4">
                      <p className="text-[#C678DD] text-lg mb-2">congrats...</p>
                      <p className="text-[#cccccc] mb-1">you've beaten my record</p>
                      <p className="text-[#cccccc] text-sm">send me a screenshot for proof.. there's no mongo on this server lol</p>
                    </div>
                  )}
                  <p className="text-[#cccccc] text-sm">
                    {typeof window !== 'undefined' && window.innerWidth < 768 ? (
                      'tap to play again'
                    ) : (
                      'press any key to play again'
                    )}
                  </p>
                </div>
              )}
            </div>

            {/* Score Display - Hidden on mobile, shown on desktop */}
            <div className="hidden md:block text-[#cccccc] text-8xl font-bold bg-[#252526] px-8 py-4 rounded-lg shadow-lg min-w-[120px] text-center">
              {score}
            </div>

            {/* Mobile Score Display - Shown only on mobile */}
            <div className="md:hidden text-[#cccccc] text-5xl font-bold bg-[#252526] px-6 py-3 rounded-lg shadow-lg min-w-[100px] text-center">
              {score}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 