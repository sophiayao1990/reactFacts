import reactIcon1 from '../images/reactIcon1.png'
import './Navbar.css'

function Navbar(props) {
    return (
        <nav className={props.lightMode ? 'nav light' : 'nav'}>
            <div className="title">
                <img src={ reactIcon1 } alt="React Icon" />
                <h3>ReactFacts</h3>
            </div>
            <div className='toggle-bar'>
                <p>Light</p>
                <div className="toggle-bar-slider" onClick={props.toggleLightMode} lightMode={props.lightMode}>
                    <div className="toggle-bar-slider-circle"></div>
                </div>
                <p>Dark</p>
            </div>
        </nav>
    )
}

export default Navbar