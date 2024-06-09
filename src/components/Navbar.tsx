export default function Navbar() {
  return (
    <nav className="bg-whisper fixed inset-0 flex justify-center items-center w-screen h-min z-50">
      <div className="lg:py-4 px-8 xs:w-full xl:w-2/3 text-sm h-min">
        <ul className="xs:flex lg:hidden w-full xs:justify-between xs:items-center">
          <li className="w-max">
            <div className="w-[15px] h-[44px]">
              <img
                src="/images/icons/Apple.svg"
                alt="Apple"
                className="text-black80 hover:text-black w-full h-full"
              />
            </div>
          </li>
          <li className="w-max">
            <div className="w-full flex items-center gap-3">
              <div className="w-[20px]">
                <img
                  src="/images/icons/Search.svg"
                  alt="Search"
                  className="text-black80 hover:text-black w-full h-full"
                />
              </div>
              <div className="w-[20px]">
                <img
                  src="/images/icons/Bag.svg"
                  alt="Shopping Bag"
                  className="text-black80 hover:text-black w-full h-full"
                />
              </div>
              <div className="w-[20px]">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.46289 11.9973H16.4629"
                    stroke="black"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.46289 4.99731H16.4629"
                    stroke="black"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </li>
        </ul>
        <ul className="w-full xs:hidden lg:flex lg:flex-row lg:gap-4 lg:justify-between lg:items-center">
          <li className="w-max">
            <div className="w-[15px] h-[44px]">
              <img
                src="/images/icons/Apple.svg"
                alt="Apple"
                className="text-black80 hover:text-black w-full h-full"
              />
            </div>
          </li>
          <li className="w-max">
            <a href="#" className="text-black80 font-sfp hover:text-black">
              Store
            </a>
          </li>
          <li className="w-max">
            <a href="#" className="text-black80 font-sfp hover:text-black">
              Mac
            </a>
          </li>
          <li className="w-max">
            <a href="#" className="text-black80 font-sfp hover:text-black">
              iPad
            </a>
          </li>
          <li className="w-max">
            <a href="#" className="text-black80 font-sfp hover:text-black">
              iPhone
            </a>
          </li>
          <li className="w-max">
            <a href="#" className="text-black80 font-sfp hover:text-black">
              Watch
            </a>
          </li>
          <li className="w-max">
            <a href="#" className="text-black80 font-sfp hover:text-black">
              Vision
            </a>
          </li>
          <li className="w-max">
            <a href="#" className="text-black80 font-sfp hover:text-black">
              AirPods
            </a>
          </li>
          <li className="w-max">
            <a href="#" className="text-black80 font-sfp hover:text-black">
              TV & Home
            </a>
          </li>
          <li className="w-max">
            <a href="#" className="text-black80 font-sfp hover:text-black">
              Entertainment
            </a>
          </li>
          <li className="w-max">
            <a href="#" className="text-black80 font-sfp hover:text-black">
              Accessories
            </a>
          </li>
          <li className="w-max">
            <a href="#" className="text-black80 font-sfp hover:text-black">
              Suport
            </a>
          </li>
          <li className="w-max">
            <div className="w-[15px] h-[44px]">
              <img
                src="/images/icons/Search.svg"
                alt="Search"
                className="text-black80 hover:text-black w-full h-full"
              />
            </div>
          </li>
          <li className="w-max">
            <div className="w-[15px] h-[44px]">
              <img
                src="/images/icons/Bag.svg"
                alt="Shopping Bag"
                className="text-black80 hover:text-black w-full h-full"
              />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
