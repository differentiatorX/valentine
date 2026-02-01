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
      "I will protect you always! 😇",
      "I will never make you sad 🥺",
      "I'll always put a smile on your face! 🥰",
      "You are the most beautiful girl in the world! 🌎",
      "I don't want Arshia, I want only YOU! 🥀",
      "You are my beauty standards! 🥺",
      "My first and last thought is only you 😭",
      "Shweta, please? 🤧",
      "Don't do this to us, Jenny! 🤕",
      "I'm sorry, give me a chance! 😭",
      "Have a heart, Shweta! 🥀",
      "I'll cherish you forever! 😇",
      "Just one chance for Jenny? 🥺",
      "My heart belongs to you! 🥰",
      "Please reconsider, Shweta? 🤕",
      "You're breaking my heart 💔",
      "Jenny, don't leave me hanging! 🥀",
      "Plsss? I love you so much 🤧😭",
      "Pretty please with a cherry on top? 🍒🥺",
      "But I love you sooooo much! 💖😭",
      "Look into my eyes... 🥺✨",
      "I'll buy you chocolates! 🍫🍬",
      "I'll give you unlimited hugs! 🫂🧸",
      "You're my favorite person! 🌟💞",
      "Don't be a meanie! 😣💔",
      "My heart is crying! 😿💧"
    ];

    return phrases[noCount % phrases.length];
  };

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
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Pacifico&display=swap');
          .font-hand { font-family: 'Pacifico', cursive; }
          .font-cursive { font-family: 'Dancing Script', cursive; }
        `}
      </style>

      <div 
        className="min-h-screen text-zinc-900 bg-cover bg-center overflow-y-auto"
        style={{
          backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/016/348/270/small/tunnel-of-concentric-hearts-romantic-cute-background-pink-aesthetic-hearts-backdrop-illustration-vector.jpg')",
        }}
      >
        <div className="min-h-screen bg-black/10 backdrop-blur-[2px] flex flex-col items-center py-10">
          
          {yesPressed ? (
            <div className="flex flex-col items-center justify-center h-screen">
              <img src="https://media.tenor.com/uFYlyy-VBT0AAAAM/hug-love.gif" className="rounded-xl shadow-2xl" />
              <div className="text-4xl md:text-6xl font-bold my-4 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] font-hand animate-bounce">
                Ok Yayyyyy!!! ❤️
              </div>
            </div>
          ) : (
            <>
              {/* --- CARD SECTION --- */}
              <div className="bg-white/30 backdrop-blur-md border border-white/50 p-8 rounded-3xl shadow-2xl max-w-md w-full mx-4 text-center transform hover:scale-105 transition duration-500">
                <img
                  className="h-[230px] w-full object-cover rounded-xl shadow-lg mb-6 border-4 border-white"
                  src="https://image2url.com/r2/default/images/1769960634734-9c784939-7089-4d10-b150-a4c6a375c74a.jpg"
                  alt="Main Memory"
                />
                <h1 className="text-4xl md:text-5xl font-bold text-rose-600 mb-6 font-hand drop-shadow-sm leading-tight">
                  Jenny, will you be my Valentine?
                </h1>
                
                <div className="flex flex-col gap-4 items-center w-full">
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 w-full"
                    style={{ fontSize: yesButtonSize }}
                    onClick={() => setYesPressed(true)}
                  >
                    Yes 💖
                  </button>
                  <button
                    onClick={handleNoClick}
                    className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 w-full"
                  >
                    {getNoButtonText()}
                  </button>
                </div>
              </div>

              {/* --- PINTEREST GRID SECTION --- */}
              <div className="w-full max-w-6xl mt-16 px-4">
                <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-xl">
                  <h2 className="text-center text-rose-600 text-3xl md:text-4xl font-cursive mb-8 font-bold drop-shadow-sm">
                    Our Beautiful Memory Lane 📸
                  </h2>
                  
                  {/* Masonry Grid Layout */}
                  <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                    {memoryImages.map((src, index) => (
                      <div key={index} className="break-inside-avoid relative group">
                        <img
                          className="w-full rounded-2xl shadow-md border-2 border-white/80 transition-transform duration-500 group-hover:scale-105 group-hover:shadow-xl"
                          src={src}
                          alt={`Memory ${index}`}
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
          
          <Footer />
        </div>
      </div>
    </>
  );
}

const Footer = () => {
  return (
    <a
      className="fixed bottom-2 right-2 backdrop-blur-md bg-white/30 p-2 rounded-lg border border-white/50 text-xs text-rose-700 font-bold shadow-sm hover:bg-white/50 transition-colors"
      href="https://github.com/Xeven777/valentine"
      target="__blank"
    >
      Made with ❤️
    </a>
  );
};