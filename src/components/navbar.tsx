import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'about', href: '#about', current: false },
  { name: 'skills', href: '#skills', current: false },
  { name: 'projects', href: '#projects', current: false },
  { name: 'experience', href: '#experiences', current: false },
  { name: 'contact', href: '#contact', current: false },
]

function classNames(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      <Disclosure as="nav" className="pointer-events-auto bg-slate-400/30 backdrop-blur-md rounded-2xl shadow-lg mt-4">
        <div className="relative flex h-16 items-center justify-center px-4">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-900 hover:text-white focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <nav className="w-full">
              <ul className="flex w-full justify-between items-center" >
                {navigation.map((item) => (
                  <li key={item.name} className="flex-1 text-center">
                    <a
                      href={item.href}
                      aria-current={item.current ? 'page' : undefined}
                      className={classNames(
                        item.current
                          ? 'bg-slate-900 text-white'
                          : 'text-gray-200 hover:text-slate-400',
                        'rounded-xl px-4 py-2 text-base font-medium transition block',
                      )}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        {/* Mobile menu */}
        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3 text-center">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current
                    ? 'bg-slate-900 text-white'
                    : 'text-white hover:bg-slate-700 hover:text-sky-300',
                  'block rounded-xl px-3 py-2 text-base font-medium transition',
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  )
}
