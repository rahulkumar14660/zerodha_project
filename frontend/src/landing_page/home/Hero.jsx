import React from 'react'
import { useNavigate } from 'react-router-dom';

function Hero() {
    const navigate = useNavigate();
    function handleButtonClick() {
        navigate("/signup");
    }
    return ( 
        <>
            <div className='container p-5'>                                                             
                <div className='row text-center'>

                    <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5' />
                    <h1 className='mt-5'>Invest in everything</h1>
                    <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                    <button onClick={handleButtonClick} className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin: "0 auto"}}>Sign up for free</button>
                
                </div>
            </div>
        </>
     );
}

export default Hero;