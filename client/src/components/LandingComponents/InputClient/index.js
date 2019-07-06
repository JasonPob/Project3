import React from 'react';
// import './style.css';

const InputClientWrapper = props => {
    console.log(props);
    return (
        <div className='clientWrapper'>
            <h3 className=''>Sign Up for a Stylist Account.</h3>

            <form>
                <div className="form-group">
                    <label for="InputName">Name</label>
                    <input type="name" className="form-control" id="InputName" placeholder="Jane Doe" />
                </div>

                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="InputZip">Zipcode</label>
                    <input type="number" className="form-control" id="InputZip" placeholder="12345" />
                </div>

                <div className="form-group">
                    <label for="exampleFormControlFile1">Example file input</label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                </div>
                <button className="btn btn-primary" onClick={props.HandleDisplayClient}>Submit</button>
            </form>
            <h5>I already have an account: <a href='/'>Sign In</a></h5>


        </div>
    )
}

export default InputClientWrapper;