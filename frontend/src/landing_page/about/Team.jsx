import React from 'react'

function Team() {
    return ( 
        <>
            <div className='container'>
                
                <div className="row p-3 mt-5 border-top">
                    <h1 className='text-center'>People</h1>
                </div>

                <div className="row p-3 mb-5 text-muted" style={{lineHeight:"1.8", fontSize:"1.2em"}}>

                    <div className="col-6 p-3 text-center">
                        <img src='media/images/nithinKamath.jpg' style={{borderRadius:"100%", width:"55%"}} />
                        <h4 className='mt-6'>Nithin Kamath</h4>
                        <h6>Founder, CEO</h6>
                    </div>

                    <div className="col-6 p-3">
                        <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                        <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                        <p>Playing basketball is his zen.</p>

                        <p>Connect on <a href="" style={{textDecoration:"none"}}>Homepage</a> / <a href="" style={{textDecoration:"none"}}>TradingQnA</a> / <a href="" style={{textDecoration:"none"}}>Twitter</a></p>
                    </div>

                </div>

                <div className="row text-muted text-center" style={{lineHeight:"1.8", fontSize:"1.2em"}}>

                    <div className="col-4 mt-5 mb-5">
                        <img src='media/images/nikhilkamath.jpg' style={{borderRadius:"100%", width:"55%"}} />
                        <h4 className='mt-6'>Nikhil Kamath</h4>
                        <h6>FCo-founder & CFO</h6>
                    </div>

                    <div className="col-4 mt-5 mb-5">
                        <img src='media/images/kailashnadh.jpg' style={{borderRadius:"100%", width:"55%"}} />
                        <h4 className='mt-6'>Dr. Kailash Nadh</h4>
                        <h6>CTO</h6>
                    </div>

                    <div className="col-4 mt-5 mb-5">
                        <img src='media/images/venumadhav.jpg' style={{borderRadius:"100%", width:"55%"}} />
                        <h4 className='mt-6'>COO</h4>
                        <h6>Founder, CEO</h6>
                    </div>

                </div>

                <div className="row text-muted text-center" style={{lineHeight:"1.8", fontSize:"1.2em"}}>

                    <div className="col-4 mt-5 mb-5">
                        <img src='media/images/hanandelvi.jpg' style={{borderRadius:"100%", width:"55%"}} />
                        <h4 className='mt-6'>Hanan Delvi</h4>
                        <h6>CCO</h6>
                    </div>

                    <div className="col-4 mt-5 mb-5">
                        <img src='media/images/seemapatil.jpg' style={{borderRadius:"100%", width:"55%"}} />
                        <h4 className='mt-6'>Seema Patil</h4>
                        <h6>Director</h6>
                    </div>

                    <div className="col-4 mt-5 mb-5">
                        <img src='media/images/karthikrangappa.jpg' style={{borderRadius:"100%", width:"55%"}} />
                        <h4 className='mt-6'>Karthik Rangappa</h4>
                        <h6>Chief of Education</h6>
                    </div>

                </div>

                <div className="row text-muted text-center" style={{lineHeight:"1.8", fontSize:"1.2em"}}>

                    <div className="col-4 mt-5 mb-5">
                        <img src='media/images/austinprakesh.jpg' style={{borderRadius:"100%", width:"55%"}} />
                        <h4 className='mt-6'>Austin Prakesh</h4>
                        <h6>Director Strategy</h6>
                    </div>

                    <div className="col-8"></div>

                </div>

            </div>
        </>
     );
}

export default Team;