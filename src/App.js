import { useEffect, useReducer } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ProtectRoute from './components/protectedRoute'
import Context from './hooks/context'
import ChatPage from './pages/chat'
import Home from './pages/home'
import reducer, { initializer, initialState } from './state/reducer'


function App() {
  const [state, dispatch] = useReducer(reducer, initialState, initializer)

  useEffect(() => {
    localStorage.setItem('chatState', JSON.stringify(state))
  }, [state])

  const { isLoggedIn } = state

  return (
    <BrowserRouter>
      <Context.Provider value={{ state, dispatch }}>
        <Switch>
          <Route exact path="/" component={isLoggedIn ? ChatPage : Home} />
          <ProtectRoute exact path="/chat" component={ChatPage} />
        </Switch>
      </Context.Provider>
    </BrowserRouter>
  )
}

export default App
