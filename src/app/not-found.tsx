'use client';

import PageLayout from '../components/PageLayout';
import { useEffect, useState } from 'react';

const WORDS = [
  { word: 'typescript', hint: 'A typed superset of JavaScript' },
  { word: 'react', hint: 'A popular JavaScript library for building UIs' },
  { word: 'nextjs', hint: 'A React framework for production' },
  { word: 'actuary', hint: 'A profession dealing with risk and uncertainty' },
  { word: 'coding', hint: 'What developers do every day' },
  { word: 'website', hint: 'A collection of web pages' },
  { word: 'hangman', hint: 'The game you are playing now' },
  { word: 'project', hint: 'A planned piece of work' },
  { word: 'github', hint: 'A platform for hosting code repositories' },
  { word: 'python', hint: 'A popular programming language with a snake logo' },
  { word: 'node', hint: 'JavaScript runtime built on Chrome V8' },
  { word: 'office', hint: 'Microsoft suite for productivity' },
  { word: 'sql', hint: 'Language for managing databases' },
  { word: 'chess', hint: 'A classic board game of strategy' },
  { word: 'basketball', hint: 'A sport played with a hoop and ball' },
  { word: 'reading', hint: 'A hobby involving books' },
  { word: 'planner', hint: 'A tool or app for organizing events/tasks' },
  { word: 'portfolio', hint: 'A collection of your work' },
  { word: 'stripe', hint: 'A payment processing platform' },
  { word: 'express', hint: 'A minimal Node.js web framework' },
  { word: 'vscode', hint: 'A popular code editor by Microsoft' },
  { word: 'tailwind', hint: 'A utility-first CSS framework' },
  { word: 'linux', hint: 'An open-source operating system' },
  { word: 'docker', hint: 'A platform for containerizing applications' },
  { word: 'cloud', hint: 'Internet-based computing resources' }
];

const HANGMAN_ART = [
  `  ____  \n  |  |  \n  |     \n  |     \n  |     \n  |     \n__|_____`,
  `  ____  \n  |  |  \n  |  O  \n  |     \n  |     \n  |     \n__|_____`,
  `  ____  \n  |  |  \n  |  O  \n  |  |  \n  |     \n  |     \n__|_____`,
  `  ____  \n  |  |  \n  |  O  \n  | /|  \n  |     \n  |     \n__|_____`,
  `  ____  \n  |  |  \n  |  O  \n  | /|\\ \n  |     \n  |     \n__|_____`,
  `  ____  \n  |  |  \n  |  O  \n  | /|\\ \n  | /   \n  |     \n__|_____`,
  `  ____  \n  |  |  \n  |  O  \n  | /|\\ \n  | / \\ \n  |     \n__|_____`
];

function getRandomWord() {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}

function HangmanGame() {
  const [entry, setEntry] = useState(getRandomWord());
  const [guessed, setGuessed] = useState<string[]>([]);
  const [wrong, setWrong] = useState<string[]>([]);
  const [status, setStatus] = useState<'playing' | 'won' | 'lost'>('playing');
  const maxWrong = 6;
  const word = entry.word.toUpperCase();
  const hint = entry.hint;

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (status !== 'playing') return;
      const letter = e.key.toUpperCase();
      if (/^[A-Z]$/.test(letter)) {
        guessLetter(letter);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
    // eslint-disable-next-line
  }, [status, guessed, wrong]);

  function guessLetter(letter: string) {
    if (guessed.includes(letter) || wrong.includes(letter)) return;
    if (word.includes(letter)) {
      const newGuessed = [...guessed, letter];
      setGuessed(newGuessed);
      if (word.split('').every(l => newGuessed.includes(l))) {
        setStatus('won');
      }
    } else {
      const newWrong = [...wrong, letter];
      setWrong(newWrong);
      if (newWrong.length >= maxWrong) {
        setStatus('lost');
      }
    }
  }

  function restart() {
    const newEntry = getRandomWord();
    setEntry(newEntry);
    setGuessed([]);
    setWrong([]);
    setStatus('playing');
  }

  function renderWord() {
    return word.split('').map((l, i) => (
      <span key={i} className="inline-block w-6 border-b-2 border-[#3e3e42] mx-1 text-2xl text-[#cccccc] text-center">
        {guessed.includes(l) || status === 'lost' ? l : ''}
      </span>
    ));
  }

  function renderKeyboard() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    return (
      <div className="grid grid-cols-13 gap-1 mt-4">
        {letters.map((l) => (
          <button
            key={l}
            onClick={() => status === 'playing' && guessLetter(l)}
            disabled={guessed.includes(l) || wrong.includes(l) || status !== 'playing'}
            className={`w-7 h-8 rounded text-sm font-mono ${
              guessed.includes(l)
                ? 'bg-[#264f78] text-[#cccccc]'
                : wrong.includes(l)
                ? 'bg-[#E06C75] text-[#cccccc]'
                : 'bg-[#252526] text-[#cccccc] hover:bg-[#37373d]'
            }`}
          >
            {l}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <pre className="text-[#cccccc] text-lg sm:text-2xl md:text-3xl leading-none mb-2" style={{ fontFamily: 'monospace', textAlign: 'center', whiteSpace: 'pre', display: 'block' }}>{HANGMAN_ART[wrong.length]}</pre>
      <div className="mb-2 text-[#61AFEF] text-base">Hint: {hint}</div>
      <div className="mb-4">
        <span className="text-[#cccccc] text-lg">Wrong guesses: </span>
        <span className="text-[#E06C75] text-lg">{wrong.join(' ')}</span>
        <span className="text-[#cccccc] text-lg ml-4">({wrong.length}/{maxWrong})</span>
      </div>
      <div className="mb-6 flex gap-1">{renderWord()}</div>
      {status === 'won' && <div className="text-[#98C379] text-xl mb-4">You won! 🎉</div>}
      {status === 'lost' && <div className="text-[#E06C75] text-xl mb-4">You lost! The word was <span className="font-bold">{word}</span></div>}
      {renderKeyboard()}
      <button
        onClick={restart}
        className="mt-6 bg-[#264f78] text-[#cccccc] px-4 py-2 rounded hover:bg-[#365373] transition-colors"
      >
        Restart
      </button>
    </div>
  );
}

export default function NotFound() {
  return (
    <PageLayout filePath="src/app/not-found.tsx">
      <div className="flex flex-col items-center justify-center h-[70vh]">
        <h1 className="text-4xl font-bold text-[#C678DD] mb-4">404</h1>
        <p className="text-lg text-[#cccccc] mb-8">how'd you get here..?</p>
        <HangmanGame />
      </div>
    </PageLayout>
  );
} 