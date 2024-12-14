import heroImg from '../assets/images/hero.png'

export const HeroSection = () => {
  return (
    <div className="bg-secondary w-screen lg:h-[110vh] mt-14 md:mt-20 lg:mt-8 flex flex-col lg:flex-row-reverse items-center justify-center gap-4 lg:gap-12 p-8 md:px-12 lg:px-24 py-12 text-lg text-quaternary font-montserrat">
      <div className="hero-img lg:w-1/2">
        <img src={heroImg} alt="hero image" />
      </div>

      <div className="hero-content lg:w-1/2 p-5 lg:p-0 flex flex-col items-center justify-center lg:grid lg:justify-items-start gap-4">
        <h2 className="text-4xl lg:text-5xl text-center lg:text-start text-pretty lg:tracking-wider lg:leading-normal font-normal">
          Master the Kitchen with Ease: Unleash Your Inner Chef Today!
        </h2>
        <p
          className="text-xl lg:text-2xl text-center lg:text-start font-normal text-pretty
        mt-2 lg:max-w-[30vw]"
        >
          Discovery recipes helping you to find the easiest way to cook.
        </p>

        <button className="text-primary bg-tertiary py-2 px-4 mt-4 rounded-lg hover:scale-110 transition duration-300 shadow-xl">
          Browse Recipes
        </button>
      </div>
    </div>
  )
}
