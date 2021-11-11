import { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Card, CardBody, CardTitle, Form, Input, Label, FormGroup, Button } from 'reactstrap'

function MessageInput({ handleChange, handleSubmit, message }) {
  return (
    <Fragment>
      <Card className="w-50">
        <CardTitle tag="h3" className="text-center">START CHATTING</CardTitle>
        <CardBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="message">
                Message
              </Label>
              <Input
                id="message"
                name="text"
                type="textarea"
                required
                value={message}
                onChange={handleChange}
              />
            </FormGroup>
            <Button color="primary">SEND</Button>
          </Form>
        </CardBody>
      </Card>
    </Fragment>
  )
}

MessageInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default MessageInput
