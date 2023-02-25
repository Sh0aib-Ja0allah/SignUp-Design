import React from 'react'
import './Child.css'
import facebook from '../assets/facebook.png'
import github from '../assets/github.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'

function Child() {
    return (
    <div className='Home'>
        <div className="HomeChild LogIn" id='LogIn'>
            <div className="HomeSubChild Start">
                <div className="SubChild ChildTitle">
                    Log In
                </div>
                <input type="email" className="SubChild LogInInput" placeholder='Your Email' />
                <input type="password" className="SubChild LogInInput" placeholder='Your Password' />
                <div className="Remember">
                    <div className="SubChild RememberInput">
                        <input className='CheckBox' name='RememberInput' type="checkbox" />
                        <label htmlFor="RememberInput">Remember me</label>
                    </div>
                    <div className="RememberText">
                        Forgot password?
                    </div>
                </div>
                <button className="submit">
                    Log in
                </button>
            </div>
            <div className="HomeSubChild End">
                <div className="ChildEnd">
                    Or sing in with
                </div>
                <div className="ChildEnd Icons">
                    <img alt='facebook icon' src={facebook} className="IconsChild" />
                    <img alt='github icon' src={github} className="IconsChild" />
                    <img alt='instagram icon' src={instagram} className="IconsChild" />
                    <img alt='linkedin icon' src={linkedin} className="IconsChild" />
                </div>
                <div className="ChildEnd LastRow">
                    <div className='Question'>
                        Don't have an account?
                    </div>
                    <a className="SignUpLink" href="#SignUp">
                        Sign up
                    </a>
                </div>
            </div>
        </div>
        <div className="HomeChild SignUp" id='SignUp'>
            <div className="HomeSubChild">
                <div className="SubChild ChildTitle">
                    Sign Up
                </div>
                <div className="UserName">
                <input type="text" className="UserNameChild First" placeholder='First name' />
                <input type="text" className="UserNameChild Last" placeholder='Last name' />
                </div>
                <input type="email" className="SubChild LogInInput" placeholder='Email' />
                <input type="password" className="SubChild LogInInput" placeholder='Password' />
                <input type="password" className="SubChild LogInInput" placeholder='Confirm Password' />
                <div className="Remember">
                    <div className="SubChild RememberInput">
                        <input className='CheckBox' name='RememberInput' type="checkbox" />
                        <label htmlFor="RememberInput">I agree with <span>privacy</span> and <span>policy</span></label>
                    </div>
                </div>
                <button className="submit">
                    Sign up
                </button>
            </div>
            <div className="HomeSubChild">
                <div className="ChildEnd LastRow">
                        <div className='Question'>
                            Already have an account?
                        </div>
                        <a className="SignUpLink" href="#LogIn">
                            Sign in
                        </a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Child