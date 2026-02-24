import svgPaths from '../../imports/svg-2769hc4cgz';

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

export function Footer() {
  return (
    <div className="bg-[#ddfdfe] w-full relative" data-name="Footer">
      <div className="content-center flex flex-wrap gap-[16px] items-center justify-center overflow-clip py-[32px] px-[32px] relative rounded-[inherit] w-full">
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Social Links">
          <XLogo />
          <LogoInstagram />
          <LogoYouTube />
          <LinkedIn />
        </div>
      </div>
      <div aria-hidden="true" className="absolute top-0 left-0 right-0 border-t border-[#d9d9d9] border-solid pointer-events-none" />
    </div>
  );
}