import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useThemeImage } from '../../hooks/useThemeImage';
import imgHeroBasic from '../../assets/af02000a7f8b6d610fec4c836770abb05f9b1e7d.png';
import imgHeroBasicDark from '../../assets/af02000a7f8b6d610fec4c836770abb05f9b1e7d-dark.png';

const D = {
  page: 'dark:bg-[#09090b]',
  heroTint: 'dark:bg-gradient-to-b dark:from-[#0c0a0c] dark:to-[#0a090b]',
  hub: 'dark:bg-[#111113]',
  card: 'dark:bg-[#18181b]',
  cardBorder: 'dark:border-white/[0.08]',
  title: 'dark:text-[#fafafa]',
  body: 'dark:text-[#a1a1aa]',
} as const;

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap" data-name="Text">
      <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e1e1e] ${D.title} text-[24px] tracking-[-0.48px] w-full`}>
        Mission
      </p>
      <div className={`font-['Inter:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#757575] ${D.body} text-[16px] w-full`}>
        <p className="mb-0">{`We fills these gaps by bringing Health Savings Accounts (HSAs), financial education, and emotional support into one place. Instead of just tracking the expenses or giving suggestions, our website would focus on helping the users to understand the trade-offs behind their choices based on their personal situation. Through an HSA-focused AI Chatbot, simple budgeting tools, and personalized allocation of income, the proposed project will reduce financial anxiety and build confidence in their saving decisions. `}</p>
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
      <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e1e1e] ${D.title} text-[24px] tracking-[-0.48px] w-full`}>
        Who Are We?
      </p>
      <p className={`font-['Inter:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#757575] ${D.body} text-[16px] w-full`}>
        We are a team of four college students passionate about making healthcare finances easier to understand. As students ourselves, we realized how confusing Health Savings Accounts (HSAs) can be. That's why we built Savvy to help people like us learn, navigate, and make smarter decisions about their HSAs.
      </p>
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
      <div className={`bg-white min-w-[240px] relative rounded-[8px] shrink-0 w-full ${D.card}`} data-name="Card">
        <div
          aria-hidden="true"
          className={`absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px] ${D.cardBorder}`}
        />
        <div className="content-start flex flex-wrap gap-[24px] items-start min-w-[inherit] p-[24px] relative w-full">
          <Body />
        </div>
      </div>
      <div className={`bg-white min-w-[240px] relative rounded-[8px] shrink-0 w-full ${D.card}`} data-name="Card">
        <div
          aria-hidden="true"
          className={`absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px] ${D.cardBorder}`}
        />
        <div className="content-start flex flex-wrap gap-[24px] items-start min-w-[inherit] p-[24px] relative w-full">
          <Body1 />
        </div>
      </div>
    </div>
  );
}

export default function AboutUs() {
  const heroSrc = useThemeImage(imgHeroBasic, imgHeroBasicDark);

  return (
    <div className={`bg-white min-h-screen flex flex-col ${D.page}`} data-name="About Us">
      <Header />

      <div className="content-stretch flex flex-col items-center px-[64px] py-[160px] w-full relative" data-name="Hero Basic">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className={`absolute bg-[#ddfdfe] inset-0 ${D.heroTint}`} />
          <img
            alt=""
            className="absolute max-w-none object-cover opacity-20 dark:opacity-[0.14] size-full"
            src={heroSrc}
            key={heroSrc}
          />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 text-center z-10" data-name="Text Content Title">
          <p className={`font-['Inter:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#1e1e1e] ${D.title} text-[72px] tracking-[-2.16px] w-full whitespace-pre-wrap`}>
            About Us
          </p>
          <div className={`flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757575] ${D.body} text-[32px] w-full`}>
            <p className="leading-[1.2] whitespace-pre-wrap">Students designed ChatBot to help students with HSA</p>
          </div>
        </div>
      </div>

      <div className={`bg-[#fdfbd4] content-stretch flex flex-col gap-[48px] items-start p-[64px] w-full ${D.hub}`} data-name="Card Grid Content List">
        <Cards />
      </div>

      <Footer />
    </div>
  );
}
