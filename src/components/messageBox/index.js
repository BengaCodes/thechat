import PropTypes from 'prop-types'
import { Card, CardBody, CardSubtitle, CardTitle, ListGroup } from 'reactstrap'
import Message from '../message'

function MessageBox({ chat, activeUsers }) {
  return (
    <Card className="w-75 mt-5" color="info">
      <CardTitle tag="h2" className="text-center">CHAT</CardTitle>
      <CardSubtitle className="text-center text-danger">There are {activeUsers} active users</CardSubtitle>
      <CardBody>
        <ListGroup>
          {
            chat.map((c, i)=> <Message key={Date.now() * Math.random()} color={i % 2 !== 0 ? true : false} user={c.user} message={c.message} />)
          }
        </ListGroup>
      </CardBody>
    </Card>
  )
}

MessageBox.propTypes = {
  chat: PropTypes.array.isRequired,
  activeUsers: PropTypes.number.isRequired,
}

export default MessageBox

