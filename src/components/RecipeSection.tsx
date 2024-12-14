import { useQuery } from '@tanstack/react-query'
import { RecipeCard } from './RecipeCard'
import { Suspense } from 'react'

export interface Recipe {
  id: number
  name: string
  ingredients: string[]
  instructions: string[]
  cookTimeMinutes: number
  image: string
  servings: number
  caloriesPerServing: number
  rating: number
}

export const RecipeSection = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['recipes'],
    queryFn: () =>
      fetch('https://dummyjson.com/recipes').then((res) => res.json()),
  })

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <h2>Loading...</h2>
      </div>
    )
  }
  if (isError) {
    return (
      <div className="grid place-content-center w-full h-full">
        <h2>Something went wrong!</h2>
      </div>
    )
  }

  return (
    <div
      className="px-8 py-16 lg:py-12 md:px-12 lg:px-24"
      id="discover-recipes"
    >
      <div className="recipe-header-container">
        <h2 className="text-3xl lg:text-4xl lg:tracking-wide font-normal">
          Discover, Create, Share
        </h2>
        <h3 className="text-xl font-normal mt-2">
          Check out our most popular recipes!
        </h3>
      </div>

      <div className="recipe-cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {data.recipes.map((recipe: Recipe) => (
          <Suspense fallback={<div className="animate-pulse bg-gray-200" />}>
            <RecipeCard recipe={recipe} key={recipe.id} />
          </Suspense>
        ))}
      </div>
    </div>
  )
}
