import React, { useState } from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Popup from './components/Popup';
import Notification from './components/Notification';
import { showNotification as show, checkWin } from './helpers/helpers';

import './App.css';

const words = [
  'application',
  'programming',
  'interface',
  'wizard',
  'vscode',
  'java',
  'services',
  'javascript',
  'cloud',
  'context',
  'stack',
  'pagination',
  'algorithms',
  'data',
  'python',
  'azure',
  'visualbasic',
  'pascal',
  'materialui',
  'bootstrap',
  'passportjs',
  'bcryptjs',
  'mongodb',
  'mongoose',
  'API',
  'network',
  'hackathon',
  'software',
  'ruby',
  'python',
  'sql',
  'portals',
  'jquery',
  'vuejs',
];

let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  return (
    <>
      <Header />
      <div className='game-container'>
        <Figure />
        <WrongLetters />
        <Word />
      </div>
    </>
  );
}

export default App;
