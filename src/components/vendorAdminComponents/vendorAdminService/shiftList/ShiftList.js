import React, { useState, useEffect } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import s from './ShiftList.scss';
import TimeSelectors from "../timeSelectors/TimeSelectors";

function ShiftList(props) {
  const [shifts, setShifts] = useState(props.shifts);
  const [daySelectorsOpen, setDaySelectorsOpen] = useState(false);

  function updateShifts(newTimes, shiftArrayIndex) {
    let updatedShifts = shifts;
    updatedShifts[shiftArrayIndex].start = newTimes[0];
    updatedShifts[shiftArrayIndex].end = newTimes[1];
    setShifts(updatedShifts);
  }

  function saveUpdates() {
    setDaySelectorsOpen(false);
    props.updateShifts(shifts);
  }

  function createShift() {
    let newShifts = [];
    shifts.map(shift => {
      newShifts.push(shift);
    });
    newShifts.push({start: 25, end: 25});
    setShifts(newShifts);
  }

  function deleteShift(index) {
    let newShifts = [];
    shifts.map(shift => {
      newShifts.push(shift);
    });
    newShifts.splice(index, 1);
    setShifts(newShifts);
  }

  return (
    <div className={s.shift_list}>
      <div>
        {(shifts.length === 0) && (
          <div className={s.hours}>No hours of operation for this day.</div>
        )}
        {shifts.map((shift, shiftIndex, shifts) => {
          return (
            <TimeSelectors
              startHour={shift.start}
              endHour={shift.end}
              updatedShifts={times => updateShifts(times, shiftIndex)}
              deleteShift={e => deleteShift(shiftIndex)}
              isOpen={daySelectorsOpen}
            />
          );
        })}
        {daySelectorsOpen && (
          <div className={s.add_shift} onClick={e => createShift()}><span className={s.plus}>+ </span> Add a shift</div>
        )}
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
        <div className={s.save} onClick={e => saveUpdates()}>Save</div>
      )}
    </div>
  )
}

export default withStyles(s)(ShiftList);
