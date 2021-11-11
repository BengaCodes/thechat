import { Fragment } from 'react'
import ChatWindow from '../../components/chat'
import { useAppContext } from '../../hooks/useContext'

function ChatPage() {

  const { state: { user } } = useAppContext()

  console.log(user)

  return (
    <Fragment>
      <ChatWindow />
    </Fragment>
  )
}

export default ChatPage
