import { useState } from "react"
import { HomeLink } from "./../components/HomeLink"
import bg from "./../public/homepage/BG.png"
import canan from "./../public/homepage/canan.png"
import tolon from "./../public/homepage/tolon.png"
import hoverWorkGrey from "./../public/homepage/work1.png"
import hoverWorkColor from "./../public/homepage/work2.png"
import hoverBioGrey from "./../public/homepage/bio1.png"
import hoverBioColor from "./../public/homepage/bio2.png"
import hoverGraphyGrey from "./../public/homepage/graphy1.png"
import hoverGraphyColor from "./../public/homepage/graphy2.png"
import hoverExGrey from "./../public/homepage/ex1.png"
import hoverExColor from "./../public/homepage/ex2.png"
import hoverHibitionsGrey from "./../public/homepage/hibitions1.png"
import hoverHibitionsColor from "./../public/homepage/hibitions2.png"
import hoverPublicatioGrey from "./../public/homepage/publicatio1.png"
import hoverPublicatioColor from "./../public/homepage/publicatio2.png"
import hoverNsGrey from "./../public/homepage/ns1.png"
import hoverNsColor from "./../public/homepage/ns2.png"
import hoverContactGrey from "./../public/homepage/contact1.png"
import hoverContactColor from "./../public/homepage/contact2.png"

