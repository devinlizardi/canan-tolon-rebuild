import mobileHero from "./../public/homepage/iphone_layout.png"
import fullHero from "./../public/homepage/BG.png"

import hoverWorkGrey from "./../public/homepage/work1.png"
import hoverWorkColor from "./../public/homepage/work2.png"
import hoverBioGrey from "./../public/homepage/bio1.png"
import hoverBioColor from "./../public/homepage/bio2.png"

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
        <div className="contents md:hidden">
          <img src={mobileHero} className="w-full max-w-lg h-auto row-start-2 col-start-2" alt="mobile hero" />
        </div>

        <div className="hidden md:block row-start-2 col-start-2 relative w-full h-auto">
          <HomeLink grey={hoverWorkGrey} color={hoverWorkColor} to="/work" style="absolute h-auto z-10 left-0 top-0" />
          <HomeLink grey={hoverBioGrey} color={hoverBioColor} to="/biography" style="absolute h-auto z-10 left-4 top-32"/>
          <img src={fullHero} className="object-fill" alt="mobile hero" />
        </div>
      </div>
    </>
  )
}

export { Home }
