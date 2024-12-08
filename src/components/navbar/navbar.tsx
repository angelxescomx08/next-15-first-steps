import Link from "next/link"
import { ActiveLink } from "../active-link"

const navitems = [
  { name: 'About', path: '/about' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Contact', path: '/contact' },
]

export const Navbar = async () => {
  return (
    <nav className="bg-blue-800 flex bg-opacity-30 p-2 m-2 rounded">
      <Link href={'/'}>
        <span>Home</span>
      </Link>
      <div className="flex flex-1"></div>
      {
        navitems.map((item) => (
          <ActiveLink key={item.path} path={item.path} text={item.name} />
        ))
      }      
    </nav>
  )
}
