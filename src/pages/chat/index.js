import { Fragment } from 'react'
import MessageInput from '../../components/messageInput'
import { useAppContext } from '../../hooks/useContext'
import { addMessage } from '../../state/actions'

function ChatPage() {

  const { state: { user, message }, dispatch } = useAppContext()

  const handleChange = e => dispatch(addMessage(e.target.value))

  const handleSubmit = e => {
    e.preventDefault()

    console.log('Jesus is Lord!')
    console.log('Message: ', message)
  }


  console.log(user)

  return (
    <Fragment>
      <MessageInput handleSubmit={handleSubmit} handleChange={handleChange} />
    </Fragment>
  )
}

export default ChatPage
