import React, { useState } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './Availability.scss';
import ShiftList from '../shiftList/ShiftList';

function Availability(props) {
  const [availability, setAvailability] = useState(props.availability);
  console.log(availability);

  function updateAvailability(updatedShifts, index) {
    const newAvailability = [];
    availability.forEach(day => {
      newAvailability.push(day);
    });
    newAvailability[index].shifts = updatedShifts;
    props.setNewAvailability(newAvailability);
  }

  return (
    <div className={s.day_list}>
      {availability.map((day, index, days) => {
        return (
          <div className={s.availability_day}>
            <div className={s.day}>
              <div className={s.day_indicator}>{day.day}</div>
            </div>
            <ShiftList
              scheduleId={day.id}
              shifts={day.Shifts}
              updateShifts={updatedShifts =>
                updateAvailability(updatedShifts, index)
              }
            />
          </div>
        );
      })}
    </div>
  );
}

export default withStyles(s)(Availability);
