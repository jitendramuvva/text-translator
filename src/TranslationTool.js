import React, { useState } from 'react';
import axios from 'axios';

const TranslationTool = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [targetLang, setTargetLang] = useState('es'); // Default to Spanish

  const handleTranslate = () => {
    axios
      .post('https://libretranslate.de/translate', {
        q: inputText,
        source: 'en', // Source language is English
        target: targetLang,
        format: 'text',
      })
      .then((response) => {
        setTranslatedText(response.data.translatedText);
      })
      .catch((error) => {
        console.error('Error with translation:', error);
      });
  };

  return (
    <div>
      <h1>Text Translation Tool</h1>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text to translate"
        rows="4"
        cols="50"
      />
      <br />
      <select
        value={targetLang}
        onChange={(e) => setTargetLang(e.target.value)}
      >
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="it">Italian</option>
      </select>
      <br />
      <button onClick={handleTranslate}>Translate</button>
      <h2>Translated Text:</h2>
      <p>{translatedText}</p>
    </div>
  );
};

export default TranslationTool;