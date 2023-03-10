import { useEffect, useState } from "react";

const LENGTH = 8;
const EMOJIS = [
  "π",
  "π",
  "π",
  "π€£",
  "π",
  "π",
  "π",
  "π",
  "π",
  "π",
  "π",
  "π",
  "π",
  "π",
  "π",
  "π",
  "π",
  "π",
  "π€",
  "π€©",
  "π",
  "π",
  "π",
  "π",
  "π",
  "π",
  "π",
  "π€£",
  "π",
  "π",
  "π",
  "π",
  "π€©",
  "π",
  "π",
  "π",
  "π",
  "π€ͺ",
  "πΈ",
  "πΉ",
  "π»",
  "πΌ",
  "π½",
  "π",
  "πΏ",
  "πΎ",
];
const MESSAGES = [
  "Bonne annΓ©e !!!",
  "Beaux tΓ©tΓ©s !!!",
  "Beaux nΓ©nΓ©s !!!",
  "Bannanier et pommes sautΓ©es !",
];

function App() {
  const [emojis, setEmojis] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [beauf, setBeauf] = useState(false);
  const [twoRandomEmojis, setTwoRandomEmojis] = useState([
    EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
    EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
  ]);

  // Every 0.4 seconds, randomize twoRandomEmojis

  useEffect(() => {
    const interval = setTimeout(() => {
      setTwoRandomEmojis([
        EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
        EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
      ]);
    }, 800);
    return () => clearInterval(interval);
  });

  const handleClick = async () => {
    const numEmojis = Math.floor(Math.random() * LENGTH) + LENGTH;
    const selectedEmojis = [];
    for (let i = 0; i < numEmojis; i++) {
      const emoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
      const numRepeats = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < numRepeats; j++) {
        selectedEmojis.push(emoji);
      }
    }
    // if beauf, 1 to messages.length (do not take index 0), else, 0
    const messageIndex = beauf
      ? Math.floor(Math.random() * (MESSAGES.length - 1)) + 1
      : 0;

    const finalToPaste = `${MESSAGES[messageIndex]} ${selectedEmojis.join("")}`;
    setEmojis(finalToPaste);

    // Copy emojis to clipboard
    setShowModal(true);
    if (navigator.share) {
      await navigator.share({
        title: finalToPaste,
        text: finalToPaste,
      });
    }
    await navigator.clipboard.writeText(finalToPaste);
  };

  return (
    <div className="flex items-center justify-center h-screen font-inter text-xl lg:text-3xl bg-gradient-to-br from-blue-100 to-purple-400/20 p-8 text-center">
      <div className="flex flex-col gap-8 items-center">
        <h1 className="text-center text-7xl lg:text-9xl font-bold bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-700 text-transparent">
          BonannΓ©e
        </h1>
        <p>
          Envoie toi aussi les messages avec plein d'emojis {twoRandomEmojis[0]}{" "}
          foufous {twoRandomEmojis[1]} que tes parents aiment tant
        </p>
        <div className="space-y-3 mt-8">
          <button
            onClick={handleClick}
            className="bg-gradient-to-bl from-purple-600 to-indigo-700 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full animate-none margin-auto hover:animate-pulse transition-all w-fit"
          >
            {beauf ? "Beaux nΓ©nΓ©s" : "Bonne annΓ©e"} !
          </button>
          <div className="flex items-center gap-1 justify-center">
            <input
              type="checkbox"
              id="beauf-checker"
              className="w-5 h-5 accent-indigo-600 p-2"
              onChange={() => setBeauf((prev) => !prev)}
            />
            <label htmlFor="beauf-checker" className="text-sm">
              J'envoie ce message Γ  un beauf
            </label>
          </div>
        </div>
      </div>
      <div className="fixed bottom-4 text-sm text-indigo-700/40 transition-all hover:text-indigo-700">
        <a href="https://github.com/Niborwood" target="_blank" rel="noreferrer">
          @robin - Finite
        </a>
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-white/90 z-50">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-white/50 p-8 grid place-items-center">
            <div className="font-bold text-2xl lg:text-4xl animate-[bounce_1s_1.5] bg-gradient-to-bl from-purple-600 to-indigo-700 p-12 rounded-xl text-white select-all">
              {emojis}
            </div>
            <div>
              Et voilΓ  ton message personnalisΓ© ! Rends des cinquentenaires
              heureux...
            </div>
            <button
              className="text-base font-bold bg-gradient-to-bl from-purple-600 to-indigo-700 hover:bg-purple-700 text-white py-3 px-6 rounded-full mt-4"
              onClick={() => {
                setShowModal(false);
              }}
            >
              Un autre ?
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
