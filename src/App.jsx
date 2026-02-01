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

  // The collection of your 18 new photos for the gallery
  const memoryImages = [
    "https://image2url.com/r2/default/images/1769963613310-807ebe9c-fc6e-4b2d-af18-66d0f03c86c0.jpg",
    "https://image2url.com/r2/default/images/1769963667266-4290e4f4-6ad4-43b8-a5b7-46946364de48.jpg",
    "https://image2url.com/r2/default/images/1769963688240-10c829c1-a7d4-4161-9a44-eed7be1e8465.jpg",
    "https://image2url.com/r2/default/images/1769963711950-55096ed0-bf11-4df8-9672-371087ec362f.jpg",
    "https://image2url.com/r2/default/images/1769963734929-5ecf5fb0-55f7-40c4-a2c2-3c900e6b47e0.jpg",
    "https://image2url.com/r2/default/images/1769963755078-9000ebe8-ddd1-4493-aff2-77122d89dcc9.jpg",
    "https://image2url.com/r2/default/images/1769963790006-c620884f-0821-4d66-8c9a-7000ecd52cb2.jpg",
    "https://image2url.com/r2/default/images/1769963811399-b5a32313-33aa-4161-bb74-f094124509a2.jpg",
    "https://image2url.com/r2/default/images/1769963831919-b7ae10ea-bf79-40d0-bcd5-c7f3e46f77a4.jpg",
    "https://image2url.com/r2/default/images/1769963849855-973c3367-a870-499f-aec4-a26cc4747d91.jpg",
    "https://image2url.com/r2/default/images/1769963867334-c52c9037-c4f6-4d53-acdc-b946c6f56a51.jpg",
    "https://image2url.com/r2/default/images/1769963886893-f0324999-1d06-4a1d-ac9f-6fed84ad7901.jpg",
    "https://image2url.com/r2/default/images/1769963904701-b9ffe9f2-8b00-49ad-bf3e-68e7cfd9c2b7.jpg",
    "https://image2url.com/r2/default/images/1769963927036-b971ce23-1d41-42ba-a5db-c703f8c5638a.jpg",
    "https://image2url.com/r2/default/images/1769963996953-0dedb406-546d-4c57-b202-f26c4533ba23.jpg",
    "https://image2url.com/r2/default/images/1769964019494-9a7ecce7-6729-43af-aa85-bf6bcc1a9d09.jpg",
    "https://image2url.com/r2/default/images/1769964039501-83211818-975a-43ae-9c1f-f2c11cafee68.jpg",
    "https://image2url.com/r2/default/gifs/1769964260200-168ddf5e-689e-4d64-86e0-558ffaadb972.gif"
  ];

  return (
    <div className="flex flex-col items-center justify-center pt-4 min-h-screen bg-pink-50 selection:bg-rose-600 selection:text-white text-zinc-900 overflow-y-auto">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/uFYlyy-VBT0AAAAM/hug-love.gif" />
          <div className="text-4xl md:text-6xl font-bold my-4">
            Ok Yayyyyy!!!
          </div>
        </>
      ) : (
        <>
          {/* Main Hero Section */}
          <div className="flex flex-col items-center justify-center min-h-[80vh]">
            <img
              className="h-[230px] rounded-lg shadow-lg mb-8"
              src="https://image2url.com/r2/default/images/1769960634734-9c784939-7089-4d10-b150-a4c6a375c74a.jpg"
              alt="Main memory"
            />
            <h1 className="text-4xl md:text-6xl my-4 text-center px-4">
              Jenny, will you be my Valentine?
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
          </div>

          {/* Memory Lane Gallery - Aesthetic Masonry Grid */}
          <div className="w-full max-w-5xl px-4 py-12">
            <h2 className="text-3xl font-bold text-center text-rose-500 mb-8 font-serif">
              Our Beautiful Memories 💖
            </h2>
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {memoryImages.map((src, index) => (
                <div key={index} className="break-inside-avoid">
                  <img
                    className="w-full rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                    src={src}
                    alt={`Memory ${index + 1}`}
                  />
                </div>
              ))}
            </div>
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
      className="fixed bottom-2 right-2 backdrop-blur-md opacity-80 hover:opacity-95 border p-1 rounded border-rose-300 text-xs text-rose-400"
      href="https://github.com/Xeven777/valentine"
      target="__blank"
    >
      Made with <span role="img" aria-label="heart">❤️</span>
    </a>
  );
};