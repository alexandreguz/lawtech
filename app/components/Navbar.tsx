import Link from "next/link";


const Navbar = () => {
    return (
        <nav className="bg-slate-400 w-4/5 mr-auto ml-auto p-4 mt-3 rounded">
        <div className="text-blue-800 font-bold text-lg flex justify-between">
          <p >LAW TECH</p>
          <ul className="flex items-center">
            <li className="opacity-75 text-sm hover:opacity-100 duration-150 mr-5"> <Link href="/">Home</Link></li>
            <li className="opacity-75 text-sm hover:opacity-100 duration-150 mr-5"><Link href="/about">About</Link></li>
            <li className="opacity-75 text-sm hover:opacity-100 duration-150 mr-5 "><Link href="/testimonials">Testimonials</Link></li>
            <li className="opacity-75 text-sm hover:opacity-100 duration-150 mr-5 "><Link href="/pricing">Pricing</Link></li>
            <li className="opacity-75 text-sm hover:opacity-100 duration-150 mr-5 "><Link href="/how_it_works">How It Works</Link></li>
            <li className="opacity-60 text-sm hover:opacity-100 duration-150 mr-5 text-slate-800"><Link href="/login">Login</Link></li>
            <li className="opacity-60 text-sm hover:opacity-100 duration-150 mr-5 text-red-800"><Link href="/create_account">Create Account</Link></li>

          </ul>
        </div>
      </nav>
    )
}

export default Navbar