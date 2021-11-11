import { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import LoginForm from '../../components/form'
import 'react-toastify/dist/ReactToastify.css'
import { useAppContext } from '../../hooks/useContext'
import { addUser } from '../../state/actions'


function Home() {
  const history = useHistory()

  const { dispatch, state: { user } } = useAppContext()

  const handleChange = e => dispatch(addUser(e.target.value))

  const handleSubmit = e => {
    e.preventDefault()

    toast.success(`Welcome to the chat app ${user}`)

    setTimeout(() => history.push('/chat'), 3000)
  }


  return (
    <Fragment>
      <ToastContainer />
      <LoginForm handleChange={handleChange} handleSubmit={handleSubmit} />
    </Fragment>
  )
}


export default Home

