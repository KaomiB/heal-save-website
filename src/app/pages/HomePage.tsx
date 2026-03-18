import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useThemeImage } from '../../hooks/useThemeImage';
import imgImage from '../../assets/4c83caaa278168328cdba516fcfdc4855eb013b4.png';
import imgImageDark from '../../assets/4c83caaa278168328cdba516fcfdc4855eb013b4-dark.png';
import imgImage1 from '../../assets/a2ebc7b0c57754afefb445b76fc3bd260d0cadb6.png';
import imgImage1Dark from '../../assets/a2ebc7b0c57754afefb445b76fc3bd260d0cadb6-dark.png';
import imgImage2 from '../../assets/cc116d210517b4863061509043cebfa51389a5de.png';
import imgImage2Dark from '../../assets/cc116d210517b4863061509043cebfa51389a5de-dark.png';
import imgImage3 from '../../assets/c56d8a349180873c098f29864ced7d458740ae62.png';
import imgImage3Dark from '../../assets/c56d8a349180873c098f29864ced7d458740ae62-dark.png';
import imgImage4 from '../../assets/a003f28c1a19d48915960f045dfec66ca137a49a.png';
import imgImage4Dark from '../../assets/a003f28c1a19d48915960f045dfec66ca137a49a-dark.png';

/** Zinc + rose dark UI: surfaces zinc-900/800, text zinc-50/400, accent rose (matches light pink brand). */
const D = {
  page: 'dark:bg-[#09090b]',
  hero: 'dark:bg-gradient-to-b dark:from-[#0c0a0c] dark:via-[#100e11] dark:to-[#0a090b]',
  heroBorder: 'dark:border-b dark:border-white/[0.06]',
  panel: 'dark:bg-[#050506]',
  hub: 'dark:bg-[#111113]',
  card: 'dark:bg-[#18181b]',
  cardBorder: 'dark:border-white/[0.08]',
  title: 'dark:text-[#fafafa]',
  body: 'dark:text-[#a1a1aa]',
  cta:
    'dark:bg-[#be123c] dark:text-white dark:hover:bg-[#e11d48] dark:shadow-[0_1px_0_rgba(255,255,255,0.06)_inset,0_8px_24px_-4px_rgba(190,18,60,0.35)]',
  btnGhost: 'dark:bg-[#27272a] dark:hover:bg-[#3f3f46] dark:border dark:border-white/10',
  btnGhostText: 'dark:text-[#fafafa]',
  btnGhostRing: 'dark:border-white/10',
} as const;

function PanelLeft({ src }: { src: string }) {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-sm">
        <img alt="" className="absolute h-[116%] left-[-0.1%] max-w-none top-[-7.94%] w-full" src={src} />
      </div>
    </div>
  );
}

function PanelRight({ src }: { src: string }) {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full rounded-sm" src={src} />
    </div>
  );
}

function Thumb({ src }: { src: string }) {
  return (
    <div className="min-w-[160px] relative shrink-0 size-[160px] rounded-md overflow-hidden" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={src} />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap" data-name="Text">
      <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e1e1e] ${D.title} text-[24px] tracking-[-0.48px] w-full`}>
        About Us
      </p>
      <p className={`font-['Inter:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#757575] ${D.body} text-[16px] w-full`}>
        We are an anxiety and stress reducing focused platform to aid young adults with health savings accounts and habits towards health financial literacy.
      </p>
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-[160px] relative" data-name="Body">
      <Text />
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Button Group">
        <Link
          to="/about"
          className={`bg-[#e3e3e3] cursor-pointer relative rounded-[8px] shrink-0 no-underline hover:bg-[#d9d9d9] transition-colors ${D.btnGhost}`}
          data-name="Button"
        >
          <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[12px] relative rounded-[inherit]">
            <p className={`font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#1e1e1e] ${D.btnGhostText} text-[16px]`}>
              About Us
            </p>
          </div>
          <div
            aria-hidden="true"
            className={`absolute border border-[#767676] border-solid inset-0 pointer-events-none rounded-[8px] ${D.btnGhostRing}`}
          />
        </Link>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap" data-name="Text">
      <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e1e1e] ${D.title} text-[24px] tracking-[-0.48px] w-full`}>{`HSA ChatBot: Savvy `}</p>
      <p className={`font-['Inter:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#757575] ${D.body} text-[16px] w-full`}>
        Savvy is our HSA and health financial literacy Chat-bot, trained on survey based scenarios regarding health savings anxiety, catered to answer all your questions and ease your mind.
      </p>
    </div>
  );
}

function Body1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-[160px] relative" data-name="Body">
      <Text1 />
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Button Group">
        <Link
          to="/savvy"
          className={`bg-[#e3e3e3] cursor-pointer relative rounded-[8px] shrink-0 no-underline hover:bg-[#d9d9d9] transition-colors ${D.btnGhost}`}
          data-name="Button"
        >
          <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[12px] relative rounded-[inherit]">
            <p className={`font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#1e1e1e] ${D.btnGhostText} text-[16px] text-left`}>
              Savvy Chatbot
            </p>
          </div>
          <div
            aria-hidden="true"
            className={`absolute border border-[#767676] border-solid inset-0 pointer-events-none rounded-[8px] ${D.btnGhostRing}`}
          />
        </Link>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap" data-name="Text">
      <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e1e1e] ${D.title} text-[24px] tracking-[-0.48px] w-full`}>
        Resources
      </p>
      <p className={`font-['Inter:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#757575] ${D.body} text-[16px] w-full`}>
        View a list of citations and documents from which our chatbot got it's information.
      </p>
    </div>
  );
}

