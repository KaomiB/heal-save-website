import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
// Placeholder images (replace with your own assets; original draft used Figma exports)
const imgImage = "https://placehold.co/1200x600/e3e3e3/757575?text=Hero";
const imgImage1 = "https://placehold.co/800x500/ddfdfe/1e1e1e?text=Section";
const imgImage2 = "https://placehold.co/160x160/d9d9d9/757575?text=About";
const imgImage3 = "https://placehold.co/160x160/d9d9d9/757575?text=Savvy";
const imgImage4 = "https://placehold.co/160x160/d9d9d9/757575?text=Image";

function Image() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[116%] left-[-0.1%] max-w-none top-[-7.94%] w-full" src={imgImage} />
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function Image2() {
  return (
    <div className="min-w-[160px] relative shrink-0 size-[160px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e1e1e] text-[24px] tracking-[-0.48px] w-full">About Us</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#757575] text-[16px] w-full">We are an anxiety and stress reducing focused platform to aid young adults with health savings accounts and habits towards health financial literacy.</p>
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-[160px] relative" data-name="Body">
      <Text />
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Button Group">
        <div className="bg-[#e3e3e3] relative rounded-[8px] shrink-0" data-name="Button">
          <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[12px] relative rounded-[inherit]">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#1e1e1e] text-[16px]">Button</p>
          </div>
          <div aria-hidden="true" className="absolute border border-[#767676] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>
      </div>
    </div>
  );
}

function Image3() {
  return (
    <div className="min-w-[160px] relative shrink-0 size-[160px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e1e1e] text-[24px] tracking-[-0.48px] w-full">{`HSA ChatBot: Savvy `}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#757575] text-[16px] w-full">Savvy is our HSA and health financial literacy Chat-bot, trained on survey based scenarios regarding health savings anxiety, catered to answer all your questions and ease your mind.</p>
    </div>
  );
}

function Body1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-[160px] relative" data-name="Body">
      <Text1 />
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Button Group">
        <a className="bg-[#e3e3e3] cursor-pointer relative rounded-[8px] shrink-0" data-name="Button" href="https://chatbot-37tx6ldxlh6gzz4od3t5oa.streamlit.app/">
          <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[12px] relative rounded-[inherit]">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-left">Button</p>
          </div>
          <div aria-hidden="true" className="absolute border border-[#767676] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </a>
      </div>
    </div>
  );
}

function Image4() {
  return (
    <div className="min-w-[160px] relative shrink-0 size-[160px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e1e1e] text-[24px] tracking-[-0.48px] w-full">Resources</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#757575] text-[16px] w-full">View a list of citations and documents from which our chatbot got it's information.</p>
    </div>
  );
}

function Body2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-[160px] relative" data-name="Body">
      <Text2 />
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Button Group">
        <div className="bg-[#e3e3e3] relative rounded-[8px] shrink-0" data-name="Button">
          <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[12px] relative rounded-[inherit]">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#1e1e1e] text-[16px]">Button</p>
          </div>
          <div aria-hidden="true" className="absolute border border-[#767676] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>
      </div>
    </div>
  );
}

function Cards() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Cards">
      <div className="bg-white min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Card">
        <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-start flex flex-wrap gap-[24px] items-start min-w-[inherit] p-[24px] relative w-full">
          <Image2 />
          <Body />
        </div>
      </div>
      <div className="bg-white min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Card">
        <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-start flex flex-wrap gap-[24px] items-start min-w-[inherit] p-[24px] relative w-full">
          <Image3 />
          <Body1 />
        </div>
      </div>
      <div className="bg-white min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Card">
        <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-start flex flex-wrap gap-[24px] items-start min-w-[inherit] p-[24px] relative w-full">
          <Image4 />
          <Body2 />
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="bg-white min-h-screen flex flex-col" data-name="Home Page">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-[#ddfdfe] content-stretch flex flex-col items-center px-[64px] py-[160px] w-full" data-name="Hero Basic">
        <div className="content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 text-center" data-name="Text Content Title">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#1e1e1e] text-[72px] tracking-[-2.16px] w-full whitespace-pre-wrap">{`Heal&Save`}</p>
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757575] text-[32px] w-full">
            <p className="leading-[1.2] whitespace-pre-wrap">We're here to help you save with peace of mind.</p>
          </div>
        </div>
      </div>

      {/* Panel Image Double */}
      <div className="bg-[#e7cee3] content-stretch flex gap-[48px] h-[478px] items-start opacity-80 p-[64px] w-full" data-name="Panel Image Double">
        <Image />
        <Image1 />
      </div>

      {/* Card Grid Content List */}
      <div className="bg-[#fdfbd4] content-stretch flex flex-col gap-[48px] items-start p-[64px] w-full" data-name="Card Grid Content List">
        <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0" data-name="Text Content Heading">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e1e1e] text-[24px] tracking-[-0.48px] w-full whitespace-pre-wrap">{`Heal&Save Hub`}</p>
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757575] text-[20px] w-full">
            <p className="leading-[1.2] whitespace-pre-wrap">Everything you need right here!</p>
          </div>
        </div>
        <Cards />
      </div>

      <Footer />
    </div>
  );
}