import React from 'react';
import BookApptBtn from '../BookApptBtn';
import ZipInputWrapper from '../ZipInputWrapper';
import VendorWrapper from '../VendorWrapper';
import './style.css';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


class BookApptWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayZipInput: false,
            displayVendors: false,
            displayFilters: false,
            showBookingModal: false,
            displayZipMessage: false,
            zipErrorBorder: false,
            // Weekday checkboxes
            sundayIsChecked: true,
            mondayIsChecked: true,
            tuesdayIsChecked: true,
            wednesdayIsChecked: true,
            thursdayIsChecked: true,
            fridayIsChecked: true,
            saturdayIsChecked: true
        }
    };

    // sets state every time the filter boxes change.
    handleFilterChange = event => {
        const target = event.target;
        const value = target.checked ? true : false;
        const name = target.name;
        alert(name);
        alert(value);
        this.setState({
            [name]: value
        });
    }

    HandleDisplayZip = () => {
        scroll.scrollTo(200);
        this.setState({ displayZipInput: true })
    };

    HandleDisplayVendors = () => {
        // This block below varifies that the input is 5 digits long. If not, it displays a message to user.
        const userZip = document.getElementById('zip-input').value;
        const zipREGEX = /^\d{5}$/;
        // test method returns true or false
        const zipResult = zipREGEX.test(userZip);
        scroll.scrollTo(580);
        if (zipResult) {
            this.setState({ displayVendors: true, displayZipMessage: false, zipErrorBorder: false })
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
                    <Element name='vendor-wrapper'>
                        <VendorWrapper
                            displayVendors={this.state.displayVendors}
                            HandleModalOpen={this.HandleModalOpen}
                            handleModalClose={this.handleModalClose}
                            showBookingModal={this.state.showBookingModal}
                            sundayIsChecked={this.state.sundayIsChecked}
                            mondayIsChecked={this.state.mondayIsChecked}
                            tuesdayIsChecked={this.state.tuesdayIsChecked}
                            wednesdayIsChecked={this.state.wednesdayIsChecked}
                            thursdayIsChecked={this.state.thursdayIsChecked}
                            fridayIsChecked={this.state.fridayIsChecked}
                            saturdayIsChecked={this.state.saturdayIsChecked}
                            handleFilterChange={this.handleFilterChange}
                        />
                    </Element>
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