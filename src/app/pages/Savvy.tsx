import { useMemo } from 'react';
import { useTheme } from 'next-themes';
import { Header } from '../components/Header';

const STREAMLIT_EMBED_BASE =
  'https://chatbot-37tx6ldxlh6gzz4od3t5oa.streamlit.app/?embed=true&embed_options=show_toolbar&embed_options=show_colored_line&embed_options=show_padding&embed_options=show_footer';

export default function Savvy() {
  const { resolvedTheme } = useTheme();

  const iframeSrc = useMemo(() => {
    const themeOpt = resolvedTheme === 'dark' ? 'dark_theme' : 'light_theme';
    return `${STREAMLIT_EMBED_BASE}&embed_options=${themeOpt}`;
  }, [resolvedTheme]);

  return (
    <div className="bg-white dark:bg-[#09090b] min-h-screen flex flex-col" data-name="Savvy">
      <Header />

      <div className="flex-1 min-h-0 w-full flex flex-col" data-name="Chatbot Section">
        <iframe
          key={iframeSrc}
          src={iframeSrc}
          className="flex-1 w-full min-h-0 border-0 block overflow-auto"
          title="Savvy HSA Chatbot"
          allow="camera; microphone"
        />
      </div>
    </div>
  );
}
