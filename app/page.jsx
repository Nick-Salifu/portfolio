import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Stats from "@/components/Stats";


export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full px-5 xl:px-8">
        <div className="flex flex-col justify-between items-center xl:flex-row xl:pt-8 xl:pb-24">

          {/* left part of my hero */}
          <div className="text-center md:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>

            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-blue-500">Nick Salifu</span>
            </h1>

            <p className="max-w-[500px] mb-9 text-white/80">I excel at crafting elegant digital experiences and I am proficient at various programming languages and technologies</p>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <Button
                variant="outline"
                size="md"
                className="flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>

              <div className="mb-8 md:mb-0">
                <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-blue-500 rounded-full flex justify-center items-center text-blue-500 text-base hover:bg-blue-500 hover:text-white hover:transition-all duration-500" />
              </div>
            </div>
          </div>

          {/* right part of my hero */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />
    </section>
  );
}
