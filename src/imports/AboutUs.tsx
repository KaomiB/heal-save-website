import svgPaths from "./svg-qesl9ucbbh";
import imgHeroBasic from "figma:asset/af02000a7f8b6d610fec4c836770abb05f9b1e7d.png";

function Figma() {
  return (
    <div className="h-[35px] relative shrink-0 w-[40px]" data-name="Figma">
      <div className="absolute inset-[-5%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 38.5">
          <g id="Figma">
            <path d={svgPaths.p172d740} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Block() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Block">
      <Figma />
    </div>
  );
}

function Figma1() {
  return (
    <div className="h-[35px] relative shrink-0 w-[23.333px]" data-name="Figma">
      <div className="absolute inset-[-5%_-7.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.8333 38.5">
          <g id="Figma">
            <path d={svgPaths.p236b8580} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function XLogo() {
  return (
    <div className="h-[24px] relative shrink-0 w-[23.98px]" data-name="X Logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.98 24">
        <g id="X Logo">
          <path d={svgPaths.p16d01100} fill="var(--fill-0, #1E1E1E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function LogoInstagram() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Logo Instagram">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_953)" id="Logo Instagram">
          <path d={svgPaths.p3c382d72} fill="var(--fill-0, #1E1E1E)" id="Icon" />
        </g>
        <defs>
          <clipPath id="clip0_1_953">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LogoYouTube() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Logo YouTube">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_956)" id="Logo YouTube">
          <path d={svgPaths.p13f17d00} fill="var(--fill-0, #1E1E1E)" id="Icon" />
        </g>
        <defs>
          <clipPath id="clip0_1_956">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LinkedIn() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="LinkedIn">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_962)" id="LinkedIn">
          <path d={svgPaths.p167f5280} fill="var(--fill-0, #1E1E1E)" id="Icon" />
        </g>
        <defs>
          <clipPath id="clip0_1_962">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonList() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Button List">
      <XLogo />
      <LogoInstagram />
      <LogoYouTube />
      <LinkedIn />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start min-w-[240px] relative shrink-0 w-[262px]" data-name="Title">
      <Figma1 />
      <ButtonList />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Title">
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text Strong">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#1e1e1e] text-[16px]">Use cases</p>
      </div>
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Title">
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text Strong">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#1e1e1e] text-[16px]">Explore</p>
      </div>
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Title">
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text Strong">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#1e1e1e] text-[16px]">Resources</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e1e1e] text-[24px] tracking-[-0.48px] w-full">Mission</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#757575] text-[16px] w-full">
        <p className="mb-0">{`We fills these gaps by bringing Health Savings Accounts (HSAs), financial education, and emotional support into one place. Instead of just tracking the expenses or giving suggestions, our website would focus on helping the users to understand the trade-offs behind their choices based on their personal situation. Through an HSA-focused AI Chatbot, simple budgeting tools, and personalized allocation of income, the proposed project will reduce financial anxiety and build confidence in their saving decisions. `}</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-[160px] relative" data-name="Body">
      <Text />
      <div className="content-stretch flex gap-[16px] items-center shrink-0 w-full" data-name="Button Group" />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e1e1e] text-[24px] tracking-[-0.48px] w-full">Who Are We?</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#757575] text-[16px] w-full">Savvy is our HSA and health financial literacy Chat-bot, trained on survey based scenarios regarding health savings anxiety, catered to answer all your questions and ease your mind.</p>
    </div>
  );
}

function Body1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-[160px] relative" data-name="Body">
      <Text1 />
      <div className="content-stretch flex gap-[16px] items-center shrink-0 w-full" data-name="Button Group" />
    </div>
  );
}

function Cards() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Cards">
      <div className="bg-white min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Card">
        <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-start flex flex-wrap gap-[24px] items-start min-w-[inherit] p-[24px] relative w-full">
          <Body />
        </div>
      </div>
      <div className="bg-white min-w-[240px] relative rounded-[8px] shrink-0 w-full" data-name="Card">
        <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-start flex flex-wrap gap-[24px] items-start min-w-[inherit] p-[24px] relative w-full">
          <Body1 />
        </div>
      </div>
    </div>
  );
}

