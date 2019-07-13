import React from 'react';


class SetVendorAvailability extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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



    render() {
        return (
            <>
                <h3>Set availability</h3>
                <form onSubmit={this.handleSetAvailability}>
                    <div class="form-group">
                        <h4>Sunday</h4>
                        <label for="exampleFormControlSelect1">Start time:</label>
                        <select value={this.state.sundayStart} onChange={this.handleChange}
                            class="form-control" id="exampleFormControlSelect1">
                            <option>1:00am</option>
                            <option>2:00am</option>
                            <option>3:00am</option>
                            <option>4:00am</option>
                            <option>5:00am</option>
                        </select>
                    </div>
                    <button type='submit' value='Submit'>Submit</button>
                </form>
            </>
        )
    }
}

export default SetVendorAvailability;