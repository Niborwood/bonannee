import { useState } from "react";

const LENGTH = 8;
const EMOJIS = [
  "😀",
  "😁",
  "😂",
  "🤣",
  "😃",
  "😄",
  "😅",
  "😆",
  "😉",
  "😊",
  "😋",
  "😎",
  "😍",
  "😘",
  "😗",
  "😙",
  "😚",
  "🙂",
  "🤗",
  "🤩",
  "😛",
  "😜",
  "😝",
  "😄",
  "😆",
  "😂",
  "😅",
  "🤣",
  "😃",
  "😊",
  "😇",
  "😍",
  "🤩",
  "😘",
  "😗",
  "😚",
  "😙",
  "🤪",
  "😸",
  "😹",
  "😻",
  "😼",
  "😽",
  "🙀",
  "😿",
  "😾",
];

function App() {
  const [emojis, setEmojis] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Take a random emoji
  const emoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];

  const handleClick = () => {
    const numEmojis = Math.floor(Math.random() * LENGTH) + LENGTH;
    const selectedEmojis = [];
    for (let i = 0; i < numEmojis; i++) {
      const emoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
      const numRepeats = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < numRepeats; j++) {
        selectedEmojis.push(emoji);
      }
    }
    setEmojis("Bonne année !!! " + selectedEmojis.join(""));
    // Copy emojis to clipboard
    setShowModal(true);
    navigator.clipboard.writeText(emojis).then(() => {
      setTimeout(() => setShowModal(false), 4000);
    });
  };

  return (
    <div className="flex items-center justify-center h-screen font-inter text-xl lg:text-3xl bg-gradient-to-br from-blue-100 to-purple-400/20 p-8 text-center">
      <div className="flex flex-col gap-8 items-center">
        <h1 className="text-center text-7xl lg:text-9xl font-bold text-purple-900">
          Bonnannée
        </h1>
        <p>
          Envoie toi aussi les messages avec plein d'emojis{" "}
          {EMOJIS[Math.floor(Math.random() * EMOJIS.length)]} foufous{" "}
          {EMOJIS[Math.floor(Math.random() * EMOJIS.length)]} que tes parents
          aiment tant
        </p>
        <button
          onClick={handleClick}
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full animate-pulse margin-auto hover:animate-none transition-all w-fit"
        >
          Bonne année !
        </button>
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-90 z-50">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-white p-8 grid place-items-center">
            <div className="font-bold text-2xl animate-bounce">{emojis}</div>
            <div>
              C'est copié dans ton presse-papier ! Rends des cinquentenaires
              heureux...
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
