import { Fragment } from 'react'
import MessageBox from '../../components/messageBox'
import MessageInput from '../../components/messageInput'
import { useAppContext } from '../../hooks/useContext'
import { addMessage } from '../../state/actions'

const messages = [
  { user: 'Benga', message: 'Whats up bro' },
  { user: 'Abdul', message: 'Whats up broI am good bro and yourselfs?' }
]



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
      <MessageBox chat={messages} activeUsers={[...new Set(messages.map(message => message.user))].length} />
    </Fragment>
  )
}

export default ChatPage
