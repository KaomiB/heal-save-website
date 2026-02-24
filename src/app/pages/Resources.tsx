import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e1e1e] text-[24px] tracking-[-0.48px] w-full">Survey</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#757575] text-[16px] w-full">Help us improve our service by telling us what you struggle with!</p>
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-[160px] relative" data-name="Body">
      <Text />
      <div className="content-stretch flex gap-[16px] items-center shrink-0 w-full" data-name="Button Group">
        <a 
          className="bg-[#e3e3e3] cursor-pointer relative rounded-[8px] shrink-0 hover:bg-[#d9d9d9] transition-colors" 
          data-name="Button" 
          href="https://docs.google.com/forms/d/e/1FAIpQLSfPoOqW7dcyrI2l1v30e78-RnP04WlRQaAgeYqIPd7P0JNlRA/viewform?usp=dialog"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[12px] relative rounded-[inherit]">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-left">Survey</p>
          </div>
          <div aria-hidden="true" className="absolute border border-[#767676] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </a>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e1e1e] text-[24px] tracking-[-0.48px] w-full">Publication</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#757575] text-[16px] w-full">
        <p className="leading-[1.4] mb-0">{`We use reliable sources to build Savvy, including: `}</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[24px]">
            <span className="leading-[1.4]">Internal Revenue Service (IRS)</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span className="leading-[1.4]">Consumer Financial Protection Bureau (CFPB)</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span className="leading-[1.4]">U.S. Government Accountability Office (GAO)</span>
          </li>
          <li className="ms-[24px]">
            <span className="leading-[1.4]">HSAList.org, and more...</span>
          </li>
        </ul>
      </div>
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

export default function Resources() {
  return (
    <div className="bg-white min-h-screen flex flex-col" data-name="Resources">
      <Header />

      {/* Hero Basic */}
      <div className="bg-[#ddfdfe] content-stretch flex flex-col items-center px-[64px] py-[160px] w-full" data-name="Hero Basic">
        <div className="content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 text-center" data-name="Text Content Title">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#1e1e1e] text-[72px] tracking-[-2.16px] w-full whitespace-pre-wrap">Resources</p>
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757575] text-[32px] w-full">
            <p className="leading-[1.2] whitespace-pre-wrap">&nbsp;</p>
          </div>
        </div>
      </div>

      {/* Card Grid Content List */}
      <div className="bg-[#fdfbd4] content-stretch flex flex-col gap-[48px] items-start p-[64px] w-full" data-name="Card Grid Content List">
        <Cards />
      </div>

      <Footer />
    </div>
  );
}
