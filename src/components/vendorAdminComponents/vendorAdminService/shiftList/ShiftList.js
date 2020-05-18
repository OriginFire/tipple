import React, { useState } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import s from './ShiftList.scss';
import TimeSelectors from "../timeSelectors/TimeSelectors";

function ShiftList(props) {
  const [shifts, setShifts] = useState(props.shifts);
  const [daySelectorsOpen, setDaySelectorsOpen] = useState(false);

  return (
    <div className={s.shift_list}>
      <div>
        {(shifts.length === 0) && (
          <div className={s.hours}>No hours of operation for this day.</div>
        )}
        {shifts.map((shift, shiftIndex, shifts) => {
          return (
            <TimeSelectors
              startHour={shift[0]}
              endHour={shift[1]}
              updatedTimes={times => setShifts(times)}
              isOpen={daySelectorsOpen}
            />
          );
        })}
      </div>
      {!daySelectorsOpen && (
        <FontAwesomeIcon
          icon={faEdit}
          className={s.icon}
          color="#7d7d7d"
          onClick={e => setDaySelectorsOpen(true)}
        />
      )}
      {daySelectorsOpen && (
        <div className={s.save} onClick={e => setDaySelectorsOpen(false)}>Save</div>
        )}
    </div>
  )
}

export default withStyles(s)(ShiftList);
