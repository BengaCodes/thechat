import { Fragment, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import LoginForm from '../../components/form'
import 'react-toastify/dist/ReactToastify.css'


function Home() {
  const [userName, setUserName] = useState('')

  const history = useHistory()


  const handleChange = e => setUserName(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()

    toast.success(`Welcome to the chat app ${userName}`)

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

