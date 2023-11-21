import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Startseite</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </nav>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout