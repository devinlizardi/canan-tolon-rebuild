import mobileHero from "./../public/homepage/iphone_layout.png"
import fullHero from "./../public/homepage/BG.png"
import header from "./../public/homepage/canantolon.png"

import hoverWorkGrey from "./../public/homepage/work1.png"
import hoverWorkColor from "./../public/homepage/work2.png"
import hoverBioGrey from "./../public/homepage/bio1.png"
import hoverBioColor from "./../public/homepage/bio2.png"
import hoverGraphyGrey from "./../public/homepage/graphy1.png"
import hoverGraphyColor from "./../public/homepage/graphy2.png"

import { HomeLink } from "./../components/HomeLink"

const Home = () => {
  return (
    <>
      <div
        className="m-0 bg-[#ccc] w-full min-h-screen h-full
        place-items-center justify-center gap-4 grid 
        grid-cols-[minmax(0,_20px)_minmax(auto,_60rem)_minmax(0,_20px)] 
        grid-rows-[1fr,_min-content,_1fr]"
      >
        {/* mobile */}
        <div className="contents md:hidden">
          <img src={mobileHero} className="w-full max-w-lg h-auto row-start-2 col-start-2" alt="mobile hero" />
        </div>

        {/* desktop */}
        <div className="relative hidden md:block row-start-2 col-start-2 w-fit h-fit">
          <img src={fullHero} className="" alt="mobile hero" />
          <div className="absolute top-0 z-10 w-full h-full">
            <img src={header} />
            <div className="w-full h-fit flex justify-between">
              <HomeLink grey={hoverWorkGrey} color={hoverWorkColor} to="/work" />
              <HomeLink grey={hoverBioGrey} color={hoverBioColor} to="/biography" />
            </div>
            <HomeLink grey={hoverGraphyGrey} color={hoverGraphyColor} to="/biography" />
          </div>
        </div>
      </div>
    </>
  )
}

export { Home }
