import PropTypes from 'prop-types'
import { Card, CardBody, CardTitle, Form, FormGroup, Label, Input, Button } from 'reactstrap'

function LoginForm({ handleChange, handleSubmit }) {
  return (
    <Card className="mt-5 p-2 align-self-center w-50">
      <CardTitle tag="h2" className="text-center">Welcome to the best Chat App</CardTitle>
      <CardBody>
        <Form onSubmit={handleSubmit} className="p-3">
          <FormGroup>
            <Label for="username">
              Username
            </Label>
            <Input
              id="username"
              name="username"
              placeholder="Please enter your username"
              type="text"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <Button>Join Now</Button>
        </Form>
      </CardBody>
    </Card>
  )
}

LoginForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default LoginForm
