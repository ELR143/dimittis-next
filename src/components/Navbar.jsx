export default function Navbar() {
  const buttons = [
    { name: "St Mary's Nottingham" },
    { name: "Diary" },
    { name: "More" },
    { name: "Log out" },
  ];
  return (
    <div className='flex flex-row justify-center gap-4 w-full sticky p-3 border border-b-slate-300 bg-slate-100'>
      <h1>
        <span className='text-2xl font-semibold  bg-gradient-to-r from-violet-700 to-red-700 text-transparent bg-clip-text'>
          Dimittis
        </span>
      </h1>
      {buttons.map((button) => {
        return (
          <button key={button.name} className='hover:bg-slate-300 rounded-lg p-1'>
            {button.name}
          </button>
        );
      })}
    </div>
  );
}
