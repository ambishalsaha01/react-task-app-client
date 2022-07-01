import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calender = () => {
    return (
        <div className='text-center col-lg-6 mx-auto my-5'>
            <DayPicker />
        </div>
    );
};

export default Calender;