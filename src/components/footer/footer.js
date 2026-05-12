import './footer.css';

function Footer(props) {




    
    return (
        <footer className="footer" style={{ backgroundColor: props.city ? props.city['primary color'] : '#fff' }}>
            <nav className="footer-nav">
                {
                    props.city.website && <a href={props.city.website} style={{ color: 'white' }}>Visit {props.city ? props.city.city : 'your city'}'s website</a>
                }
                <a href="https://www.notifi.com" style={{ color: 'white' }}>Privacy Policy</a>
                {/* <a href="https://www.notifi.com/contact" style={{ color: 'white' }}>Contact Us</a> */}
            </nav>
        </footer>
    );
}

export default Footer;