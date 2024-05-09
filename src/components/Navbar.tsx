export default function Navbar() {
  return (
    <nav className="bg-whisper fixed inset-0 flex justify-center items-center w-screen h-min z-50">
      <div className="p-3.5 w-2/3 h-full">
        <ul className="w-full flex flex-row justify-between items-center">
          <li>
            <img
              src="/images/icons/Apple.svg"
              alt="Apple"
              className="text-black80 hover:text-black"
            />
          </li>
          <li>
            <a
              href="#"
              className="text-black80 text-sm font-sfp hover:text-black"
            >
              Store
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black80 text-sm font-sfp hover:text-black"
            >
              Mac
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black80 text-sm font-sfp hover:text-black"
            >
              iPad
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black80 text-sm font-sfp hover:text-black"
            >
              iPhone
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black80 text-sm font-sfp hover:text-black"
            >
              Watch
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black80 text-sm font-sfp hover:text-black"
            >
              Vision
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black80 text-sm font-sfp hover:text-black"
            >
              AirPods
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black80 text-sm font-sfp hover:text-black"
            >
              TV & Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black80 text-sm font-sfp hover:text-black"
            >
              Entertainment
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black80 text-sm font-sfp hover:text-black"
            >
              Accessories
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black80 text-sm font-sfp hover:text-black"
            >
              Suport
            </a>
          </li>
          <li>
            <img
              src="/images/icons/Search.svg"
              alt="Search"
              className="text-black80 hover:text-black"
            />
          </li>
          <li>
            <img
              src="/images/icons/Bag.svg"
              alt="Shopping Bag"
              className="text-black80 hover:text-black"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}
