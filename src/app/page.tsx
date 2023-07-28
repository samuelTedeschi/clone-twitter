import LeftSidebar from "@/components/LeftSidebar";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/* left sidebar */}
        <LeftSidebar />

        <main className="ml-[275px] flex w-[600px] h-full min-h-screen p-6 flex-col border-l-[0.5px] border-r-[0.5px] border-zinc-500">
          <h1 className="text-xl font-bold">Home</h1>
          <div className="border-t-[0.5px] border-b-[0.5px] border-zinc-600 h-32 relative flex items-center space-x-2 ">
            <div className="w-10 h-10 bg-zinc-800 rounded-full flex-none"></div>
            <div className="flex flex-col w-full">
              <div className="border-b-[0.5px] ">
                <input type="text" placeholder="O que voce esta pensando?.." className="w-full h-full bg-transparent outline-none border-none"/>
              </div>
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
        </main>

        {/* 
        <section>right menu</section>
        */}
      </div>
    </div>
  );
}
