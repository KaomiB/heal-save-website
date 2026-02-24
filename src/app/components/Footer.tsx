import svgPaths from '../../imports/svg-2769hc4cgz';

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

export function Footer() {
  return (
    <div className="bg-[#ddfdfe] w-full relative" data-name="Footer">
      <div className="content-start flex flex-wrap gap-[16px] items-start overflow-clip pb-[160px] pt-[32px] px-[32px] relative rounded-[inherit] w-full">
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
      <div aria-hidden="true" className="absolute top-0 left-0 right-0 border-t border-[#d9d9d9] border-solid pointer-events-none" />
    </div>
  );
}