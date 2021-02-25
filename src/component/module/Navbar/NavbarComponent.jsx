import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {userLogin, logout} from '../../../configs/redux/actions'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap'

export default function NavbarComponent() {
    const dispatch = useDispatch()
    const history = useHistory()
    const userState = useSelector(state => state.user.userLogin)

    const goLogout = (event) => {
        event.preventDefault()
        dispatch(logout())
        history.push('/login')
    }

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        dispatch(userLogin())
    }, [dispatch])
    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <Container>
                    <NavbarBrand>Todo List</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink style={{cursor: 'pointer'}}>{userState.username}</NavLink>
                            </NavItem>
                            <NavItem onClick={goLogout}>
                                <NavLink style={{cursor: 'pointer'}}>Logout</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
