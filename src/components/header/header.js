import './header.css';

function Header(props) {
    return (
        <header className="header">
            <h1 style={{color: `${props.city['primary color']} || 'black'`}}>Notifi</h1>
        </header>
    );
}

export default Header;