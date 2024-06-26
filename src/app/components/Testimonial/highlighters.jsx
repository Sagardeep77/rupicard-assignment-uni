import Image from "next/image";

const hightlightedItems = [
  {
    image: "/assets/whatsapp_bubble.webp",
    content: "Help, just a WhatsApp away. Anytime, Anyday.",
    subContent:
      "During hectic work hours. On lazy sunday mornings. In the thick of night. Anytime.",
  },
  {
    image: "/assets/rupee_bubble.webp",
    content: "No hidden charges, no last minute surprises.",
    subContent:
      "100% money back guarantee if a charge is applied without your knowledge.",
  },
  {
    image: "/assets/antivirus_bubble.webp",
    content: "Super secure. Because we care about your money.",
    subContent: <Image src={'/assets/pcidss_cert.svg'} width={96} height={32} alt=""/>
  },
];

const Highlighters = () => {
  return (
    <div className="md:flex md:justify-between w-full">
      {hightlightedItems.map((item, index) => {
        return (
          <div key={`highlight${index}`} className="flex flex-col gap-4 max-w-xs mb-16">
            <div className="relative w-[100px] h-[100px]">
              <Image src={`${item.image}`} fill alt={item.content} />
            </div>
            <div className="d:text-center text-xl max-w-xs">
              <p className="text-gray-50 text-start">{item.content}</p>
            </div>
            <div>
              <p className="text-gray-500 text-md  text-start">
                {item.subContent}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Highlighters;
