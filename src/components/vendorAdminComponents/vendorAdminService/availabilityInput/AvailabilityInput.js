import React, { useState } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './AvailabilityInput.scss';
import ShiftList from "../shiftList/ShiftList";

function AvailabilityInput(props) {
  const [availability, setAvailability] = useState(props.availability);
  const [daySelectorsOpen, setDaySelectorsOpen] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  function newSelectorDisplayState(updatedSelectors) {
    console.log(daySelectorsOpen);
    const currentDisplay = daySelectorsOpen;
    currentDisplay[updatedSelectors] = !currentDisplay[updatedSelectors];
    setDaySelectorsOpen(currentDisplay);
    console.log(daySelectorsOpen);
  }

  return (
    <div className={s.day_list}>
      {availability.map((day, availabilityIndex, days) => {
        return (
          <div className={s.availability_day}>
            <div className={s.day}>
              <div className={s.day_indicator}>{day.day}</div>
            </div>
            <ShiftList shifts={day.shifts} />
          </div>
        );
      })}
    </div>
  );
}

export default withStyles(s)(AvailabilityInput);
