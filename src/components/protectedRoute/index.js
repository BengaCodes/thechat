import { Redirect, Route } from 'react-router-dom'
import { useAppContext } from '../../hooks/useContext'

function ProtectRoute({ component: Component, ...restOfProps }) {

  const { state: { isLoggedIn } } = useAppContext()


  return (
    <Route {...restOfProps} render={props => isLoggedIn ? <Component {...props} /> : <Redirect to="/" />} />
  )
}

export default ProtectRoute
