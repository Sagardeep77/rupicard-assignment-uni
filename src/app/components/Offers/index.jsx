import Image from "next/image";
import AssuredCashback from "./assuredCashback";
import MoreCashback from "./moreCashback";
import ZeroForexMarkup from "./zeroForexMarkup";

const Offers = () => {
  return (
    <div className="py-12 md:py-[150px]">
      <section>
        <div className="w-full max-w-7xl mx-auto px-6 md:px4 ">
          <div className="flex flex-col justify-center md:text-center text-[28px] md:text-[40px] leading-[34px] md:leading-[1.2] tx-black-primary md:pb-16 font-medium">
            <p className="text-gray-500">
              <strong className="text-black">Earn 1% assured cashback</strong>{" "}
              on your spends. Get{" "}
              <strong className="text-black">
                5X more value than cashback
              </strong>{" "}
              at the Uni Store. Enjoy round the clock{" "}
              <strong className="text-black">Whatsapp support</strong>. And it&apos;s{" "}
              <strong className="text-black"> lifetime free</strong>; no joining
              fee, no annual charges.
            </p>
          </div>
          <div className="min-h-[200px]">{/* down arrow image */}</div>
        </div>
      </section>
      <AssuredCashback />
      <MoreCashback />
      <ZeroForexMarkup />
      <div className="w-full max-w-[1280px] mx-auto py-16">
        <div className="w-full flex justify-center ">
          <div className="flex flex-col items-center justify-center md:max-w-xl md:text-center text-[28px] md:text-[40px] leading-[34px] md:leading-[1.2] tx-black-primary md:pb-16 font-medium">
            <p className="text-black mb-12">
              Lifetime <span className="text-green-600">free</span>. No joining
              fee. No annual charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
