import Image from "next/image";
import AppScreen1 from "@/app/assets/app_screen_1.webp";
const InstantCredit = () => {
  return (
    <div className="w-full md:flex md:justify-between ">
      <div className="flex flex-col items-center justify-center w-full md:max-w-xl md:text-center text-[28px] md:text-[40px] leading-[34px] md:leading-[1.2] tx-black-primary font-medium">
        <div className="mb-12">
          <p className="text-gray-50 text-start">
            We’ve all heard of instant groceries, now say hello to
          </p>
          <p className="text-start text-green-300">instant credit.</p>
        </div>
        <div className="w-full">
          <p className="text-gray-500 text-[14px] md:text-2xl  text-start">
            0% hassle, 100% paperless. Get your Uni Card instantly.
          </p>
        </div>
      </div>
      <div className="relative h-[400px] w-[225px] md:w-[420px] md:h-[420px] max-w-[450px] z-[1] mx-6">
        <Image src={AppScreen1} fill alt="one percent image" />
      </div>
    </div>
  );
};
export default InstantCredit;
