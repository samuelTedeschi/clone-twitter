import { BsSearch } from "react-icons/bs";

export default function RightSidebar() {
  return (
    <div className="absolute w-[275px] flex flex-col items-stretch h-screen px-6 ml-auto right-0">
      <div>
        <div className="relative w-full h-full">
          <label
            htmlFor="searchBox"
            className="absolute top-0 left-0 h-full flex items-center justify-center"
          >
            <BsSearch className="w-5 h-5 text-zinc-400" />
          </label>
          <input
            id="searchBox"
            type="text"
            placeholder="Search Twitter"
            className="w-full h-full rounded-xl py-4 px-8 outline-none bg-transparent border-none"
          />
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
