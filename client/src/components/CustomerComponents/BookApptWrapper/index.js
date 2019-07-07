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
            showBookingModal: false,
            displayZipMessage: false,
            zipErrorBorder: false
        }
    };

    HandleDisplayZip = () => {
        this.setState({ displayZipInput: true })
    };

    HandleDisplayVendors = () => {
        // This block below varifies that the input is 6 digits long. If not, it displays a message to user.
        const userZip = document.getElementById('zip-input').value;
        const zipREGEX = /^\d{5}$/;
        const zipResult = zipREGEX.test(userZip);
        if (zipResult) {
            this.setState({ displayVendors: true, displayZipMessage: false })
        } else {
            this.setState({ displayZipMessage: true, zipErrorBorder: true })
        }
        
    };

    // These methods handle opening and closing of the modal for booking
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
                        displayZipMessage={this.state.displayZipMessage}
                        zipErrorBorder={this.state.zipErrorBorder}
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