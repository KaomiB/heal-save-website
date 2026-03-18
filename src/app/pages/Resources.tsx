import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const HELPFUL_LINKS = [
  {
    name: 'IRS',
    href: 'https://www.irs.gov/government-entities/federal-state-local-governments/where-can-i-learn-more-about-health-savings-accounts-hsa-and-health-reimbursement-arrangements-hra',
    description: 'Official government guidance on HSA rules, contribution limits, eligibility, and qualified medical expenses.',
  },
  {
    name: 'Fidelity',
    href: 'https://www.fidelity.com/go/hsa/why-hsa',
    description: 'Provides educational guides and tools to help individuals understand how HSAs work and maximize their tax advantages.',
  },
  {
    name: 'UCI',
    href: 'https://ucnet.universityofcalifornia.edu/benefits/health-welfare/health-savings-account-hsa/',
    description: 'Offers healthcare benefit information and resources to help students and employees understand health coverage and savings options.',
  },
];

const SURVEY_LINKS = [
  {
    name: 'Financial Planning & Healthcare Survey',
    href: 'https://forms.gle/KvwRVWsRyoJLFS7x6',
    description: 'Share your demographics to help us tailor our website and resources to better meet your financial and healthcare planning needs.',
  },
  {
    name: "User's Experience Survey",
    href: 'https://forms.gle/sBg77gFAt8SjcXFM6',
    description: "Share your feedback on our website's functionality and design so we can continue improving your experience.",
  },
];

export default function Resources() {
  return (
    <div className="bg-white dark:bg-[#09090b] min-h-screen flex flex-col" data-name="Resources">
      <Header />

      <div
        className="bg-[#ddfdfe] dark:bg-gradient-to-b dark:from-[#0c0a0c] dark:via-[#100e11] dark:to-[#0a090b] dark:border-b dark:border-white/[0.06] content-stretch flex flex-col items-center px-[64px] py-[160px] w-full"
        data-name="Hero Basic"
      >
        <div className="content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 text-center" data-name="Text Content Title">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#1e1e1e] dark:text-[#fafafa] text-[72px] tracking-[-2.16px] w-full whitespace-pre-wrap">
            Resources
          </p>
        </div>
      </div>

      <div
        className="bg-[#fdfbd4] dark:bg-[#111113] content-stretch flex flex-col gap-[48px] items-start p-[64px] w-full"
        data-name="Card Grid Content List"
      >
        <div
          className="bg-white dark:bg-[#18181b] border border-[#ddddd8] dark:border-white/[0.08] border-solid rounded-[6px] p-[24px] w-full max-w-[858px]"
          data-name="Card"
        >
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] text-[#1e1e1e] dark:text-[#fafafa] text-[24px] tracking-[-0.48px] mb-[24px]">
            Helpful Pages
          </p>
          <div className="flex flex-col gap-[28px]">
            {HELPFUL_LINKS.map(({ name, href, description }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-['Inter:Regular',sans-serif] font-normal text-[20px] text-[#757575] dark:text-[#a1a1aa] leading-[1.4] no-underline hover:text-[#1e1e1e] dark:hover:text-[#fb7185] transition-colors block"
              >
                <span className="underline decoration-solid">{name}</span>
                <span>: {description}</span>
              </a>
            ))}
          </div>
        </div>

        <div
          className="bg-white dark:bg-[#18181b] border border-[#ddddd8] dark:border-white/[0.08] border-solid rounded-[6px] p-[24px] w-full max-w-[858px]"
          data-name="Card"
        >
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] text-[#1e1e1e] dark:text-[#fafafa] text-[24px] tracking-[-0.48px] mb-[24px]">
            Help Us Improve
          </p>
          <div className="flex flex-col gap-[28px]">
            {SURVEY_LINKS.map(({ name, href, description }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-['Inter:Regular',sans-serif] font-normal text-[20px] text-[#757575] dark:text-[#a1a1aa] leading-[1.4] no-underline hover:text-[#1e1e1e] dark:hover:text-[#fb7185] transition-colors block"
              >
                <span className="underline decoration-solid">{name}</span>
                <span>: {description}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
