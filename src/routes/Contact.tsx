import { SimpleNavbar } from "../components/SimpleNavbar"

const Contact = () => {
  return (
    <>
      <SimpleNavbar />
      <div className="mt-40 text-center text-base font-serif font-light text-slate-500 hover:text-slate-800">
        <a href="mailto:info@canantolon.com"> For more info please contact: <br /> info@canantolon.com </a>
      </div>
    </>
  )
}

export { Contact }
