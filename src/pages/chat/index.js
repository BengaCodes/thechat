import { Fragment, useEffect, useRef, useState } from 'react'
import { Button } from 'reactstrap'
import MessageBox from '../../components/messageBox'
import MessageInput from '../../components/messageInput'
import { useAppContext } from '../../hooks/useContext'
import { addMessage, logoutUser } from '../../state/actions'
import { HubConnectionBuilder } from '@microsoft/signalr'
import { BASE_URL } from '../../lib'

// const messages = [
//   { user: 'Benga', message: 'Whats up bro' },
//   { user: 'Abdul', message: 'Whats up broI am good bro and yourselfs?' }
// ]



function ChatPage() {
  const [chats, setChats] = useState([])
  const [connection, setConnection] = useState(null)
  const latestChat = useRef(null)

  latestChat.current = chats

  useEffect(() => {
    const newConnection = new HubConnectionBuilder()
      .withUrl(BASE_URL)
      .withAutomaticReconnect()
      .build()

    setConnection(newConnection)
  }, [])

  useEffect(() => {
    if (connection) {
      connection.start()
        .then(() => {
          console.log('Connected marn!!')
          connection.on('ReceiveMessage', message => {
            const updatedChat = [...latestChat.current]
            updatedChat.push(message)

            setChats(updatedChat)
          })
        }).catch(err => console.error('There has been a server error: ', err))
    }
  }, [connection])

  const { state: { user, message }, dispatch } = useAppContext()

  const handleChange = e => dispatch(addMessage(e.target.value))

  const handleSubmit = async e => {
    e.preventDefault()

    const newMessage = {
      user,
      message,
    }

    if (connection.connectionStarted) {
      try {
        await connection.send('SendMessage', newMessage)
      } catch (err) {
        console.error('There has been an error sending your message: ', err)
      }
    }
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
