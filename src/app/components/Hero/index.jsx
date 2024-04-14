import Image from "next/image";
import HeroImage from "@/app/assets/nx_wave_hero.png";
const Hero = () => {
  return (
    <div className="text-black w-full flex justify-center items-center h-[100vh]  bg-blue-400 ">
      <div className="flex flex-col md:flex-row-reverse mx-auto max-w-[1280px] w-full justify-center z-1 bg-transparent">
        <div className="relative h-auto w-[225px] md:w-[420px] md:h-[420px] max-w-[420px] z-[1] mx-6">
          <Image
            src={HeroImage}
            fill
            alt="nx wave hero"
          />
        </div>

        <div className="z-10 w-full mt-7 md:mt-0 md:my-auto flex flex-col self-end md:self-center px-6">
          <h1 className="font-normal max-w-[300px] md:max-w-[700px] text-3xl md:text-[3.4rem] md:leading-[54px] text-black md:mb-6 ">
            <strong>NX Wave. </strong>The next-gen credit card for those who
            love rewards.
          </h1>
          <div className="md:mb-6">
            1% Cashback5 <span className="mx-2">x</span>RewardsZero Fore{" "}
            <span className="mx-2">x</span>Markup
          </div>

          <div className="hidden md:block md:mb-6">
            <div className="flex justify-between items-center max-w-[94vw]">
              <div className="flex flex-col">
                <form>
                  <input type="text" placeholder="Enter Phone Number" />
                  <button type="button">Apply now</button>
                </form>
                <div class="consent flex items-center justify-center py-4 px-2 max-w-xs text-[10px] md:mb-6 " >
                  <input className="mr-2" type="checkbox" defaultChecked />
                  <label className="w-full">
                    You agree to be contacted by Uni Cards over Call, SMS, Email
                    or WhatsApp to guide you through your application.
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
