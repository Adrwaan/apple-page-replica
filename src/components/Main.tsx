import styles from "../styles/Main.module.css";

export default function Main() {
  return (
    <main className="w-screen flex flex-col gap-y-4">
      <section
        className={`w-full h-screen flex justify-center items-center relative ${styles.section1}`}
      >
        <h1 className="absolute top-[70%] text-shark left-1/2 font-semibold text-5xl text-center -translate-x-1/2 -translate-y-1/2 font-sfp">
          Mother’s Day
        </h1>
        <h2 className="absolute top-[77.5%] text-shark left-1/2 font-normal text-2xl text-center -translate-x-1/2 -translate-y-1/2 font-sfp">
          Find the perfect gift for Mom.
        </h2>
        <button className="absolute top-[86%] left-1/2 text-white font-medium transition-all duration-500 bg-sci_blue-base border border-solid border-sci_blue-base hover:bg-transparent hover:text-sci_blue-base px-5 py-3 rounded-full text-center -translate-x-1/2 -translate-y-1/2 font-sfp">
          Shop
        </button>
      </section>
      <section
        className={`w-full h-screen flex justify-center items-center relative ${styles.section2}`}
      >
        <img
          className="absolute w-full top-[73%] left-1/2 -translate-x-1/2 -translate-y-1/2"
          src="/images/sections/vision.png"
          alt="Apple Vision Pro"
        />
        <h2 className="text-white text-center text-2xl absolute top-[81%] left-1/2 -translate-x-1/2 -translate-y-1/2 font-sfp">
          You’ve never seen everything like this before.
        </h2>
        <div className="flex justify-center items-center absolute top-[95%] left-[55%] -translate-x-1/2 -translate-y-1/2">
          <button className="text-black border border-solid border-athens_gray font-medium transition-all duration-500 bg-athens_gray hover:bg-transparent hover:text-white px-5 py-3 rounded-full text-center -translate-x-1/2 -translate-y-1/2 font-sfp">
            Learn more
          </button>
          <button className="text-white border border-solid border-athens_gray font-medium transition-all duration-500 bg-transparent hover:bg-athens_gray hover:text-black px-5 py-3 rounded-full text-center -translate-x-1/2 -translate-y-1/2 font-sfp">
            Buy
          </button>
        </div>
      </section>
      <section
        className={`w-full h-screen flex justify-center items-center relative ${styles.section3}`}
      >
        <h2 className="absolute top-[72%] text-shark left-1/2 font-semibold text-5xl text-center -translate-x-1/2 -translate-y-1/2 font-sfp">
          Apple Event
        </h2>
        <h2 className="absolute top-[79.5%] text-shark left-1/2 font-normal text-center -translate-x-1/2 -translate-y-1/2 font-sfps">
          Watch online on 5/7 at 7 a.m. PT.
        </h2>
        <button className="absolute top-[88%] left-1/2 text-white font-medium transition-all duration-500 bg-sci_blue-base border border-solid border-sci_blue-base hover:bg-transparent hover:text-sci_blue-base px-5 py-3 rounded-full text-center -translate-x-1/2 -translate-y-1/2 font-sfp">
          Learn more
        </button>
      </section>
      <section className="w-screen gap-y-2 flex flex-row flex-wrap justify-start">
        <div className={`w-1/2 h-[560px] relative ${styles.iphonepro}`}>
          <h3 className="text-white w-full text-center font-sfp font-semibold text-4xl absolute top-[12%] left-1/2 -translate-x-1/2 -translate-y-1/2">
            iPhone 15 Pro
          </h3>
          <p className="text-white w-full font-sfp font-light text-xl text-center absolute top-[18%] left-1/2 -translate-x-1/2 -translate-y-1/2">
            Titanium. So strong. So light. So Pro.
          </p>
          <div className="flex flex-wrap justify-center gap-2 w-full absolute top-[26%] left-1/2 -translate-x-1/2 -translate-y-1/2">
            <button className="text-white font-medium transition-all duration-500 bg-sci_blue-base border border-solid border-sci_blue-base hover:bg-transparent hover:text-sci_blue-base px-5 py-3 rounded-full text-center font-sfp">
              Learn more
            </button>
            <button className="hover:text-white font-medium transition-all duration-500 hover:bg-sci_blue-base border border-solid border-sci_blue-base bg-transparent text-sci_blue-base px-5 py-3 rounded-full text-center font-sfp">
              Buy
            </button>
          </div>
        </div>
        <div className={`w-1/2 h-[560px] relative ${styles.iphone}`}>
          <h3 className="text-black w-full text-center font-sfp font-semibold text-4xl absolute top-[12%] left-1/2 -translate-x-1/2 -translate-y-1/2">
            iPhone 15
          </h3>
          <p className="text-black w-full font-sfp font-light text-xl text-center absolute top-[18%] left-1/2 -translate-x-1/2 -translate-y-1/2">
            New camera. New design. Newphoria.
          </p>
          <div className="flex flex-wrap justify-center gap-2 w-full absolute top-[26%] left-1/2 -translate-x-1/2 -translate-y-1/2">
            <button className="text-white font-medium transition-all duration-500 bg-sci_blue-base border border-solid border-sci_blue-base hover:bg-transparent hover:text-sci_blue-base px-5 py-3 rounded-full text-center font-sfp">
              Learn more
            </button>
            <button className="hover:text-white font-medium transition-all duration-500 hover:bg-sci_blue-base border border-solid border-sci_blue-base bg-transparent text-sci_blue-base px-5 py-3 rounded-full text-center font-sfp">
              Buy
            </button>
          </div>
        </div>
        <div className={`w-1/2 h-[560px] relative ${styles.watch}`}>
          <img
            src="./images/products/watch-logo.png"
            className="w-3/4 absolute top-[15%] left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
          <p className="text-white w-full font-sfp font-light text-xl text-center absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2">
            Smarter. Brighter. Mightier.
          </p>
          <div className="flex flex-wrap justify-center gap-2 w-full absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2">
            <button className="text-white font-medium transition-all duration-500 bg-sci_blue-base border border-solid border-sci_blue-base hover:bg-transparent hover:text-sci_blue-base px-5 py-3 rounded-full text-center font-sfp">
              Learn more
            </button>
            <button className="hover:text-white font-medium transition-all duration-500 hover:bg-sci_blue-base border border-solid border-sci_blue-base bg-transparent text-sci_blue-base px-5 py-3 rounded-full text-center font-sfp">
              Buy
            </button>
          </div>
        </div>
        <div className={`w-1/2 h-[560px] relative ${styles.macbook}`}>
          <h3 className="text-black w-full text-center font-sfp font-semibold text-4xl absolute top-[12%] left-1/2 -translate-x-1/2 -translate-y-1/2">
            MacBook Air
          </h3>
          <p className="text-black w-full font-sfp font-light text-xl text-center absolute top-[18%] left-1/2 -translate-x-1/2 -translate-y-1/2">
            Lean. Mean. M3 machine.
          </p>
          <div className="flex flex-wrap justify-center gap-2 w-full absolute top-[26%] left-1/2 -translate-x-1/2 -translate-y-1/2">
            <button className="text-white font-medium transition-all duration-500 bg-sci_blue-base border border-solid border-sci_blue-base hover:bg-transparent hover:text-sci_blue-base px-5 py-3 rounded-full text-center font-sfp">
              Learn more
            </button>
            <button className="hover:text-white font-medium transition-all duration-500 hover:bg-sci_blue-base border border-solid border-sci_blue-base bg-transparent text-sci_blue-base px-5 py-3 rounded-full text-center font-sfp">
              Buy
            </button>
          </div>
        </div>
        <div className={`w-1/2 h-[560px] relative ${styles.card}`}>
          <img
            src="./images/products/card-logo.png"
            className="w-3/4 absolute top-[15%] left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
          <p className="text-black w-full font-sfp font-light text-xl text-center absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2">
            Get up to 3% Daily Cash back
            <br /> with every purchase.
          </p>
          <div className="flex flex-wrap justify-center gap-2 w-full absolute top-[37%] left-1/2 -translate-x-1/2 -translate-y-1/2">
            <button className="text-white font-medium transition-all duration-500 bg-sci_blue-base border border-solid border-sci_blue-base hover:bg-transparent hover:text-sci_blue-base px-5 py-3 rounded-full text-center font-sfp">
              Learn more
            </button>
            <button className="hover:text-white font-medium transition-all duration-500 hover:bg-sci_blue-base border border-solid border-sci_blue-base bg-transparent text-sci_blue-base px-5 py-3 rounded-full text-center font-sfp">
              Apply now
            </button>
          </div>
        </div>
        <div className={`w-1/2 h-[560px] relative ${styles.trade}`}>
          <img
            src="./images/products/trade-logo.png"
            className="w-3/4 absolute top-[15%] left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
          <p className="text-black w-full font-sfp font-light text-xl text-center absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2">
            Get $170-$630 in credit when you
            <br /> trade in iPhone 11 or higher.
          </p>
          <div className="flex flex-wrap justify-center gap-2 w-full absolute top-[37%] left-1/2 -translate-x-1/2 -translate-y-1/2">
            <button className="text-white font-medium transition-all duration-500 bg-sci_blue-base border border-solid border-sci_blue-base hover:bg-transparent hover:text-sci_blue-base px-5 py-3 rounded-full text-center font-sfp">
              Get your estimate
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
