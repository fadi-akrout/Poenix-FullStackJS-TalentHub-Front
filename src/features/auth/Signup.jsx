import { useRef, useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { setCredentials } from './authSlice'
import { useSignupMutation } from './authApiSlice'
import usePersist from '../../hooks/usePersist'
import { ROLES } from "../../config/roles"

const USER_REGEX = /^[A-z]{3,20}$/
const PWD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!#$%])[A-Za-z\d@!#$%]{8,}$/
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Signup = () => {
    const usernameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const [username, setUsername] = useState('')
    const [validUsername, setValidUsername] = useState(false)
    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState(false)
    const [password, setPassword] = useState('')
    const [validPassword, setValidPassword] = useState(false)
    const [roles, setRoles] = useState(["Student"])
    const [errMsg, setErrMsg] = useState('')

    useEffect(() => {
        setValidUsername(USER_REGEX.test(username))
    }, [username])
    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email))
    }, [email])

    useEffect(() => {
        setValidPassword(PWD_REGEX.test(password))
    }, [password])

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [signup, { isLoading,
        isSuccess,
        isError,
        error }] = useSignupMutation()

    useEffect(() => {
        usernameRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [username, email, password, roles])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (canSave) {
        try {
            const { accessToken } = await signup({
                username,
                email,
                password,
                roles: roles
            }).unwrap()
            dispatch(setCredentials({ accessToken }))
            setUsername('')
            setEmail('')
            setPassword('')
            setRoles([])
            navigate('/login')
        } catch (err) {
            if (!err.status) {
                setErrMsg('No Server Response');
            } else if (err.status === 400) {
                setErrMsg('Invalid input');
            } else if (err.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg(err.data?.message);
            }
            usernameRef.current.focus();
        }
    }
    }
    const options = Object.values(ROLES).map(role => {
        return (
            <option
                key={role}
                value={role}

            > {role}</option >
        )
    })

    const handleUsernameInput = (e) => setUsername(e.target.value)
    const handleEmailInput = (e) => setEmail(e.target.value)
    const handlePasswordInput = (e) => setPassword(e.target.value)
    const onRolesChanged = e => {
        const values = Array.from(
            e.target.selectedOptions, //HTMLCollection 
            (option) => option.value
        )
        setRoles(values)
    }
   
    const canSave = [roles.length, validUsername, validPassword, validEmail].every(Boolean) && !isLoading


    const errClass = errMsg ? "errmsg" : "offscreen"
    const validUserClass = !validUsername ? 'form__input--incomplete' : ''
    const validEmailClass = !validEmail ? 'form__input--incomplete' : ''
    const validPwdClass = !validPassword ? 'form__input--incomplete' : ''
    const validRolesClass = !Boolean(roles.length) ? 'form__input--incomplete' : ''


    if (isLoading) return <p>Loading...</p>

    const content = (
        <section className="public">
            <header>
                <h1> Signup</h1>
            </header>
            <main className="signup">
                <p ref={usernameRef} className={errClass} aria-live="assertive">{errMsg}</p>

                <form className="form" onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input
                         className={`form__input ${validUserClass}`}
                        type="text"
                        id="username"
                        ref={usernameRef}
                        value={username}
                        onChange={handleUsernameInput}
                        autoComplete="off"
                        required
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        className={`form__input ${validEmailClass}`}
                        type="email"
                        id="email"
                        ref={emailRef}
                        value={email}
                        onChange={handleEmailInput}
                        autoComplete="on"
                        required
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        className={`form__input ${validPwdClass}`}
                        type="password"
                        id="password"
                        ref={passwordRef}
                        value={password}
                        onChange={handlePasswordInput}
                        required
                    />

                        <label className="form__label" htmlFor="roles">
                    ASSIGNED ROLES:</label>
                <select
                    id="roles"
                    name="roles"
                    className={`form__select ${validRolesClass}`}
                    multiple={true}
                    size="5"
                    value={roles}
                    onChange={onRolesChanged}
                >
                    {options}
                </select>

                    <button className="form__submit-button">Sign Up</button>

                    
                </form>
            </main>
            <footer>
                <Link to="/">Back to Home</Link>
            </footer>
        </section>
    )

    return content
}

export default Signup