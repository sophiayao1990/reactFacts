import reactIcon1 from '../images/reactIcon1.png'
import './Navbar.css'

function Navbar() {
    return (
        <nav className='nav'>
            <div className="title">
                <img src={ reactIcon1 } alt="React Icon" />
                <h3>ReactFacts</h3>
            </div>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}

export default Navbar