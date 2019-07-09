import React from 'react';
import './style.css';

const FilterWrapper = props => {
    console.log('filterprops', props)
    return (
    <div className='col-md-3 col-12 filter-wrapper'>
        <h4 className='text-center'>Narrow Your Search</h4>
        <hr />
        {/* Name is used in the onChange function. Needs to contain IsChecked, since that's what it's called in state. */}
        <label><input type='checkbox' name='sundayIsChecked' checked={props.sundayIsChecked} onChange={props.handleFilterChange} /> Sunday</label><br />
        <label><input type='checkbox' name='mondayIsChecked' checked={props.mondayIsChecked} onChange={props.handleFilterChange} /> Monday</label><br />
        <label><input type='checkbox' name='tuesdayIsChecked' checked={props.tuesdayIsChecked} onChange={props.handleFilterChange} /> Tuesday</label><br />
        <label><input type='checkbox' name='wednesdayIsChecked' checked={props.wednesdayIsChecked} onChange={props.handleFilterChange} /> Wednesday</label><br />
        <label><input type='checkbox' name='thursdayIsChecked' checked={props.thursdayIsChecked} onChange={props.handleFilterChange} /> Thursday</label><br />
        <label><input type='checkbox' name='fridayIsChecked' checked={props.fridayIsChecked} onChange={props.handleFilterChange} /> Friday</label><br />
        <label><input type='checkbox' name='saturdayIsChecked' checked={props.saturdayIsChecked} onChange={props.handleFilterChange} /> Saturday</label><br />
    </div>
)}

export default FilterWrapper;