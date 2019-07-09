import React from 'react';
import VendorCard from '../../components/CustomerComponents/VendorCard'
import VendorAppointmentList from '../../components/VendorComponents/VendorAppointmentList'
import Calendar from 'react-calendar'
import './style.css';


class VendorView extends React.Component {
    constructor(props) {
        super(props);
            let newDate = new Date('03 Jul 2019 00:00:00 GMT-0400')

        this.state = {
           openDates: [ newDate.toString(),
                        ]
        }
    }

    tileClassName = ({date}) => {
        // console.log(date)
        date = date.toString()

        console.log("open dates" ,this.state.openDates[0])

        console.log('date', date);

        if(this.state.openDates.includes(date)){
            return "available"
        }
        else return "not"
    }
    
    render () {
        return(
            <>
        <h1>Vendor View</h1>
        <Calendar tileClassName={this.tileClassName}/>
        <VendorCard />
        <VendorAppointmentList />
    </>
        )
    }
}
    

export default VendorView;


