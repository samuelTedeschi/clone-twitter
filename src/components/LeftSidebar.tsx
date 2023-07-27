import Link from "next/link";
import { BiHomeCircle, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsThreeDots, BsTwitter } from "react-icons/bs";
import { HiOutlineHashtag } from "react-icons/hi";
import { HiEnvelope } from "react-icons/hi2";

const NAVIGATION_ITEMS = [
  {
    title: "Twitter",
    icon: BsTwitter,
  },
  {
    title: "Home",
    icon: BiHomeCircle,
  },
  {
    title: "Explore",
    icon: HiOutlineHashtag,
  },
  {
    title: "Notifications",
    icon: BsBell,
  },
  {
    title: "Messages",
    icon: HiEnvelope,
  },
  {
    title: "Home",
    icon: BsBookmark,
  },
  {
    title: "Profile",
    icon: BiUser,
  },
];

export default function LeftSidebar() {
  return (
    <section className="fixed w-[275px] flex flex-col items-stretch h-screen px-6">
      <div className="flex flex-col items-stretch h-full space-y-4 mt-4">
        {NAVIGATION_ITEMS.map((item) => (
          <Link
            href={`/${item.title.toLowerCase()}`}
            key={item.title}
            className="flex items-center justify-start w-fit space-x-4 rounded-3xl py-2 px-6 
          text-2xl hover:bg-white/10 transition duration-200"
          >
            <div>
              <item.icon />
            </div>
            {item.title !== "Twitter" && <div>{item.title}</div>}
          </Link>
        ))}
        <button
          className="bg-primary m-4 rounded-full p-4 text-2xl text-center hover:bg-opacity-70 transition
          duration-200"
        >
          Tweet
        </button>
      </div>

      <button
        className="bg-transparent w-full justify-between m-4 rounded-full flex items-center space-x-2 p-4 text-center hover:bg-white/10 transition
          duration-200"
      >
        <div className="flex items-center space-x-2">
          <div className="rounded-full h-8 w-8 bg-slate-400"></div>
          <div className="text-left text-sm">
            <div className="font-semibold">samuel Code</div>
            <div>@samuelTedeschi</div>
          </div>
        </div>
        <div>
          <BsThreeDots />
        </div>
      </button>
    </section>
  );
}
