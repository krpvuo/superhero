import { NavLink } from "react-router-dom"
import { Wrapper } from '../../assets/wrappers/Navbar'

export const Navbar = () => {
    return (
        <Wrapper>
            <div className="nav-center">
                <span className="logo">superhero</span>
                <div className="nav-links">
                    <NavLink to='/' className='nav-link'>
                        Home
                    </NavLink>
                    <NavLink to='/about' className='nav-link'>
                        About
                    </NavLink>
                    <NavLink to='/characters' className='nav-link'>
                        Characters
                    </NavLink>
                    <NavLink to='/newsletter' className='nav-link'>
                        Newsletter
                    </NavLink>
                </div>
            </div>
        </Wrapper>
    )
}

