import React, { useState, useEffect, useContext } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { useMutation } from 'graphql-hooks';
import s from './AvailabilityInput.scss';

function TimeSelector(props) {
  const [startHour, setStartHour] = useState(props.startHour);
  const [endHour, setEndHour] = useState(props.endHour);

  function updateTimes() {
    let times = [startHour, endHour];
    props.updatedTimes(times);
  }

  return (
    <div className={s.shift}>
      <label className={s.availability_selector_label} onClick={e => updateTimes()} htmlFor="start time">
        Shift Start Time
      </label>
      <select
        id="start time"
        value={startHour}
        onChange={newHour => setStartHour(parseInt(newHour.target.value))}
        className={s.availability_selector}
      >
        <option value="0">12 AM</option>
        <option value="1">1 AM</option>
        <option value="2">2 AM</option>
        <option value="3">3 AM</option>
        <option value="4">4 AM</option>
        <option value="5">5 AM</option>
        <option value="6">6 AM</option>
        <option value="7">7 AM</option>
        <option value="8">8 AM</option>
        <option value="9">9 AM</option>
        <option value="10">10 AM</option>
        <option value="11">11 AM</option>
        <option value="12">12 PM</option>
        <option value="13">1 PM</option>
        <option value="14">2 PM</option>
        <option value="15">3 PM</option>
        <option value="16">4 PM</option>
        <option value="17">5 PM</option>
        <option value="18">6 PM</option>
        <option value="19">7 PM</option>
        <option value="20">8 PM</option>
        <option value="21">9 PM</option>
        <option value="22">10 PM</option>
        <option value="23">11 PM</option>
        <option value="24">12 AM</option>
      </select>

      <label className={s.availability_selector_label} htmlFor="end">
        Shift End Time
      </label>
      <select
        id="end"
        value={endHour}
        onChange={newHour => setEndHour(parseInt(newHour.target.value))}
        className={s.availability_selector}
      >
        <option value="0">12 AM</option>
        <option value="1">1 AM</option>
        <option value="2">2 AM</option>
        <option value="3">3 AM</option>
        <option value="4">4 AM</option>
        <option value="5">5 AM</option>
        <option value="6">6 AM</option>
        <option value="7">7 AM</option>
        <option value="8">8 AM</option>
        <option value="9">9 AM</option>
        <option value="10">10 AM</option>
        <option value="11">11 AM</option>
        <option value="12">12 PM</option>
        <option value="13">1 PM</option>
        <option value="14">2 PM</option>
        <option value="15">3 PM</option>
        <option value="16">4 PM</option>
        <option value="17">5 PM</option>
        <option value="18">6 PM</option>
        <option value="19">7 PM</option>
        <option value="20">8 PM</option>
        <option value="21">9 PM</option>
        <option value="22">10 PM</option>
        <option value="23">11 PM</option>
        <option value="24">12 AM</option>
      </select>
    </div>
  );
}

function AvailabilityInput(props) {
  const [availability, setAvailability] = useState(props.availabilityType);
  const individualShifts = [];

  function parseHours(day) {
    const shifts = [];
    let currentSequence = [];
    const hours = day.hours.sort((a, b) => a - b);
    hours.map((hour, index, hours) => {
      if (!currentSequence[0] && currentSequence[0] !== 0) {
        currentSequence[0] = hour;
      }
      if (!currentSequence[1]) {
        currentSequence[1] = hour;
      }
      if (hours[index - 1]) {
        if (hour - hours[index - 1] === 1) {
          currentSequence[1] = hour;
        } else {
          shifts.push(currentSequence);
          currentSequence = [];
        }
      }
      if (!hours[index + 1]) {
        shifts.push(currentSequence);
        currentSequence = [];
      }
    });
    if (shifts !== []) {
      individualShifts.push(shifts);
    }
    return shifts;
  }

  function updateShiftTimes(times, availabilityIndex, shiftIndex) {
    debugger
    console.log(individualShifts);
    individualShifts[availabilityIndex][shiftIndex] = times;
    console.log(individualShifts);
  }

  return (
    <div>
      {availability.map((day, availabilityIndex, days) => {
        const shifts = parseHours(day);
        return (
          <div className={s.availability_day}>
            <div className={s.day_indicator}>{day.day}</div>
            <div className={s.shift_list}>
              {shifts.map((shift, shiftIndex, shifts) => {
                return (
                  <TimeSelector
                    startHour={shift[0]}
                    endHour={shift[1]}
                    updatedTimes={times => updateShiftTimes(times, availabilityIndex, shiftIndex)}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default withStyles(s)(AvailabilityInput);
