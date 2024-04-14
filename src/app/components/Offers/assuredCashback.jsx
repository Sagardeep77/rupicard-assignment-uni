import Image from "next/image";
import AssuredImg from "@/app/assets/one_percent_cashback.png";
const AssuredCashback = () => {
  return (
    <div className="w-full max-w-[1280px] mx-auto py-16 px-6 md:px-0">
      <div className="w-full md:flex md:justify-between ">
        <div className="flex flex-col items-center justify-center md:max-w-xl md:text-center text-[28px] md:text-[40px] leading-[34px] md:leading-[1.2] tx-black-primary font-medium">
          <p className="text-gray-500 mb-12 text-start">
            <strong className="text-black">
              1% assured cashback on your spends
            </strong>{" "}
            .The more you spend, the more you earn.
          </p>
          <p className="text-gray-500 text-base text-start">
            Not applicable on fuel purchase, rent & wallet transfers, ATM
            withdrawals & international transactions.
          </p>
        </div>
        <div className="relative h-[420px] w-[225px] md:w-[420px] md:h-[420px] max-w-[420px] z-[1] mx-6">
          <Image src={AssuredImg} fill alt="one percent image" />
        </div>
      </div>
    </div>
  );
};

export default AssuredCashback;
