import './header.css';

function Header(props) {
    return (
        <header className="header">
            <h1 style={{color: `${props.city['primary color']}`}}>Notifi</h1>
        </header>
    );
}

export default Header;