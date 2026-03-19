function GitHubIcon() {
  return (
    <svg aria-hidden="true" className="size-[20px]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12C0 17.3 3.438 21.8 8.205 23.385C8.805 23.495 9.025 23.125 9.025 22.81C9.025 22.53 9.015 21.595 9.01 20.355C5.672 21.08 4.968 18.745 4.968 18.745C4.422 17.36 3.633 16.99 3.633 16.99C2.545 16.245 3.715 16.26 3.715 16.26C4.922 16.345 5.557 17.5 5.557 17.5C6.625 19.33 8.36 18.8 9.05 18.495C9.16 17.72 9.47 17.19 9.81 16.89C7.145 16.585 4.345 15.555 4.345 10.965C4.345 9.655 4.81 8.585 5.58 7.745C5.455 7.44 5.045 6.22 5.695 4.57C5.695 4.57 6.705 4.245 8.995 5.795C9.955 5.525 10.985 5.39 12.01 5.385C13.035 5.39 14.065 5.525 15.025 5.795C17.315 4.245 18.325 4.57 18.325 4.57C18.975 6.22 18.565 7.44 18.44 7.745C19.21 8.585 19.675 9.655 19.675 10.965C19.675 15.565 16.87 16.58 14.2 16.88C14.63 17.25 15.015 17.975 15.015 19.085C15.015 20.675 15 21.955 15 22.81C15 23.125 15.215 23.5 15.825 23.38C20.59 21.795 24.025 17.295 24.025 12C24.025 5.37 18.655 0 12.025 0H12Z" />
    </svg>
  );
}

function RepoLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-[10px] rounded-full border border-[#767676]/40 px-[14px] py-[8px] text-[#1e1e1e] dark:text-[#e2e8f0] no-underline transition-colors hover:bg-white/50 dark:hover:bg-[#143029]"
    >
      <GitHubIcon />
      <span className="font-['Inter:Medium',sans-serif] text-[14px] leading-none">{label}</span>
    </a>
  );
}

export function Footer() {
  return (
    <div className="bg-[#ddfdfe] dark:bg-[#0d221d] dark:border-t dark:border-[#264d42] w-full relative" data-name="Footer">
      <div className="content-center flex flex-wrap gap-[16px] items-center justify-center overflow-clip py-[32px] px-[32px] relative rounded-[inherit] w-full">
        <div
          className="content-stretch flex flex-wrap gap-[12px] items-center justify-center relative shrink-0"
          data-name="Social Links"
        >
          <RepoLink href="https://github.com/kaomib/chatbot" label="Chatbot Repo" />
          <RepoLink href="https://github.com/kaomib/heal-save-website" label="Website Repo" />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 border-t border-[#d9d9d9] dark:border-[#264d42] border-solid pointer-events-none"
      />
    </div>
  );
}