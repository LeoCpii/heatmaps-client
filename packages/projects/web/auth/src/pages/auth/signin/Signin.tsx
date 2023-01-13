import { Form, Input, Button, FormControl, FormGroup, Slide } from '@heatmaps/ui';
import { IParams } from '@heatmaps/lib';
import { Link as Redirect } from 'react-router-dom';
import core from '../../../services/core';

import './Signin.scss';

function Signin() {
    const form = new FormGroup({
        email: new FormControl({ type: 'email', value: '' }),
        password: new FormControl({ type: 'password', value: '' }),
    })

    const login = ({ email, password }: IParams) => {
        core.auth.login({email, password})
    }

    return (
        <Slide direction="top">
            <div className="root">
                <div className="container">
                    <div id="title">
                        <h1>Login</h1>
                        <div className="row"></div>
                    </div>
                    <Form form={form} action={(e: any) => login(e)}>
                        <Input controlName="email" label="Email:" placeholder='example@email.com' />
                        <Input controlName="password" label="Password:" />
                        <Button type="submit" fluid={true}>Continue</Button>
                    </Form>
                    <div id="links">
                        <div className="signup">
                            <p className=""> Don't have an account? </p>
                            <Redirect to="/signup">Sign up</Redirect>
                        </div>
                        <Redirect to="/forgot">Forgot password</Redirect>
                    </div>
                </div>
            </div>
        </Slide>
    );
}

export default Signin;
