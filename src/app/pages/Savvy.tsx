import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function Savvy() {
  return (
    <div className="bg-white min-h-screen flex flex-col" data-name="Savvy">
      <Header />

      {/* Hero Basic */}
      <div className="bg-[#ddfdfe] content-stretch flex flex-col items-center px-[64px] py-[80px] w-full" data-name="Hero Basic">
        <div className="content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 text-center" data-name="Text Content Title">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#1e1e1e] text-[72px] tracking-[-2.16px] w-full whitespace-pre-wrap">Savvy</p>
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757575] text-[32px] w-full">
            <p className="leading-[1.2] whitespace-pre-wrap">Your HSA Financial Literacy Chatbot</p>
          </div>
        </div>
      </div>

      {/* Streamlit chatbot embed */}
      <div className="flex-1 flex flex-col min-h-0 w-full" data-name="Chatbot Section">
        <div className="flex-1 min-h-[70vh] w-full max-w-[1400px] mx-auto px-4 sm:px-8 py-6">
          <div className="bg-white rounded-[8px] shadow-lg overflow-hidden h-full min-h-[600px]">
            <iframe
              src="https://chatbot-37tx6ldxlh6gzz4od3t5oa.streamlit.app/?embed=true&embed_options=show_toolbar&embed_options=light_theme&embed_options=show_colored_line&embed_options=show_padding&embed_options=show_footer&embed_options=disable_scrolling"
              className="w-full h-full min-h-[600px] border-0 overflow-hidden"
              title="Savvy HSA Chatbot"
              allow="camera; microphone"
              scrolling="no"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
