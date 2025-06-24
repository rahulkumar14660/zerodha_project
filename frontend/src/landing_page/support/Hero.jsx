import React from 'react'

function Hero() {
    return ( 
        <>
            <section className='container-fluid' id='supportHero'>

                    <div className="p-3" id='supportWrapper'>
                        <h3>Support Portal</h3>
                        <a href="">Track Tickets</a>
                    </div>

                    <div className="row p-3 m-3 mx-5">

                        <div className="col-6 p-5">
                            <h1 className='fs-3 mb-4'>Search for an answer or browse help topics to create a ticket</h1>
                            <input placeholder='Eg. how do I activate F&O, why is my order getting rejected ...'/>
                            <br />
                            <a href="">Track account opening</a>
                            <a href="">Track segment activation</a>
                            <a href="">Intraday margins</a> <br />
                            <a href="">Kite user manual</a>
                        </div>

                        <div className="col-6 p-5" style={{lineHeight:"2.5"}}>
                            <h1 className='fs-3'>Featured</h1>

                            <ol>
                                <li> <a href="">Surveillance measure on scrips - June 2025</a> </li>
                                <li> <a href="">Rights Entitlements listing in June 2025</a> </li>
                            </ol>
                            
                        </div>

                    </div>

            </section>
        </>
     );
}

export default Hero;