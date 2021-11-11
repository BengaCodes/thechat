import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ChatPage from './pages/chat'
import Home from './pages/home'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/chat" component={ChatPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
