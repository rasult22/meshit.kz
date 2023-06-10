import React, { ReactElement } from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import { Outlet } from 'react-router-dom'
/* TODO: 
  1. Add react-query ✅
  2. Add react-router ✅
  3. Create layout system
  4. Add api type declarations ✅
  5. Add UICell ✅
  6. Add FeatureLessonsList
  7. Add zustand?
*/

function App(): ReactElement {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col w-full h-full px-4 max-w-[450px]">
        <Outlet />
      </div>
    </QueryClientProvider>
  )
}

export default App
