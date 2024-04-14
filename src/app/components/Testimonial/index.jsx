import AlwaysInControl from "./alwaysInControl";
import Highlighters from "./highlighters";
import InstantCredit from "./instantCredit";

const Testimonial = () => {
  return (
    <div className="py-12 lg:py-[100px] bg-black relative">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-4  md:flex relative py-6">
        <InstantCredit />
      </div>
      <div className="w-full max-w-7xl mx-auto px-6 md:px-4  md:flex relative py-6">
        <AlwaysInControl />
      </div>
      <div className="w-full max-w-7xl mx-auto px-6 md:px-4  md:flex relative py-6">
        <Highlighters />
      </div>
    </div>
  );
};

export default Testimonial;
