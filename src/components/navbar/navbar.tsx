import Link from "next/link"

export const Navbar = async () => {
  return (
    <nav className="bg-blue-800 flex bg-opacity-30 p-2 m-2 rounded">
      <span>Home</span>
      <div className="flex flex-1"></div>
      <Link className="mr-2" href={'/about'}>About</Link>
      <Link className="mr-2" href={'/pricing'}>Pricing</Link>
      <Link className="mr-2" href={'/contact'}>Contact</Link>
    </nav>
  )
}
