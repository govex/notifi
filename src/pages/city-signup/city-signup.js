import './city-signup.css';
import { useEffect, useState } from 'react';
import { connector } from '../../utils/connector';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

function CitySignup() {

    const [showBanner, setShowBanner] = useState(false);
    const [bannerProperties, setBannerProperties] = useState({
        backgroundColor: '#333',
        color: '#fff',
        message: 'This is a banner message!'
    });

    

    return(
        <>
        <Header city={{'primary color': '#333'}} />
        <form className='city-signup-form'>
            <h1>City Signup</h1>
            <label htmlFor="city-name" >City Name:</label>
            <input type="text" placeholder="ex. Philadelphia" className='city-name-input' required/>
            <select className='state-select' required>
                <option>State</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
            </select>

            {
                showBanner && <div className='banner' style={{ backgroundColor: bannerProperties.backgroundColor, color: bannerProperties.color }}>
                {bannerProperties.message}

                </div>
            }
            
            <label htmlFor="city-code" >City Code (unique identifier):</label>
            <input type="text" placeholder="City Code (unique identifier)" className='city-code-input' required/><br></br>
            <label htmlFor="primary-color" >Primary Color:</label>
            <input type="color" placeholder="Primary Color (hex code)" className='primary-color-input' required/>
            <label htmlFor="secondary-color" >Secondary Color:</label>
            <input type="color" placeholder="Secondary Color (hex code)" className='secondary-color-input' required/><br></br>
            <label htmlFor="hero-image" >Hero Image URL:</label>
            <input type="text" placeholder="Hero Image URL" className='hero-image-input' required/><br></br>
            <button type="submit" className='submit-button'>Submit</button>
        </form> 
        </>
    )

}

export default CitySignup;