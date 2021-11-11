import { Fragment, useState } from 'react'
import { Button } from 'reactstrap'
import MessageBox from '../../components/messageBox'
import MessageInput from '../../components/messageInput'
import { useAppContext } from '../../hooks/useContext'
import { addMessage, logoutUser } from '../../state/actions'

const messages = [
  { user: 'Benga', message: 'Whats up bro' },
  { user: 'Abdul', message: 'Whats up broI am good bro and yourselfs?' }
]



function ChatPage() {
  const [chats, setChats] = useState(messages)

  const { state: { user, message }, dispatch } = useAppContext()

  const handleChange = e => dispatch(addMessage(e.target.value))

  const handleSubmit = e => {
    e.preventDefault()

    const newMessage = {
      user,
      message,
    }

    setChats(chats => [...chats, newMessage])

    dispatch(addMessage(''))
  }

  const handleLogout = () => dispatch(logoutUser())

  return (
    <Fragment>
      <MessageInput message={message} handleSubmit={handleSubmit} handleChange={handleChange} />
      <MessageBox chat={chats} activeUsers={[...new Set(chats.map(message => message.user))].length} />
      <Button onClick={handleLogout} className="mt-5" color="danger">Leave Chat</Button>
    </Fragment>
  )
}

export default ChatPage
