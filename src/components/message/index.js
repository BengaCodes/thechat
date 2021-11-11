import PropTypes from 'prop-types'
import { ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap'

function Message({ user, message, color }) {
  return (
    <ListGroupItem className="mt-3" color={color ? 'success' : ''}>
      <ListGroupItemHeading>{user}</ListGroupItemHeading>
      <ListGroupItemText>{message}</ListGroupItemText>
    </ListGroupItem>
  )
}

Message.propTypes = {
  user: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  color: PropTypes.bool.isRequired,
}

export default Message

