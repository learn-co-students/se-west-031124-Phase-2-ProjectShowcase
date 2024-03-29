function Header(props) {
    console.log(props)
    return (
        <header>
            <h1>
                <span className="logo">{"//"}</span> Project Showcase
            </h1>
            <nav>
                <button>Light Mode</button>
            </nav>
        </header>
    )
}

export default Header;