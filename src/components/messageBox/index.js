import PropTypes from 'prop-types'
import { Card, CardBody, CardTitle, ListGroup } from 'reactstrap'
import Message from '../message'

function MessageBox({ chat }) {
  return (
    <Card className="w-75 mt-5" color="success">
      <CardTitle tag="h2">CHAT</CardTitle>
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
}

export default MessageBox

