import { Fragment, useEffect, useState } from 'react'
import { Button } from 'reactstrap'
import MessageBox from '../../components/messageBox'
import MessageInput from '../../components/messageInput'
import { useAppContext } from '../../hooks/useContext'
import { addMessage, chatMessage, logoutUser } from '../../state/actions'
import { HubConnectionBuilder } from '@microsoft/signalr'
import { HUB_URL, sendMessage } from '../../lib'



function ChatPage() {
  const [connection, setConnection] = useState(null)

  const { state: { user, message, chats, person }, dispatch } = useAppContext()

  console.log(chats)

  console.log('Person, ', person)


  useEffect(() => {
    const newConnection = new HubConnectionBuilder()
      .withUrl(HUB_URL)
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
            console.log('Message: ', message)
            dispatch(chatMessage(message))
          })
        }).catch(err => console.error('There has been a server error: ', err))
    }
  }, [connection, dispatch])



  const handleChange = e => dispatch(addMessage(e.target.value))

  const handleSubmit = async e => {
    e.preventDefault()

    const newMessage = {
      user,
      message,
    }

    // if (connection.connectionStarted) {
    //   try {
    //     await connection.send('SendMessage', newMessage)
    //   } catch (err) {
    //     console.error('There has been an error sending your message: ', err)
    //   }
    // }

    try {
      await sendMessage(newMessage)
    } catch (err) {
      console.error('There has been an error sending your message: ', err)
    }

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
