import { NavLink } from "react-router-dom"
import { Disclosure } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

const baseActiveClass = "px-1"

const baseNavInfo = [
  { name: "canan tolon", color: "ring-red-300" },
  { name: "work", color: "ring-orange-300" },
  { name: "biography", color: "ring-yellow-300" },
  { name: "exhibitions", color: "ring-purple-300" },
  { name: "publications", color: "ring-blue-300" },
  { name: "contact", color: "ring-green-300" },
]

const navigation = baseNavInfo.map((elem) => {
  return {
    name: elem.name,
    href: elem.name === "canan tolon" ? "/" : `/${elem.name}`,
    activeClassName: baseActiveClass + ` ring-4 ${elem.color}`,
    passiveClassName: baseActiveClass + ` ring-0 ${elem.color} hover:ring-4`,
  }
})

function SimpleNavbar() {
  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8 selection:bg-black selection:text-white">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-[#4d4d4d] outline-none hover:bg-gray-200 focus:ring-4 focus:ring-inset focus:ring-red-300">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-center">
                <div className="hidden md:ml-6 md:block">
                  <div className="flex space-x-4 text-[#4d4d4d] px-1 py-0 text-md font-bold uppercase">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({ isActive }) => (isActive ? item.activeClassName : item.passiveClassName)}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 pt-2 pb-3 mx-2 flex flex-col text-[#4d4d4d] text-md font-bold uppercase">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) => (isActive ? item.activeClassName : item.passiveClassName)}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export { SimpleNavbar }
