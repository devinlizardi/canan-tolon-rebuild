import { useState } from "react"
import { HomeLink } from "./../components/HomeLink"
import bg from "./../public/homepage/BG.png"
import mobile from "./../public/homepage/phone/iphone-background.jpeg"
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
import { Link } from "react-router-dom"

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
      {/* mobile */}
      <div className="md:hidden grid place-content-center p-4 w-screen h-screen">
          <div className="w-full h-full">
          <img src={mobile} className="" alt="mobile hero" />
            <Link to={"/work"} className="absolute top-[72px] right-0 w-[290px] h-[68px]"/>
            <Link to={"/biography"} className="absolute top-[148px] left-0 w-[180px] h-[68px] "/>
            <Link to={"/biography"} className="absolute top-[225px] left-0 w-[390px] h-[68px] "/>
            <Link to={"/exhibitions"} className="absolute top-[303px] right-0 w-[410px] h-[68px] "/>
            <Link to={"/exhibitions"} className="absolute top-[388px] right-0 w-[290px] h-[73px] "/>
            <Link to={"/publications"} className="absolute top-[468px] right-0 w-[450px] h-[153px] "/>
            <Link to={"/contact"} className="absolute top-[635px] right-0 w-[460px] h-[70px] "/>
          </div>
        </div>

      <div
        className="hidden md:grid m-0 w-full min-h-screen h-full
        place-items-center justify-center gap-4 
        grid-cols-[minmax(0,_20px)_minmax(auto,_60rem)_minmax(0,_20px)] 
        grid-rows-[1fr,_min-content,_1fr]"
      >
        {/* desktop */}
        <div className="relative hidden md:block row-start-2 col-start-2 w-fit h-fit">
          <img src={bg} alt="mobile hero" />
          <div className="absolute top-0 z-10 w-full h-full">
            <div className="w-full h-[15.85%] flex justify-between relative -left-2 mt-1 mb-7">
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
