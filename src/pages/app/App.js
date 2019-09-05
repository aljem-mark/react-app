import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Header, Sidebar } from '~components'
import routes from '~/routes'


function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <div className="flex">
          {routes.map((route) => 
            <Route
              key={route.path}
              exact
              path={route.path}
              render={() => {
                const RouteComponent = route.component
                return (
                  <>
                    {(route.hasOwnProperty('children') && route.children.length > 0) && (
                      <Sidebar />
                    )}
                    <RouteComponent />
                  </>
                )
              }}
            />
          )}
        </div>
      </div>
    </Router>
  )
}

export default App
