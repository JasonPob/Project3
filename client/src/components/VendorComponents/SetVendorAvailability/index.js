import React from 'react';
import VendorTimeSelect from '../VendorTimeSelect';


class SetVendorAvailability extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                sundayStart: '',
                sundayEnd: '',
                mondayStart: '',
                mondayEnd: '',
                tuesdayStart: '',
                tuesdayEnd: '',
                wednesdayStart: '',
                wednesdayEnd: '',
                thursdayStart: '',
                thursdayEnd: '',
                fridayStart: '',
                fridayEnd: '',
                saturdayStart: '',
                saturdayEnd: ''
            }
        }
    }

    handleFormChange = (event, input_name, startEnd) => {
        this.setState({
            formData: {...this.state.formData, [input_name + startEnd] : event.target.value}
        })
    }

    handleSetAvailability = event => {
        event.preventDefault();
        alert(this.state.sundayStart);
    }

    sundayStartChange = event => {
        this.setState({ sundayStart: event.target.value })
    }

    sundayEndChange = event => {
        this.setState({ sundayEnd: event.target.value })
    }

    mondayStartChange = event => {
        this.setState({ sundayStart: event.target.value })
    }

    mondayEndChange = event => {
        this.setState({ sundayEnd: event.target.value })
    }

    tuesdayStartChange = event => {
        this.setState({ sundayStart: event.target.value })
    }

    tuesdayEndChange = event => {
        this.setState({ sundayEnd: event.target.value })
    }

    tuesdayStartChange = event => {
        this.setState({ sundayStart: event.target.value })
    }

    tuesdayEndChange = event => {
        this.setState({ sundayEnd: event.target.value })
    }

    tuesdayStartChange = event => {
        this.setState({ sundayStart: event.target.value })
    }

    tuesdayEndChange = event => {
        this.setState({ sundayEnd: event.target.value })
    }


    render() {
        return (
            <>
                <h3>Set availability</h3>
                <form onSubmit={this.handleSetAvailability}>
                    <div class="form-group border">
                        <h4>Sunday</h4>
                        <label for="exampleFormControlSelect1">Start time:</label>
                        <select value={this.state.sundayStart} onChange={this.sundayStartChange}
                            className="form-control" id="exampleFormControlSelect1">
                            <option>Select a start time</option>
                            <option>1:00am</option>
                            <option>2:00am</option>
                            <option>3:00am</option>
                            <option>4:00am</option>
                            <option>5:00am</option>
                            <option>6:00am</option>
                            <option>7:00am</option>
                            <option>8:00am</option>
                            <option>9:00am</option>
                            <option>10:00am</option>
                            <option>11:00am</option>
                            <option>12:00pm</option>
                            <option>1:00pm</option>
                            <option>2:00pm</option>
                            <option>3:00pm</option>
                            <option>4:00pm</option>
                            <option>5:00pm</option>
                            <option>6:00pm</option>
                            <option>7:00pm</option>
                            <option>8:00pm</option>
                            <option>9:00pm</option>
                            <option>10:00pm</option>
                            <option>11:00pm</option>
                            <option>12:00am</option>
                        </select>
                    </div>
                    <VendorTimeSelect  header="Sunday" formData={() => this.state.formData} handleFormChange={this.handleFormChange}/>
                    <VendorTimeSelect  header="Monday" formData={() => this.state.formData} handleFormChange={this.handleFormChange}/>
                    <button type='submit' value='Submit'>Submit</button>
                </form>
            </>
        )
    }
}

export default SetVendorAvailability;