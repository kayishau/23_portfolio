import React from "react"

const Header = () => {

    const navLinks = ["Home", "About", "Projects"]

    const renderNavLinks = (content) => {
        const scrollToId = `${content.toLowerCase()}Section`

        const handleClickNav = () => {
            document.getElementById(scrollToId).scrollIntoView({ behavior:"smooth"})
        }

        return(
            <ul key={content}>
                <li>
                    <button
                    onClick={handleClickNav}
                    >{content}</button>

                </li>
            </ul>
        )
    }

    return(
       <header>
        <div>
            <nav>
                {navLinks.map(nav => renderNavLinks(nav))}
            </nav>
        </div>
       </header>
    )
}

export default Header