import React from 'react';
import BookApptBtn from '../BookApptBtn';
import ZipInputWrapper from '../ZipInputWrapper';
import VendorWrapper from '../VendorWrapper';
import './style.css'


class BookApptWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayZipInput: false,
            displayVendors: false,
            displayFilters: false,
            showBookingModal: false
        }
    };

    HandleDisplayZip = () => {
        this.setState({ displayZipInput: true })
    };

    HandleDisplayVendors = () => {
        this.setState({ displayVendors: true })
    };

    HandleModalOpen = () => {
        this.setState({ showBookingModal: true })
    }

    handleModalClose = () => {
        this.setState({ showBookingModal: false })
    }

    render() {
        if (this.state.displayZipInput) {
            return (
                <>
                    <ZipInputWrapper
                        HandleDisplayVendors={this.HandleDisplayVendors}
                    />
                    <VendorWrapper
                        displayVendors={this.state.displayVendors}
                        HandleModalOpen={this.HandleModalOpen}
                        handleModalClose={this.handleModalClose}
                        showBookingModal={this.state.showBookingModal}
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