import React from 'react'

function Signup() {
    return ( 
        <>
            <div className="container">
                <div className="row text-center" style={{marginTop:"100px"}}>
                    <h1> Open a free demat and trading account online </h1>
                    <p className='text-muted fs-5'> Start investing brokerage free and join a community of 1.6+ crore investors and traders </p>
                </div>

                <div className="row mt-5">

                    <div className="col-6">
                        <img src="media/images/account_open_products.svg" style={{marginLeft: "100px"}} />
                    </div>

                    <div className="col-6 mt-2 mb-5">
                        <h1> Signup now </h1>
                        <p className='text-muted fs-5 mb-2'> Or track your existing application </p>

                        <form action="/" method="" class="needs-validation" novalidate>

                            <div class="mb-3">
                                <label for="username" class="form-label">Username</label>
                                <input name="username" id="username" type="text" class="form-control" required />
                                <div class="valid-feedback">Looks good!</div>
                            </div>

                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input name="email" id="email" type="email" class="form-control" required />
                            </div>
                            
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input name="password" id="password" type="password" class="form-control" required />
                            </div>

                            <button class="btn btn-success">SignUp</button>

                        </form>

                        <p className='mt-3'> By proceeding, you agree to the Zerodha <a href="" style={{textDecoration:"none"}}>terms</a> & <a href="" style={{textDecoration:"none"}}>privacy policy</a> </p>

                    </div>

                </div>


                <div className="row">
                    <p className='mt-5 fs-2 text-center'> Investment options with Zerodha demat account </p>
                </div>

                <div className="row">

                    <div className="col-6 text-center d-flex mt-5">
                        <div className="col-3">
                            <img src="media/images/stocks-acop.svg" style={{width:"70%"}} />
                        </div>

                        <div className="col-3">
                            <h3 className='fs-4'>Stocks</h3>
                            <p className="text-muted">Invest in all exchange-listed securities</p>
                        </div>
                    </div>

                    <div className="col-6 text-center d-flex mt-5">
                        <div className="col-2">
                            <img src="media/images/mf-acop.svg" style={{width:"70%"}} />
                        </div>

                        <div className="col-4">
                            <h3 className='fs-4'>Mutual funds</h3>
                            <p className="text-muted">Invest in commission-free direct mutual funds</p>
                        </div>
                    </div>

                    <div className="col-6 text-center d-flex mt-5">
                        <div className="col-3">
                            <img src="media/images/ipo-acop.svg" style={{width:"70%"}} />
                        </div>

                        <div className="col-3">
                            <h3 className='fs-4'>IPO</h3>
                            <p className="text-muted">Apply to the latest IPOs instantly via UPI</p>
                        </div>
                    </div>

                    <div className="col-6 text-center d-flex mt-5">
                        <div className="col-2">
                            <img src="media/images/fo-acop.svg" style={{width:"70%"}} />
                        </div>

                        <div className="col-4">
                            <h3 className='fs-4'>Futures & options</h3>
                            <p className="text-muted">Hedge and mitigate market risk through simplified F&O trading</p>
                        </div>
                    </div>

                        <button className='p-2 btn btn-primary fs-5 mt-3 mb-4' style={{width:"20%", margin: "0 auto"}}> Explore Investments </button>

                </div>

            </div>
        </>
     );
}

export default Signup;