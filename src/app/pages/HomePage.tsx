import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useThemeImage } from '../../hooks/useThemeImage';
import imgImage from '../../assets/4c83caaa278168328cdba516fcfdc4855eb013b4.png';
import imgImage1 from '../../assets/a2ebc7b0c57754afefb445b76fc3bd260d0cadb6.png';
import imgImage2 from '../../assets/cc116d210517b4863061509043cebfa51389a5de.png';
import imgImage3 from '../../assets/c56d8a349180873c098f29864ced7d458740ae62.png';
import imgImage4 from '../../assets/a003f28c1a19d48915960f045dfec66ca137a49a.png';
import stressDarkAlt from '../../assets/inverted4c83caaa278168328cdba516fcfdc4855eb013b4(0).png';
import piggyDarkAlt from '../../assets/invertedoption2a2ebc7b0c57754afefb445b76fc3bd260d0cadb6.png';
import aboutDarkAlt from '../../assets/invertedoption2cc116d210517b4863061509043cebfa51389a5de.png';
import chatbotDarkAlt from '../../assets/invertedc56d8a349180873c098f29864ced7d458740ae62.png';
import resourcesDarkAlt from '../../assets/inverteda003f28c1a19d48915960f045dfec66ca137a49a.png';

function Image({ src }: { src: string }) {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          alt=""
          className="absolute h-[116%] left-[-0.1%] max-w-none top-[-7.94%] w-full"
          src={src}
        />
      </div>
    </div>
  );
}

function Image1({ src }: { src: string }) {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Image">
      <img
        alt=""
        className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
        src={src}
      />
    </div>
  );
}

function Image2({ src }: { src: string }) {
  return (
    <div className="min-w-[160px] relative shrink-0 size-[160px]" data-name="Image">
      <img
        alt=""
        className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
        src={src}
      />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e1e1e] dark:text-[#e2e8f0] text-[24px] tracking-[-0.48px] w-full">About Us</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#757575] dark:text-[#a0aec0] text-[16px] w-full">We are an anxiety and stress reducing focused platform to aid young adults with health savings accounts and habits towards health financial literacy.</p>
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
          className="bg-[#e3e3e3] dark:bg-[#0f1a1c] cursor-pointer relative rounded-[8px] shrink-0 no-underline hover:bg-[#d9d9d9] dark:hover:bg-[#15282c] transition-colors"
          data-name="Button"
        >
          <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[12px] relative rounded-[inherit]">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#1e1e1e] dark:text-[#a7f3d0] text-[16px]">About Us</p>
          </div>
          <div
            aria-hidden="true"
            className="absolute border border-[#767676] dark:border-teal-800/45 border-solid inset-0 pointer-events-none rounded-[8px]"
          />
        </Link>
      </div>
    </div>
  );
}

function Image3({ src }: { src: string }) {
  return (
    <div className="min-w-[160px] relative shrink-0 size-[160px]" data-name="Image">
      <img
        alt=""
        className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
        src={src}
      />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e1e1e] dark:text-[#e2e8f0] text-[24px] tracking-[-0.48px] w-full">{`HSA ChatBot: Savvy `}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#757575] dark:text-[#a0aec0] text-[16px] w-full">Savvy is our HSA and health financial literacy Chat-bot, trained on survey based scenarios regarding health savings anxiety, catered to answer all your questions and ease your mind.</p>
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
          className="bg-[#e3e3e3] dark:bg-[#0f1a1c] cursor-pointer relative rounded-[8px] shrink-0 no-underline hover:bg-[#d9d9d9] dark:hover:bg-[#15282c] transition-colors"
          data-name="Button"
        >
          <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[12px] relative rounded-[inherit]">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#1e1e1e] dark:text-[#a7f3d0] text-[16px] text-left">Savvy Chatbot</p>
          </div>
          <div
            aria-hidden="true"
            className="absolute border border-[#767676] dark:border-teal-800/45 border-solid inset-0 pointer-events-none rounded-[8px]"
          />
        </Link>
      </div>
    </div>
  );
}

function Image4({ src }: { src: string }) {
  return (
    <div className="min-w-[160px] relative shrink-0 size-[160px]" data-name="Image">
      <img
        alt=""
        className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
        src={src}
      />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e1e1e] dark:text-[#e2e8f0] text-[24px] tracking-[-0.48px] w-full">Resources</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#757575] dark:text-[#a0aec0] text-[16px] w-full">View a list of citations and documents from which our chatbot got it's information.</p>
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
          className="bg-[#e3e3e3] dark:bg-[#0f1a1c] cursor-pointer relative rounded-[8px] shrink-0 no-underline hover:bg-[#d9d9d9] dark:hover:bg-[#15282c] transition-colors"
          data-name="Button"
        >
          <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[12px] relative rounded-[inherit]">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#1e1e1e] dark:text-[#a7f3d0] text-[16px]">Resources</p>
          </div>
          <div
            aria-hidden="true"
            className="absolute border border-[#767676] dark:border-teal-800/45 border-solid inset-0 pointer-events-none rounded-[8px]"
          />
        </Link>
      </div>
    </div>
  );
}

