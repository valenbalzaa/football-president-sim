type HomeProps = {
  onNewGame: () => void;
};

export default function Home({ onNewGame }: HomeProps) {
  return (
    <main className="
      min-h-screen 
      bg-zinc-950 
      text-white 
      flex 
      flex-col 
      items-center 
      justify-center
      px-5
    ">
      
      <h1 className="text-5xl font-bold mb-4 text-center">
        Football President
      </h1>

      <p className="text-zinc-400 text-lg mb-10 text-center">
        Construí tu legado como presidente de un club
      </p>

      <button
        onClick={onNewGame}
        className="
          bg-green-600
          hover:bg-green-700
          px-10
          py-4
          rounded-xl
          text-xl
          font-semibold
          transition
        "
      >
        Nueva Partida
      </button>

    </main>
  );
}