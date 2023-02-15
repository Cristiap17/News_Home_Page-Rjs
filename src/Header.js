import { useState } from 'react'
import iconMenu from '../src/assets/images/icon-menu.svg'
import logo from '../src/assets/images/logo.svg'
import closeIcon from '../src/assets/images/icon-menu-close.svg'

function Header() {
    
    const [initialMenu, SetInitialMenu] = useState(false)

    const sideBarClassName = initialMenu ? 'sidebar-background' : 'sidebar-background inactive'

    const sideBarClassNameS = !initialMenu && 'inactive'

    function toggle() {
        SetInitialMenu(!initialMenu)
    }


    return(
        <div>
            <nav className={`${sideBarClassName} ` }>
                <div
                    className={`${sideBarClassNameS} sidebar-container ease-trasition`}
                >
                    <img 
                        alt='close-icon'
                        src={closeIcon}
                        onClick={toggle}
                        />
                    <ul>
                        <li>Home</li>
                        <li>New</li>
                        <li>Popular</li>
                        <li>Trending</li>
                        <li>Categories</li>
                    </ul>
                </div>
            </nav>

        <div className='header-container'>
            <nav className='elements-container'>
                <img alt='Logo "W."' src={logo}/>
                <ul className='li-Container'>
                    <li>Home</li>
                    <li>New</li>
                    <li>Popular</li>
                    <li>Trending</li>
                    <li>Categories</li>
                </ul>
                <img 
                alt='Logo "W."' 
                src={iconMenu}
                className='nenu-icon'
                onClick={toggle}
                />
            </nav>
         </div>
        </div>
    )

}

export { Header }