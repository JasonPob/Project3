import React from 'react';
import './style.css';

const FilterWrapper = () => (
    <div className='col-md-3 col-12 filter-wrapper'>
        <h4 className='text-center'>Narrow Your Search</h4>
        <hr />
        <label><input type='checkbox' id='sunday' checked /> Sunday</label><br />
        <label><input type='checkbox' id='monday' checked /> Monday</label><br />
        <label><input type='checkbox' id='tuesday' checked /> Tuesday</label><br />
        <label><input type='checkbox' id='wednesday' checked /> Wednesday</label><br />
        <label><input type='checkbox' id='thursday' checked /> Thursday</label><br />
        <label><input type='checkbox' id='friday' checked /> Friday</label><br />
        <label><input type='checkbox' id='saturday' checked /> Saturday</label><br />
    </div>
)

export default FilterWrapper;