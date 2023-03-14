import { NavLink } from "react-router-dom"
import { Disclosure } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

const activeClassName = "text-white px-1 py-0 text-md font-bold uppercase ring-4 ring-red-300"
const passiveClassName = "text-white px-1 py-0 text-md font-bold uppercase hover:ring-4 hover:ring-red-300"

const navigation = [
  { name: "canantolon", href: "/" },
  { name: "work", href: "/work" },
  { name: "biography", href: "/biography" },
  { name: "exhibitions", href: "/exhibitions" },
  { name: "publications", href: "/publications" },
  { name: "contact", href: "/contact" },
]

function SimpleNavbar() {
  return (
    <Disclosure as="nav" className="bg-[#ccc]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-white outline-none hover:bg-gray-400 focus:ring-4 focus:ring-inset focus:ring-red-300">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({ isActive }) => (isActive ? activeClassName : passiveClassName)}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 flex flex-col">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) => (isActive ? activeClassName : passiveClassName)}
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
