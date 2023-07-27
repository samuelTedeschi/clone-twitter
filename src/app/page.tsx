import LeftSidebar from "@/components/LeftSidebar";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/* left sidebar */}
        <LeftSidebar />

        <main className="ml-[275px] flex w-[600px] h-full min-h-screen p-6 flex-col border-l-[0.5px] border-r-[0.5px] border-zinc-500">
          <div className="text-xl font-bold">Home</div>
        </main>

        {/* 
        <section>right menu</section>
        */}
      </div>
    </div>
  );
}
