import React from 'react';
import './style.css';


const SignUpForm = props => {
    console.log(props);
    return (
        <>
            <div className='LoginWrapper mb-2'>
                <h1 className="welcome-header">Join Now</h1>
                <h3 className="welcome-subHeader">Sign Up</h3>
                <div>
                    <form className='InnerForm'>
                        <div className="form-group">
                            <label for="InputName">Name</label>
                            <input name='name' type="name" className="form-control" id="InputName" placeholder="Jane Doe" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label for="InputPassword">Password</label>
                            <input type="text" className="form-control" id="InputPassword" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <label for="InputZip">Zipcode</label>
                            <input type="number" className="form-control" id="InputZip" placeholder="12345" />
                        </div>


                        {/* Vendor Question Section --> */}
                        <div className="form-group">
                            <label for="formGroupExampleInput">Click yes if you're a vendor? </label>
                            <br />
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" value="1" id="defaultCheck1" onClick={props.HandleIsVendor} />
                                <label className="form-check-label" for="defaultCheck1">Yes</label>
                            </div>
                        </div>
                        {/* Vendor Question Section <-- */}


                        <div className="form-group">
                            <label for="exampleFormControlFile1">Upload your Photo</label>
                            <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                        </div>


                        {/* Vendor Input Section, display if they click yes. Where do i put the javascript for this? --> */}
                        <div className="form-group displayVendor">
                            <label for="InputPrice">Base Price</label>
                            <input type="number" className="form-control" id="InputPrice" placeholder="$$$" />
                        </div>
                        <div class="form-group displayVendor">
                            <label for="FormControlTextarea1">Bio</label>
                            <textarea class="form-control" id="FormControlTextarea1" rows="3"></textarea>
                        </div>
                        {/* Vendor Input Section,  <-- */}


                        <button className="btn btn-primary" onClick={props.HandleLoginSubmit}>Submit</button>
                    </form>
                    <h5 className='mt-3 acctQuestion'>Already have an account? <a href='/LogIn'>Sign In!</a></h5>
                </div>
            </div>
        </>
    )
}
export default SignUpForm;