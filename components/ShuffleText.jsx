/*
1. Die Komponente auf der Startseite einsetzen.
2. Verbindet das Input-Element mit einem state "text"
3. Wenn der Text sich ändert, soll der Inhalt des
Input-Elements an unsere shuffletext-Schnittstelle gesendet
werden, der Antwort-Text soll in einem strong-Element
mit der Klasse .big-text angezeigt werden. Nutzt dafür
den state "shuffledText"
4. Bonus: Nutzt den Hook useDebouncedValue
*/

import { useDebouncedValue } from '@/hooks/useDebouncedValue';
import { useEffect, useState } from 'react';

export default function ShuffleText() {
  const [text, setText] = useState('');
  const [shuffledText, setShuffledText] = useState('');
  const debouncedText = useDebouncedValue(text, 400);

  useShuffledText(debouncedText, setShuffledText);

  return (
    <div>
      <label htmlFor="text">Text</label>
      <br />
      <input
        type="text"
        id="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <strong className="big-text">
        {[...shuffledText].map((char) => (
          <span
            key={Math.random()}
            style={{
              '--delay': `${(Math.random() * 1).toFixed(2)}s`,
            }}
          >
            {char}
          </span>
        ))}
      </strong>
    </div>
  );
}

function useShuffledText(text, setShuffledText) {
  useEffect(() => {
    async function fetchExample() {
      try {
        const response = await fetch(
          `${window.location.origin}/api/shuffletext?text=${text}`
        );
        if (!response.ok) {
          throw new Error('Fehler beim Laden der Daten');
        }
        const jsonData = await response.json();
        setShuffledText(jsonData.text);
      } catch (error) {
        return;
      }
    }
    fetchExample();
  }, [text, setShuffledText]);
}
