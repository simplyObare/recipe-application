import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Homepage } from './pages/Homepage'
import { RecipePage } from './pages/RecipePage'
import { Header } from './components/Header'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Suspense } from 'react'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/recipe/:name"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <RecipePage />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App
