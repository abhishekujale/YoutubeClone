import Image from "next/image";
import { Inter } from "next/font/google";
// import VideoCard from "../components/VideoCard"
import VideoCard from "@/components/VideoCard"
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-grey-500">
      <VideoCard
        title={"Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML."}
        views={100000}
        author={"Abhishek Ujale"}
        timestamp={"37 days ago"}
        image={"/photo.png"}
        thumb={"/thumb.jpg"} />
    </div>
  );
}