const Home = () => {
  const [workHover, setWorkHover] = useState(false)
  const [bioHover, setBioHover] = useState(false)
  const [exhibitHover, setExhibitHover] = useState(false)
  const [publicationsHover, setPublicationsHover] = useState(false)
  const [contactHover, setContactHover] = useState(false)

  const handleMouseOver = (handler: React.Dispatch<React.SetStateAction<boolean>>): void => {
    handler(true)
  }

  const handleMouseOut = (handler: React.Dispatch<React.SetStateAction<boolean>>): void => {
    handler(false)
  }

  return (
    <>
      <div
        className="m-0 bg-[#ccc] w-full min-h-screen h-full
        place-items-center justify-center gap-4 grid 
        grid-cols-[minmax(0,_20px)_minmax(auto,_60rem)_minmax(0,_20px)] 
        grid-rows-[1fr,_min-content,_1fr]"
      >
        {/* mobile */}
        <div className="md:hidden relative row-start-2 col-start-2 w-[362px] min-[565px]:w-[483px] h-fit">
          <img src={bg} className="h-[859px] w-full object-cover" alt="mobile hero" />
          <div className="absolute top-0 z-10 w-full h-full">
            <div className="w-auto h-[6.6%] flex justify-between relative -left-1 top-4">
              <img src={canan} />
              <img src={tolon} className="hidden min-[565px]:block" />
            </div>
            <HomeLink
              className="w-auto h-[10%] relative top-8"
              hover={workHover}
              handleMouseOver={() => handleMouseOver(setWorkHover)}
              handleMouseOut={() => handleMouseOut(setWorkHover)}
              grey={hoverWorkGrey}
              color={hoverWorkColor}
              to="/work"
            />
            <HomeLink
              className="w-auto h-[10%] relative top-12 float-right"
              hover={bioHover}
              handleMouseOver={() => handleMouseOver(setBioHover)}
              handleMouseOut={() => handleMouseOut(setBioHover)}
              grey={hoverBioGrey}
              color={hoverBioColor}
              to="/biography"
            />
            <HomeLink
              className="w-auto h-[10%] relative top-12"
              hover={bioHover}
              handleMouseOver={() => handleMouseOver(setBioHover)}
              handleMouseOut={() => handleMouseOut(setBioHover)}
              grey={hoverGraphyGrey}
              color={hoverGraphyColor}
              to="/biography"
            />
            <HomeLink
              className="w-auto h-[10%] relative top-16"
              hover={exhibitHover}
              handleMouseOver={() => handleMouseOver(setExhibitHover)}
              handleMouseOut={() => handleMouseOut(setExhibitHover)}
              grey={hoverExGrey}
              color={hoverExColor}
              to="/exhibitions"
            />
            <HomeLink
              className="w-auto h-[10%] relative top-16 float-right"
              hover={exhibitHover}
              handleMouseOver={() => handleMouseOver(setExhibitHover)}
              handleMouseOut={() => handleMouseOut(setExhibitHover)}
              grey={hoverHibitionsGrey}
              color={hoverHibitionsColor}
              to="/exhibitions"
            />
            <HomeLink
              className="w-auto h-[10%] relative top-20"
              hover={publicationsHover}
              handleMouseOver={() => handleMouseOver(setPublicationsHover)}
              handleMouseOut={() => handleMouseOut(setPublicationsHover)}
              grey={hoverPublicatioGrey}
              color={hoverPublicatioColor}
              to="/publications"
            />
            <HomeLink
              className="w-auto h-[10%] relative top-20 float-right"
              hover={publicationsHover}
              handleMouseOver={() => handleMouseOver(setPublicationsHover)}
              handleMouseOut={() => handleMouseOut(setPublicationsHover)}
              grey={hoverNsGrey}
              color={hoverNsColor}
              to="/publications"
            />
            <HomeLink
              className="w-auto h-[10%] relative top-24"
              hover={contactHover}
              handleMouseOver={() => handleMouseOver(setContactHover)}
              handleMouseOut={() => handleMouseOut(setContactHover)}
              grey={hoverContactGrey}
              color={hoverContactColor}
              to="/contact"
            />
          </div>
        </div>

        {/* desktop */}
        <div className="relative hidden md:block row-start-2 col-start-2 w-fit h-fit">
          <img src="https://canantolon.b-cdn.net/BG.png" alt="mobile hero" />
          <div className="absolute top-0 z-10 w-full h-full">
            <div className="w-full h-[15.95%] flex justify-between relative -left-2">
              <img src={canan} />
              <img src={tolon} />
            </div>
            <div className="w-full h-[16%] flex justify-between">
              <HomeLink
                className="h-full"
                hover={workHover}
                handleMouseOver={() => handleMouseOver(setWorkHover)}
                handleMouseOut={() => handleMouseOut(setWorkHover)}
                grey={hoverWorkGrey}
                color={hoverWorkColor}
                to="/work"
              />
              <HomeLink
                className="h-full"
                hover={bioHover}
                handleMouseOver={() => handleMouseOver(setBioHover)}
                handleMouseOut={() => handleMouseOut(setBioHover)}
                grey={hoverBioGrey}
                color={hoverBioColor}
                to="/biography"
              />
            </div>
            <div className="w-full h-[16%] flex justify-between">
              <HomeLink
                className="h-full"
                hover={bioHover}
                handleMouseOver={() => handleMouseOver(setBioHover)}
                handleMouseOut={() => handleMouseOut(setBioHover)}
                grey={hoverGraphyGrey}
                color={hoverGraphyColor}
                to="/biography"
              />
              <HomeLink
                className="h-full"
                hover={exhibitHover}
                handleMouseOver={() => handleMouseOver(setExhibitHover)}
                handleMouseOut={() => handleMouseOut(setExhibitHover)}
                grey={hoverExGrey}
                color={hoverExColor}
                to="/exhibitions"
              />
            </div>
            <HomeLink
              className="w-auto h-[16%]"
              hover={exhibitHover}
              handleMouseOver={() => handleMouseOver(setExhibitHover)}
              handleMouseOut={() => handleMouseOut(setExhibitHover)}
              grey={hoverHibitionsGrey}
              color={hoverHibitionsColor}
              to="/exhibitions"
            />
            <HomeLink
              className="w-auto h-[16%]"
              hover={publicationsHover}
              handleMouseOver={() => handleMouseOver(setPublicationsHover)}
              handleMouseOut={() => handleMouseOut(setPublicationsHover)}
              grey={hoverPublicatioGrey}
              color={hoverPublicatioColor}
              to="/publications"
            />
            <div className="w-full h-[16%] flex justify-between">
              <HomeLink
                className="w-auto h-full"
                hover={publicationsHover}
                handleMouseOver={() => handleMouseOver(setPublicationsHover)}
                handleMouseOut={() => handleMouseOut(setPublicationsHover)}
                grey={hoverNsGrey}
                color={hoverNsColor}
                to="/publications"
              />
              <HomeLink
                className="w-auto h-full"
                hover={contactHover}
                handleMouseOver={() => handleMouseOver(setContactHover)}
                handleMouseOut={() => handleMouseOut(setContactHover)}
                grey={hoverContactGrey}
                color={hoverContactColor}
                to="/contact"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { Home }
