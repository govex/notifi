import { useParams } from 'react-router-dom';
import './user-signup.css';
import { useEffect, useState } from 'react';
// import axios from 'axios';
import { connector } from '../../utils/connector';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';





function UserSignup() {

    const [city, setCity] = useState(null);
    const [requestName, setRequestName] = useState(false);
    const [requireName, setRequireName] = useState(false);

    let cityCode = useParams().code;


    let customStyles = {
        backgroundColor: city ? city['primary color'] : '#fff',
        border: 'none',
        color: 'white',
    };

    useEffect(() => {
        const fetchCity = async () => {
            try {
                const foundCity = await connector.getCityByCode(cityCode);
                console.log('Found city:', foundCity);
                setCity(foundCity[0].fields);
                setRequestName(foundCity[0].fields['name requested']);
                setRequireName(foundCity[0].fields['name required']);
            } catch (error) {
                console.error(error);
            }
        };
        fetchCity();
    }, [cityCode]);
    return (
        <>
            {city ? (
                <>
                    <Header city={city} />
                    <div className='hero-wrapper' style={{ backgroundImage: `url(${city.hero})` }}></div>
                    <div className="user-signup-container">

                        {/* <p>Sign up to receive notifications about events and updates in your city.</p> */}
                        {/* Add your signup form here */}

                        <form className='signup-form'>
                            <h1 style={{ color: `${city['primary color']}` }}>Sign up to receive notifications about {city.city}!</h1>
                            {/* <label htmlFor="email" >Email:</label><br></br> */}
                            <input type="email" placeholder={`you@${city.city.toLowerCase()}.com (required)`} className='email-input' style={{ border: `2px solid ${city['primary color']}`, color: `${city['primary color']}` }} required /><br></br>
                            {
                                requestName && <>
                                    {/* <label htmlFor="name" style={{color: `${city['primary color']}`}}>First Name:</label><br></br> */}
                                    <input type='text' placeholder={`First Name${requireName ? ' (required)' : ' (optional)'}`} className='name-input' required={requireName} style={{ border: `2px solid ${city['primary color']}`, color: `${city['primary color']}` }} />
                                    {/* <label htmlFor="name" style={{color: `${city['primary color']}`}}>Last Name:</label><br></br> */}
                                    <input type='text' placeholder={`Last Name${requireName ? ' (required)' : ' (optional)'}`} className='name-input' required={requireName} style={{ border: `2px solid ${city['primary color']}`, color: `${city['primary color']}` }} /></>
                            }

                            <h4 style={{ color: `${city['primary color']}` }}>I would like to receive notifications about the following:</h4>
                            <ul className='options-list'>
                                {city['Name (from update triggers)'].map((category, index) => (
                                    <li key={index}>
                                        <div className='option-wrapper' style={customStyles}>
                                            <input type="checkbox" id={`category-${index}`} name={`category-${index}`} value={category} style={{ accentColor: city['secondary color'] }} />
                                            <label htmlFor={`category-${index}`}>{category}</label>
                                        </div>

                                    </li>
                                ))}
                            </ul>

                            <button className='signup-button' style={{ backgroundColor: city['secondary color'] }}>Sign Up</button>
                        </form>



                    </div>
                    <Footer city={city} />
                </>
            ) : (
                <div className="user-signup-container">
                    <h1>Loading...</h1>
                </div>
            )}
        </>
    );
}

export default UserSignup;