import React from 'react';
import './style.css';
import CustAppointmentList from '../CustAppointmentList';
import CustPastApptList from '../CustPastApptList';
import CustApptToggle from '../CustApptToggle';

class CustAppointmentsWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            upcomingApptsView: true
        }
    };

    // Method to toggle between upcoming appointments and past appointments
    handleToggleView = () => {
        this.state.upcomingApptsView ?
            this.setState({ upcomingApptsView: false }) :
            this.setState({ upcomingApptsView: true })
    }

    render() {
        if (this.state.upcomingApptsView) {
            return (
                <>
                    <div className='cust-appointments-wrapper'>
                        <CustApptToggle
                            upcomingApptsView={this.state.upcomingApptsView}
                            handleToggleView={this.handleToggleView}>
                            Past Appointments
                        </CustApptToggle>
                        <h3 className='cust-appointments-header-text'>Your Upcoming Appointments</h3>
                        <CustAppointmentList />
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className='cust-appointments-wrapper'>
                        <CustApptToggle
                            upcomingApptsView={this.state.upcomingApptsView}
                            handleToggleView={this.handleToggleView}>
                            Upcoming Appointments
                        </CustApptToggle>
                        <h3 className='cust-appointments-header-text'>Your Past Appointments</h3>
                        <CustPastApptList />
                    </div>
                </>
            )
        }

    }
}

export default CustAppointmentsWrapper;