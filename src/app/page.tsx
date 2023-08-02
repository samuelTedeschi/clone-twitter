import LeftSidebar from "@/components/LeftSidebar";
import MainComponents from "@/components/MainComponest";


export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        <LeftSidebar />

        <MainComponents/>

        {/* 
        <section>right menu</section>
        */}
      </div>
    </div>
  );
}
