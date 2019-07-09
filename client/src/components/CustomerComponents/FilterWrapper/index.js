import React from 'react';
import './style.css';

const FilterWrapper = props => {
    console.log('filterprops', props)
    return (
        <div className='col-md-3 col-12 filter-wrapper'>
            <h4 className='text-center'>Narrow Your Search</h4>
            <hr />
            {/* Name is used in the onChange function. Needs to contain IsChecked, since that's what it's called in state. */}
            <form>
                <label>
                    <input type='radio'
                        value='sunday'
                        checked={props.apptDay === 'sunday'}
                        onChange={props.handleFilterChange} />
                    Sunday
                </label><br />
                <label>
                    <input type='radio'
                        value='monday'
                        checked={props.apptDay === 'monday'}
                        onChange={props.handleFilterChange} />
                    Monday
                </label><br />
                <label>
                    <input type='radio'
                        value='tuesday'
                        checked={props.apptDay === 'tuesday'}
                        onChange={props.handleFilterChange} />
                    Tuesday
                </label><br />
                <label>
                    <input type='radio'
                        value='wednesday'
                        checked={props.apptDay === 'wednesday'}
                        onChange={props.handleFilterChange} />
                    Wednesday
                </label><br />
                <label>
                    <input type='radio'
                        value='thursday'
                        checked={props.apptDay === 'thursday'}
                        onChange={props.handleFilterChange} />
                    Thursday
                </label><br />
                <label>
                    <input type='radio'
                        value='friday'
                        checked={props.apptDay === 'friday'}
                        onChange={props.handleFilterChange} />
                    Friday
                </label><br />
                <label>
                    <input type='radio'
                        value='saturday'
                        checked={props.apptDay === 'saturday'}
                        onChange={props.handleFilterChange} />
                    Saturday
                </label><br />
            </form>
        </div>
    )
}

export default FilterWrapper;