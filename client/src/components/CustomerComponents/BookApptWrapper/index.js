import React from 'react';
import BookApptBtn from '../BookApptBtn';
import ZipInputWrapper from '../ZipInputWrapper';
import './style.css';



class BookApptWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayZipInput: false
        }
    };

    HandleDisplayZip = () => {
        // alert('hi');
        this.setState({ displayZipInput: true })
    };

    render() {
        if (this.state.displayZipInput) {
            return (
                <ZipInputWrapper />
            )
        } else {
            return (
                <BookApptBtn 
                    HandleDisplayZip={this.HandleDisplayZip}
                />
            )
        }
    }
}

export default BookApptWrapper;