import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { Recipe } from '../components/RecipeSection'
import { useEffect, useState } from 'react'
import imgClock from '../assets/mdi--clock-time-eight-outline 1.svg'
import imgFire from '../assets/mdi--fire.svg'
import imgStar from '../assets/mdi--star.svg'
import ErrorPage from './ErrorPage'

export const RecipePage = () => {
  const { name } = useParams()
  const [recipes, setRecipes] = useState<Recipe[]>([])

  const { data, isLoading, isError } = useQuery<Recipe>({
    queryKey: ['recipes', name],
    queryFn: () =>
      fetch(`https://dummyjson.com/recipes/search?q=${name}`)
        .then((res) => res.json())
        .then((data) => data.recipes[0]),
  })

  useEffect(() => {
    if (data) {
      setRecipes([data])
    }
  }, [data])

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="loader"></div>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="w-full h-full">
        <ErrorPage />
      </div>
    )
  }

  if (!data) {
    return <h2>No data available</h2>
  }

  return (
    <div className="container font-montserrat mx-auto px-8 lg:px-40 py-5 mt-20 md:mt-28 lg:mt-32">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-details">
          <h1 className="text-4xl lg:text-5xl lg:tracking-wide text-pretty font-normal">
            {recipe.name}
          </h1>
          <div className="container-icons text-xl font-normal my-8">
            <ul className="flex items-center gap-5">
              <li>
                <div className="flex items-center gap-1">
                  <img src={imgClock} alt="" />
                  <p>{recipe.cookTimeMinutes}</p>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-1">
                  <img src={imgFire} alt="" />
                  <p>{recipe.caloriesPerServing}</p>
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
                  <p>{recipe.servings}</p>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-1">
                  <img src={imgStar} alt="" />
                  <p>{recipe.rating}</p>
                </div>
              </li>
            </ul>
          </div>

          <hr className="border-secondary my-10" />

          <div className="img-container h-auto md:h-[65vh] lg:h-[75vh] rounded lg:rounded-md">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full object-cover h-auto md:h-full lg:h-full rounded lg:rounded-md"
            />
          </div>

          <div className="ingredients-container">
            <h2 className="text-3xl font-normal mt-10 mb-4">Ingredients</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1 md:gap-3 lg:gap-4 text-xl font-normal mb-5">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-baseline mb-3">
                  <button
                    className="btn-list w-6 h-6 min-w-fit min-h-fit flex items-center justify-center border border-tertiary rounded-full mr-2 transition duration-300 ease-in-out"
                    onClick={(e) => {
                      e.preventDefault()
                      const btnDot = e.currentTarget.querySelector('.btn-dot')
                      const ingredientText = e.currentTarget
                        .nextElementSibling as HTMLElement

                      if (btnDot && ingredientText) {
                        btnDot.classList.toggle('invisible')
                        btnDot.classList.toggle('visible')
                        ingredientText.style.textDecoration =
                          btnDot.classList.contains('visible')
                            ? 'line-through'
                            : 'none'
                      }
                    }}
                  >
                    <div className="btn-dot invisible w-4 h-4 bg-tertiary m-[0.5px] rounded-full"></div>
                  </button>
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="instructions-container">
            <h2 className="text-3xl font-normal mt-10 mb-4">Instructions</h2>
            <ol className="list-decimal text-xl font-normal mb-5">
              {recipe.instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex items-baseline text-wrap gap-2 mb-4"
                  style={{
                    listStyleType: 'none',
                  }}
                >
                  <div className="flex items-center min-w-[28px] w-7 h-7 bg-tertiary text-primary justify-center rounded-full">
                    <span className="text-sm m-2">{index + 1}</span>
                  </div>
                  {instruction}
                </li>
              ))}
            </ol>
          </div>
        </div>
      ))}
    </div>
  )
}