function Cards({
  aboutSrc,
  chatbotSrc,
  resourcesSrc,
}: {
  aboutSrc: string;
  chatbotSrc: string;
  resourcesSrc: string;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Cards">
      <div className="bg-white dark:bg-[#111a22] min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Card">
        <div
          aria-hidden="true"
          className="absolute border border-[#d9d9d9] dark:border-teal-900/35 border-solid inset-0 pointer-events-none rounded-[8px]"
        />
        <div className="content-start flex flex-wrap gap-[24px] items-start min-w-[inherit] p-[24px] relative w-full">
          <Image2 src={aboutSrc} />
          <Body />
        </div>
      </div>
      <div className="bg-white dark:bg-[#111a22] min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Card">
        <div
          aria-hidden="true"
          className="absolute border border-[#d9d9d9] dark:border-teal-900/35 border-solid inset-0 pointer-events-none rounded-[8px]"
        />
        <div className="content-start flex flex-wrap gap-[24px] items-start min-w-[inherit] p-[24px] relative w-full">
          <Image3 src={chatbotSrc} />
          <Body1 />
        </div>
      </div>
      <div className="bg-white dark:bg-[#111a22] min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Card">
        <div
          aria-hidden="true"
          className="absolute border border-[#d9d9d9] dark:border-teal-900/35 border-solid inset-0 pointer-events-none rounded-[8px]"
        />
        <div className="content-start flex flex-wrap gap-[24px] items-start min-w-[inherit] p-[24px] relative w-full">
          <Image4 src={resourcesSrc} />
          <Body2 />
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const heroLeftSrc = useThemeImage(imgImage, stressDarkAlt);
  const heroRightSrc = useThemeImage(imgImage1, piggyDarkAlt);
  const aboutSrc = useThemeImage(imgImage2, aboutDarkAlt);
  const chatbotSrc = useThemeImage(imgImage3, chatbotDarkAlt);
  const resourcesSrc = useThemeImage(imgImage4, resourcesDarkAlt);

  return (
    <div className="bg-white dark:bg-[#081714] min-h-screen flex flex-col" data-name="Home Page">
      <Header />
      
      {/* Hero Section — updated from Figma draft (Informatics-172) */}
      <div
        className="bg-[#ddfdfe] dark:bg-[#0d221d] content-stretch flex flex-col items-center px-[64px] py-[128px] w-full dark:shadow-[inset_0_-1px_0_0_rgba(87,178,150,0.18)]"
        data-name="Hero Basic"
      >
        <div className="content-stretch flex flex-col items-center sm:items-start not-italic relative shrink-0 text-center sm:text-left w-full max-w-[820px]" data-name="Text Content Title">
          <div className="h-[4px] w-[72px] rounded-full bg-[#e5c1e0] dark:bg-[#57b296] mb-[20px] opacity-90" />
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1] relative shrink-0 text-[#1e1e1e] dark:text-[#e2e8f0] text-[64px] sm:text-[72px] tracking-[-2.8px] w-full whitespace-pre-wrap">{`Heal&Save`}</p>
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757575] dark:text-[#b0bcc7] text-[24px] sm:text-[26px] w-full max-w-[720px] mt-[14px]">
            <p className="leading-[1.2] whitespace-pre-wrap">We're here to help you save with peace of mind.</p>
          </div>
        </div>
        <div className="flex flex-col gap-[14px] items-center sm:items-start justify-center mt-[28px] w-full max-w-[820px] text-center sm:text-left" data-name="Hero CTA">
          <Link
            to="/savvy"
            className="bg-[#e5c1e0] text-[#1e1e1e] font-semibold text-[17px] leading-[1.1] px-[30px] py-[15px] rounded-[100px] no-underline hover:bg-[#ddb3d8] transition-colors shrink-0 shadow-[0_10px_24px_-16px_rgba(171,74,144,0.45)] dark:bg-[#57b296] dark:text-[#0b1713] dark:hover:bg-[#6fc2a8] dark:shadow-[0_12px_28px_-14px_rgba(87,178,150,0.45)]"
            data-name="Savvy CTA Button"
          >
            Savvy
          </Link>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[#6f6f6f] dark:text-[#9fb1bb] text-[22px] sm:text-[24px] leading-[1.3] max-w-[560px]">
            Your one place for every HSA question.
          </p>
        </div>
      </div>

      {/* Panel Image Double */}
      <div
        className="bg-[#e7cee3] dark:bg-[#245448] content-stretch flex gap-[48px] h-[478px] items-start opacity-80 dark:opacity-100 p-[64px] w-full dark:ring-1 dark:ring-inset dark:ring-[#193b33]"
        data-name="Panel Image Double"
      >
        <Image src={heroLeftSrc} />
        <Image1 src={heroRightSrc} />
      </div>

      {/* Card Grid Content List */}
      <div
        className="bg-[#fdfbd4] dark:bg-[#10211c] content-stretch flex flex-col gap-[48px] items-start p-[64px] w-full"
        data-name="Card Grid Content List"
      >
        <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0" data-name="Text Content Heading">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e1e1e] dark:text-[#e2e8f0] text-[24px] tracking-[-0.48px] w-full whitespace-pre-wrap">{`Heal&Save Hub`}</p>
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757575] dark:text-[#a0aec0] text-[20px] w-full">
            <p className="leading-[1.2] whitespace-pre-wrap">Everything you need right here!</p>
          </div>
        </div>
        <Cards aboutSrc={aboutSrc} chatbotSrc={chatbotSrc} resourcesSrc={resourcesSrc} />
      </div>

      <Footer />
    </div>
  );
}