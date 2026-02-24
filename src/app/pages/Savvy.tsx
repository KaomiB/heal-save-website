import { Header } from '../components/Header';

export default function Savvy() {
  return (
    <div className="bg-white min-h-screen flex flex-col" data-name="Savvy">
      <Header />

      {/* Full-height Streamlit embed — fills all space below nav */}
      <div className="flex-1 min-h-0 w-full flex flex-col" data-name="Chatbot Section">
        <iframe
          src="https://chatbot-37tx6ldxlh6gzz4od3t5oa.streamlit.app/?embed=true&embed_options=show_toolbar&embed_options=light_theme&embed_options=show_colored_line&embed_options=show_padding&embed_options=show_footer"
          className="flex-1 w-full min-h-0 border-0 block overflow-auto"
          title="Savvy HSA Chatbot"
          allow="camera; microphone"
        />
      </div>
    </div>
  );
}