function Body2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-[160px] relative" data-name="Body">
      <Text2 />
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Button Group">
        <Link
          to="/resources"
          className={`bg-[#e3e3e3] cursor-pointer relative rounded-[8px] shrink-0 no-underline hover:bg-[#d9d9d9] transition-colors ${D.btnGhost}`}
          data-name="Button"
        >
          <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[12px] relative rounded-[inherit]">
            <p className={`font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#1e1e1e] ${D.btnGhostText} text-[16px]`}>
              Resources
            </p>
          </div>
          <div
            aria-hidden="true"
            className={`absolute border border-[#767676] border-solid inset-0 pointer-events-none rounded-[8px] ${D.btnGhostRing}`}
          />
        </Link>
      </div>
    </div>
  );
}

function Cards({
  src2,
  src3,
  src4,
}: {
  src2: string;
  src3: string;
  src4: string;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Cards">
      <div className={`bg-white min-w-[240px] relative rounded-[8px] shrink-0 w-full ${D.card}`} data-name="Card">
        <div
          aria-hidden="true"
          className={`absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px] ${D.cardBorder}`}
        />
        <div className="content-start flex flex-wrap gap-[24px] items-start min-w-[inherit] p-[24px] relative w-full">
          <Thumb src={src2} />
          <Body />
        </div>
      </div>
      <div className={`bg-white min-w-[240px] relative rounded-[8px] shrink-0 w-full ${D.card}`} data-name="Card">
        <div
          aria-hidden="true"
          className={`absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px] ${D.cardBorder}`}
        />
        <div className="content-start flex flex-wrap gap-[24px] items-start min-w-[inherit] p-[24px] relative w-full">
          <Thumb src={src3} />
          <Body1 />
        </div>
      </div>
      <div className={`bg-white min-w-[240px] relative rounded-[8px] shrink-0 w-full ${D.card}`} data-name="Card">
        <div
          aria-hidden="true"
          className={`absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px] ${D.cardBorder}`}
        />
        <div className="content-start flex flex-wrap gap-[24px] items-start min-w-[inherit] p-[24px] relative w-full">
          <Thumb src={src4} />
          <Body2 />
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const panelL = useThemeImage(imgImage, imgImageDark);
  const panelR = useThemeImage(imgImage1, imgImage1Dark);
  const thumbAbout = useThemeImage(imgImage2, imgImage2Dark);
  const thumbSavvy = useThemeImage(imgImage3, imgImage3Dark);
  const thumbRes = useThemeImage(imgImage4, imgImage4Dark);

  const panelKey = useMemo(() => `${panelL}|${panelR}`, [panelL, panelR]);

  return (
    <div className={`bg-white min-h-screen flex flex-col ${D.page}`} data-name="Home Page">
      <Header />

      <div
        className={`bg-[#ddfdfe] content-stretch flex flex-col items-center px-[64px] py-[160px] w-full ${D.hero} ${D.heroBorder}`}
        data-name="Hero Basic"
      >
        <div className="content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 text-center" data-name="Text Content Title">
          <p className={`font-['Inter:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#1e1e1e] ${D.title} text-[72px] tracking-[-2.16px] w-full whitespace-pre-wrap`}>{`Heal&Save`}</p>
          <div className={`flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757575] ${D.body} text-[32px] w-full`}>
            <p className="leading-[1.2] whitespace-pre-wrap">We're here to help you save with peace of mind.</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-[16px] items-center justify-center mt-[24px] w-full max-w-[614px]" data-name="Hero CTA">
          <Link
            to="/savvy"
            className={`bg-[#e5c1e0] text-[#1e1e1e] font-medium text-[20px] leading-[1.2] px-[39px] py-[20px] rounded-full no-underline hover:bg-[#ddb3d8] transition-colors shrink-0 ${D.cta}`}
            data-name="Savvy CTA Button"
          >
            Savvy
          </Link>
          <p className={`font-['Inter:Regular',sans-serif] font-normal text-[#757575] ${D.body} text-[32px] leading-[1.2] text-center`}>
            Your one place for every HSA question.
          </p>
        </div>
      </div>

      <div
        className={`bg-[#e7cee3] content-stretch flex gap-[48px] h-[478px] items-start opacity-80 dark:opacity-100 p-[64px] w-full ${D.panel} dark:ring-1 dark:ring-inset dark:ring-white/[0.04]`}
        data-name="Panel Image Double"
        key={panelKey}
      >
        <PanelLeft src={panelL} />
        <PanelRight src={panelR} />
      </div>

      <div className={`bg-[#fdfbd4] content-stretch flex flex-col gap-[48px] items-start p-[64px] w-full ${D.hub}`} data-name="Card Grid Content List">
        <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0" data-name="Text Content Heading">
          <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e1e1e] ${D.title} text-[24px] tracking-[-0.48px] w-full whitespace-pre-wrap`}>{`Heal&Save Hub`}</p>
          <div className={`flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757575] ${D.body} text-[20px] w-full`}>
            <p className="leading-[1.2] whitespace-pre-wrap">Everything you need right here!</p>
          </div>
        </div>
        <Cards src2={thumbAbout} src3={thumbSavvy} src4={thumbRes} />
      </div>

      <Footer />
    </div>
  );
}
