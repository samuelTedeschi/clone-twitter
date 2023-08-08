import { BsChat, BsDot, BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { IoShareOutline, IoStatsChart } from "react-icons/io5";

export default function MainComponents() {
  return (
    <main className="flex w-[50%] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-zinc-700">
      <h1 className="text-xl font-bold p-6 backdrop-blur bg-black/10 sticky top-0 ">
        Home
      </h1>

      <div className="border-t-[0.5px] px-4 border-b-[0.5px] border-zinc-700  relative flex items-stretch py-4 space-x-2 ">
        <div className="w-10 h-10 bg-zinc-800 rounded-full flex-none"></div>

        <div className="flex flex-col w-full h-full">
          <input
            type="text"
            placeholder="O que voce esta pensando?.."
            className="w-full h-full bg-transparent outline-none border-none border-b-[0.5px] p-4 "
          />

          <div className="w-full items-center flex justify-between">
            <div></div>
            <div className="w-full max-w-[100px]">
              <button
                className="bg-primary rounded-full px-4 py-2 w-full text-lg font-bold text-center hover:bg-opacity-70 transition
                  duration-200"
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={1}
            className="border-b-[0.5px] border-zinc-700 p-4 flex space-x-4"
          >
            <div>
              <div className="w-10 h-10 bg-zinc-400 rounded-full"></div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center w-full justify-between">
                <div className="flex items-center space-x-1 w-full">
                  <div className="font-bold">Codando Muinto</div>
                  <div className="text-zinc-500">@samuelTedeschi</div>
                  <div>
                    <BsDot />
                  </div>
                  <div className="text-sm">1 hora ago</div>
                </div>
                <div>
                  <BsThreeDots />
                </div>
              </div>
              <div className="text-zinc-50 text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                nemo libero quasi fugiat quod assumenda cum quisquam vero ad
                iusto sed neque, cumque expedita exercitationem vel. Quibusdam
                minima adipisci qui?
              </div>
              <div className="bg-zinc-700 aspect-square w-full h-96 rounded-xl mt-2"></div>
              <div className="flex items-center justify-start space-x-20 mt-2 w-full">
                <div className="rounded-full hover:bg-white/20 transition duration-200 cursor-pointer p-3">
                  <BsChat />
                </div>
                <div className="rounded-full hover:bg-white/20 transition duration-200 cursor-pointer p-3">
                  <AiOutlineRetweet />
                </div>
                <div className="rounded-full hover:bg-white/20 transition duration-200 cursor-pointer p-3">
                  <AiOutlineHeart />
                </div>
                <div className="rounded-full hover:bg-white/20 transition duration-200 cursor-pointer p-3">
                  <IoStatsChart />
                </div>
                <div className="rounded-full hover:bg-white/20 transition duration-200 cursor-pointer p-3">
                  <IoShareOutline />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
