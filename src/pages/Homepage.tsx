import { HeroSection } from '../components/HeroSection'
import { RecipeSection } from '../components/RecipeSection'
import { Suspense } from 'react'

export const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <Suspense fallback={<div>Loading...</div>}>
        <RecipeSection />
      </Suspense>
    </div>
  )
}
