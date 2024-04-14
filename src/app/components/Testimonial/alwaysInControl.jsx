import Image from "next/image";
const AlwaysInControl = () => {
  return (
    <div className="w-full md:flex md:justify-between ">
      <div className="flex flex-col items-center justify-center w-full md:max-w-xl md:text-center text-[28px] md:text-[40px] leading-[34px] md:leading-[1.2] tx-black-primary font-medium">
        <div className="w-full mb-12">
          <p className="text-gray-50 text-start">
          With Uni,
          </p>
          <p className="text-start text-green-300">you’re always in control.</p>
        </div>
        
      </div>
      <div className="relative h-[400px] w-[225px] md:w-[420px] md:h-[420px] max-w-[420px] z-[1] mx-6">
        <Image src={`/assets/app_screen_2.webp`} fill alt="one percent image" />
      </div>
    </div>
  );
};
export default AlwaysInControl;
