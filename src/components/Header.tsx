import imgLogo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="header fixed top-0 left-0 right-0 w-screen bg-primary flex items-center justify-between px-8 md:px-12 lg:px-24 py-5 md:py-8 lg:py-8 text-lg text-quaternary font-montserrat font-medium border-b border-secondary">
      <div className="logo-and-name flex items-center gap-4 ">
        <Link to="/" className="cursor-pointer">
          <div className="logo-img w-8 md:w-10 lg:w-12">
            <img src={imgLogo} alt="" />
          </div>
        </Link>

        <p className="hidden md:block lg:block md:text-xl lg:text-2xl tracking-wider">
          Nuxtcipes
        </p>
      </div>

      <div className="home-link">
        <Link to="/" className="cursor-pointer hover:text-green-500">
          Home
        </Link>
      </div>
    </header>
  )
}
