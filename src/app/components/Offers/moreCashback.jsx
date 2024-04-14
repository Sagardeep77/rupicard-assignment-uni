import Image from "next/image";
const MoreCashback = () => {
  return (
    <div className="w-full max-w-[1280px] mx-auto py-16 px-6 md:px-0">
      <div className="w-full md:flex md:flex-row-reverse md:justify-between ">
        <div className="flex flex-col items-center justify-center md:max-w-xl md:text-center text-[28px] md:text-[40px] leading-[34px] md:leading-[1.2] tx-black-primary font-medium">
          <p className="text-gray-500 mb-12 text-start">
            <strong className="text-black">
              5x more value than your cashback
            </strong>{" "}
            , only at the Uni Store.
          </p>
        </div>
        <div className="relative h-[420px] w-[225px] md:w-[420px] md:h-[420px] max-w-[420px] z-[1] mx-6">
          <Image src={`/assets/five_x_rewards.png`} fill alt="five x rewards" />
        </div>
      </div>
    </div>
  );
};

export default MoreCashback;
