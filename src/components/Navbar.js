import reactjsIcon from './images/reactjsIcon.png'

function Navbar() {
    return (
        <nav>
            <div className="title">
                <img src={reactjsIcon} alt="React Icon" />
                <h3>ReactFacts</h3>
            </div>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}

export default Navbar