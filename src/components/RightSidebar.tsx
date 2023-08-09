import { BsSearch } from "react-icons/bs";

export default function RightSidebar() {
  return (
    <div className="w-full sticky top-2 overflow-scroll  mt-2 flex flex-col items-stretch h-screen px-6 ">
      <div>
        <div className="relative w-full h-full group">
          <input
            id="searchBox"
            type="text"
            placeholder="Search Twitter"
            className="w-full h-full rounded-xl py-4 pl-14 pr-4 outline-none bg-zinc-800/90 peer focus:border-primary"
          />
          <label
            htmlFor="searchBox"
            className="absolute top-0 left-0 h-full flex items-center justify-center p-4 text-zinc-500 peer-focus:text-primary"
          >
            <BsSearch className="w-5 h-5" />
          </label>
        </div>
      </div>
      <div className="flex flex-col rounded-xl bg-zinc-800 my-4">
        <h3 className="font-bold text-2xl my-4 p-4">Twitts em alta</h3>
        <div>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="hover:bg-white/10 p-4 last:rounded-b-xl">
              <div className="font-bold text-lg">Trend itens {i + 1}</div>
              <div className="text-xs text-zinc-400">20.4k</div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col rounded-xl bg-zinc-800 my-4">
        <h3 className="font-bold text-2xl my-4 p-4">Destaque</h3>
        <div>
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i}
             className="hover:bg-white/10 p-4 last:rounded-b-xl flex justify-between items-center"
             >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-zinc-700 rounded-full flex-none"></div>
                <div className="flex flex-col">
                  <div className="font-bold text-white">Nome do usuario</div>
                  <div className="text-zinc-600 text-sm">@meuNome</div>
                </div>
              </div>
              <div className="w-full">
                <button className="rounded-full px-6 py-2 bg-white text-zinc-950">
                  seguir
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
