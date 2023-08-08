import { BsSearch } from "react-icons/bs";

export default function RightSidebar() {
  return (
    <div className=" w-full sticky top-2 mt-2 flex flex-col items-stretch h-screen px-6 ">
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
      <div className="flex flex-col rounded-xl bg-zinc-800 p-4 my-4">
        <h3 className="font-bold text-2xl my-4">Noticias</h3>
        <div>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i}>
              <div>Trend itens {i + 1}</div>
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
}
