import LeftNavBar from "@/components/LeftNavBar";
import CreateNewViewSection from "@/components/sections/CreateNewViewSection";
import MainSection from "@/components/sections/MainSection";
import TopNavBar from "@/components/TopNavBar";


export default function Home() {


  return (
    <>
      <TopNavBar />
      <div className="flex h-screen">

        <LeftNavBar />
        <div className="w-full">

          <MainSection />
          <CreateNewViewSection />
        </div>
      </div>
    </>
  );
}
