import React from "react"

const Header = () => {

    const navLinks = ["Home", "About", "Projects"]

    const renderNavLinks = (content) => {
        const scrollToId = `${content.toLowerCase()}Section`

        const handleClickNav = () => {
            document.getElementById(scrollToId).scrollIntoView({ behavior:"smooth"})
        }

        return(
            <ul key={content} className="inline-block px-4">
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
            <nav className="flex">
                {navLinks.map(nav => renderNavLinks(nav))}
                <p className="px-4">Contact Me</p>
            </nav>
        </div>
       </header>
    )
}

export default Header