export default function AboutUs() {
  return (
    <div className="bg-white relative size-full" data-name="About Us">
      <div className="absolute bg-[#e0e1e9] left-0 top-0 w-[988px]" data-name="Header">
        <div className="content-center flex flex-wrap gap-[0px_24px] items-center overflow-clip p-[32px] relative rounded-[inherit] w-full">
          <Block />
          <div className="content-start flex flex-[1_0_0] flex-wrap gap-[8px] items-start justify-end min-h-px min-w-px relative" data-name="Navigation Pill List">
            <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Navigation Pill">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">
                <p className="leading-none">Home Page</p>
              </div>
            </div>
            <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Navigation Pill">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">
                <p className="leading-none">About Us</p>
              </div>
            </div>
            <a className="content-stretch cursor-pointer flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Navigation Pill" href="https://chatbot-37tx6ldxlh6gzz4od3t5oa.streamlit.app/">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-left whitespace-nowrap">
                <p className="leading-none">Savvy</p>
              </div>
            </a>
            <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Navigation Pill">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">
                <p className="leading-none">Resources</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center p-[8px] rounded-[8px] shrink-0" data-name="Navigation Pill" />
            <div className="content-stretch flex items-center justify-center p-[8px] rounded-[8px] shrink-0" data-name="Navigation Pill" />
            <div className="content-stretch flex items-center justify-center p-[8px] rounded-[8px] shrink-0" data-name="Navigation Pill" />
          </div>
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[178px]" data-name="Header Auth">
            <div className="bg-[#e3e3e3] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative w-full">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#1e1e1e] text-[16px]">Sign in</p>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#767676] border-solid inset-0 pointer-events-none rounded-[8px]" />
            </div>
            <div className="bg-[#2c2c2c] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative w-full">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#f5f5f5] text-[16px]">Register</p>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#2c2c2c] border-solid inset-0 pointer-events-none rounded-[8px]" />
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute bg-[#ddfdfe] h-[362px] left-0 top-[1161px] w-[985px]" data-name="Footer">
        <div className="content-start flex flex-wrap gap-[16px] items-start overflow-clip pb-[160px] pt-[32px] px-[32px] relative rounded-[inherit] size-full">
          <Title />
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[262px]" data-name="Text Link List">
            <Title1 />
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text Link List Item">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">
                <p className="leading-[1.4]">UI design</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text Link List Item">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">
                <p className="leading-[1.4]">UX design</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text Link List Item">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">
                <p className="leading-[1.4]">Wireframing</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text Link List Item">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">
                <p className="leading-[1.4]">Diagramming</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text Link List Item">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">
                <p className="leading-[1.4]">Brainstorming</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text Link List Item">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">
                <p className="leading-[1.4]">Online whiteboard</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text Link List Item">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">
                <p className="leading-[1.4]">Team collaboration</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[262px]" data-name="Text Link List">
            <Title2 />
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text Link List Item">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">
                <p className="leading-[1.4]">Design</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text Link List Item">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">
                <p className="leading-[1.4]">Prototyping</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text Link List Item">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">
                <p className="leading-[1.4]">Development features</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text Link List Item">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">
                <p className="leading-[1.4]">Design systems</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text Link List Item">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">
                <p className="leading-[1.4]">Collaboration features</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text Link List Item">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">
                <p className="leading-[1.4]">Design process</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text Link List Item">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">
                <p className="leading-[1.4]">FigJam</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[262px]" data-name="Text Link List">
            <Title3 />
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text Link List Item">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">
                <p className="leading-[1.4]">Blog</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text Link List Item">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">
                <p className="leading-[1.4]">Best practices</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text Link List Item">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">
                <p className="leading-[1.4]">Colors</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text Link List Item">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">
                <p className="leading-[1.4]">Color wheel</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text Link List Item">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">
                <p className="leading-[1.4]">Support</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text Link List Item">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">
                <p className="leading-[1.4]">Developers</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text Link List Item">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">
                <p className="leading-[1.4]">Resource library</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-solid border-t inset-0 pointer-events-none" />
      </div>
      <div className="absolute content-stretch flex flex-col items-center left-0 px-[64px] py-[160px] top-[99px] w-[988px]" data-name="Hero Basic">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#ddfdfe] inset-0" />
          <img alt="" className="absolute max-w-none object-cover opacity-20 size-full" src={imgHeroBasic} />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 text-center" data-name="Text Content Title">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#1e1e1e] text-[72px] tracking-[-2.16px] w-full whitespace-pre-wrap">About Us</p>
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757575] text-[32px] w-full">
            <p className="leading-[1.2] whitespace-pre-wrap">Students designed ChatBot to help students with HSA</p>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#fdfbd4] content-stretch flex flex-col gap-[48px] items-start left-0 p-[64px] top-[551px] w-[988px]" data-name="Card Grid Content List">
        <Cards />
      </div>
    </div>
  );
}