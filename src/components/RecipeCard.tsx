import { Recipe } from './RecipeSection'
import imgClock from '../assets/mdi--clock-time-eight-outline 1.svg'
import imgFire from '../assets/mdi--fire.svg'
import imgStar from '../assets/mdi--star.svg'
import { Link } from 'react-router-dom'

interface RecipeCardProps {
  recipe: Recipe
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe: {
    image,
    name,
    cookTimeMinutes,
    caloriesPerServing,
    servings,
    rating,
  },
}) => {
  return (
    <div className="recipe-card rounded-xl shadow-xl text-xl font-normal">
      <div className="img-container">
        <img src={image} alt="" className="object-cover rounded-t-xl" />
      </div>

      <div className="content-container flex flex-col gap-5 px-5 py-8">
        <h1>{name}</h1>
        <div className="container-icons">
          <ul className="flex items-center gap-5">
            <li>
              <div className="flex items-center gap-1">
                <img src={imgClock} alt="" />
                <p>{cookTimeMinutes}</p>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-1">
                <img src={imgFire} alt="" />
                <p>{caloriesPerServing}</p>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-1">
                <div className="group mr-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.6"
                    stroke="#f79f1a"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                    />
                  </svg>
                </div>
                <p>{servings}</p>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-1">
                <img src={imgStar} alt="" />
                <p>{rating}</p>
              </div>
            </li>
          </ul>
        </div>
        <Link to={`/recipe/${name}`}>
          <button className="text-primary font-semibold bg-tertiary py-2 px-5 mt-4 rounded-lg hover:scale-110 transition duration-300 shadow-xl w-fit">
            View
          </button>
        </Link>
      </div>
    </div>
  )
}
