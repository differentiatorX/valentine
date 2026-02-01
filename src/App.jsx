import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No 🥀",
      "Are you sure, Shweta? 🥺",
      "Really sure, Jenny? 💔",
      "Think again, my love! 🥰",
      "I will never hurt you anymore! 😇",
      "Let me show how much I love you! 🥺",
      "Shweta, please? 🤧",
      "I promise I can make you happy! 🥰",
      "Don't do this to us, Jenny! 🤕",
      "I'm sorry, give me a chance! 😭",
      "Have a heart, Shweta! 🥀",
      "I'll cherish you forever! 😇",
      "Just one chance for Jenny? 🥺",
      "My heart belongs to you! 🥰",
      "I love you more than anything! 😭",
      "Please reconsider, Shweta? 🤕",
      "You're breaking my heart 💔",
      "Jenny, don't leave me hanging! 🥀",
      "Plsss? I love you so much 🤧😭"
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/uFYlyy-VBT0AAAAM/hug-love.gif" />
          <div className="text-4xl md:text-6xl font-bold my-4">
            Ok Yayyyyy!!!
          </div>
        </>
      ) : (
        <>
          {/* Main Image */}
          <img
            className="h-[230px] rounded-lg shadow-lg"
            src="https://image2url.com/r2/default/images/1769960634734-9c784939-7089-4d10-b150-a4c6a375c74a.jpg"
          />
          <h1 className="text-4xl md:text-6xl my-4 text-center">
            Jenny Will you be my Valentine?
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <a
      className="fixed bottom-2 right-2 backdrop-blur-md opacity-80 hover:opacity-95 border p-1 rounded border-rose-300"
      href="https://github.com/Xeven777/valentine"
      target="__blank"
    >
      Made with{" "}
      <span role="img" aria-label="heart">
        ❤️
      </span>
    </a>
  );
};