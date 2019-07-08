import React from 'react';
import './style.css';

const FilterWrapper = () => (
    <div className='col-md-3 col-12 filter-wrapper'>
        <h4 className='text-center'>Narrow Your Search</h4>
        <hr />
        <label><input type='checkbox' id='sunday' /> Sunday</label><br />
        <label><input type='checkbox' id='monday' /> Monday</label><br />
        <label><input type='checkbox' id='tuesday' /> Tuesday</label><br />
        <label><input type='checkbox' id='wednesday' /> Wednesday</label><br />
        <label><input type='checkbox' id='thursday' /> Thursday</label><br />
        <label><input type='checkbox' id='friday' /> Friday</label><br />
        <label><input type='checkbox' id='saturday' /> Saturday</label><br />
    </div>
)

export default FilterWrapper;