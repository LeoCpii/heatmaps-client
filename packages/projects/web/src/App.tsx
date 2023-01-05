import './App.scss';

import { Form, Input, Button, FormControl, FormGroup } from '@heatmaps/ui';

function App() {
  const form = new FormGroup({
    email: new FormControl({ type: 'email', value: '' }),
    password: new FormControl({ type: 'password', value: '' }),
  })

  return (
    <div className="root">
      <div className="container">
        <div id="title">
          <h1>Login</h1>
          <div className="row"></div>
        </div>
        <Form form={form} action={(e: any) => console.log('value', e)}>
          <Input controlName="email" label="Email:" placeholder='example@email.com' />
          <Input controlName="password" label="Password:" />
          <Button type="submit" fluid={true}>Continue</Button>
        </Form>
        <div id="links">
          <p>
            Don't have an account?
            <a href='#'>Sign up</a>
          </p>
          <p>
            <a href='#'>Forgot password</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
