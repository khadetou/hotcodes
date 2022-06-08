import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloating = () => {
  return (
    <div className="fixed bottom-[9%] right-[4%] rounded-full p-5 bg-grad-btn cursor-pointer shadow-shadow">
      <FaWhatsapp className="text-[38px] font-bold text-white" />
    </div>
  );
};

export default WhatsAppFloating;
