import React, { ReactElement } from 'react'

import { Outlet } from 'react-router-dom'
/* TODO: 
  1. Add react-query
  2. Add react-router ✅
  3. Create layout system
  4. Add api type declarations
  5. Add UICell
  6. Add FeatureLessonsList
  7. Add zustand?
*/

function App(): ReactElement {
  return (
    <div className="flex flex-col w-full h-full">
      <Outlet />
    </div>
  )
}

export default App
