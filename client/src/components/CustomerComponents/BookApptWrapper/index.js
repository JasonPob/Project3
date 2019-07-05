import React from 'react';
import BookApptBtn from '../BookApptBtn';
import ZipInputWrapper from '../ZipInputWrapper';
import VendorWrapper from '../VendorWrapper';
import './style.css';



class BookApptWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayZipInput: false,
            displayVendors: false,
            displayFilters: false,
        }
    };

    HandleDisplayZip = () => {
        this.setState({ displayZipInput: true })
    };

    HandleDisplayVendors = () => {
        this.setState({ displayVendors: true })
    };

    render() {
        if (this.state.displayZipInput) {
            return (
                <>
                    <ZipInputWrapper
                        HandleDisplayVendors={this.HandleDisplayVendors}
                    />
                    <VendorWrapper
                        displayVendors={this.state.displayVendors}
                    />
                </>
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