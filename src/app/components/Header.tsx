import { Link, useLocation } from 'react-router-dom';

function Block() {
  return (
    <Link to="/" className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#1e1e1e] text-[20px] no-underline hover:opacity-80 transition-opacity" data-name="Brand">
      Heal&Save
    </Link>
  );
}

export function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="bg-[#e0e1e9] w-full relative" data-name="Header">
      <div className="content-center flex flex-wrap gap-[0px_24px] items-center overflow-clip p-[32px] relative rounded-[inherit] w-full">
        <Block />
        <div className="content-start flex flex-[1_0_0] flex-wrap gap-[8px] items-start justify-end min-h-px min-w-px relative" data-name="Navigation Pill List">
          <Link
            to="/"
            className={`${isActive('/') ? 'bg-[#f5f5f5]' : ''} content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[#f5f5f5] transition-colors`}
            data-name="Navigation Pill"
          >
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">
              <p className="leading-none">Home Page</p>
            </div>
          </Link>
          <Link
            to="/about"
            className={`${isActive('/about') ? 'bg-[#f5f5f5]' : ''} content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[#f5f5f5] transition-colors`}
            data-name="Navigation Pill"
          >
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">
              <p className="leading-none">About Us</p>
            </div>
          </Link>
          <Link
            to="/savvy"
            className={`${isActive('/savvy') ? 'bg-[#f5f5f5]' : ''} content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[#f5f5f5] transition-colors`}
            data-name="Navigation Pill"
          >
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">
              <p className="leading-none">Savvy</p>
            </div>
          </Link>
          <Link
            to="/resources"
            className={`${isActive('/resources') ? 'bg-[#f5f5f5]' : ''} content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[#f5f5f5] transition-colors`}
            data-name="Navigation Pill"
          >
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] whitespace-nowrap">
              <p className="leading-none">Resources</p>
            </div>
          </Link>
        </div>
      </div>
      <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 border-b border-[#d9d9d9] border-solid pointer-events-none" />
    </div>
  );
}