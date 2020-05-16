import React, { useState, useEffect, useContext } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { useMutation } from 'graphql-hooks';
import s from './AvailabilityInput.scss';

function AvailabilityInput(props) {
  const [availability, setAvailability] = useState(props.availabilityType);
  const [hourSequences, setHourSequences] = useState([]);
  console.log(hourSequences);

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
    console.log(shifts, 'hash');
    return shifts;
  }

  return (
    <div>
      {availability.map((day, availabilityIndex, days) => {
        const shifts = parseHours(day);
        return (
          <div className={s.availability_day}>
            <div className={s.day_indicator}>{day.day}</div>
            <div className={s.shift_list}>
              {shifts.map(shift => {
                let currentValue = shift[0];
                return (
                  <div className={s.shift}>
                    <label
                      className={s.availability_selector_label}
                      htmlFor="start time"
                    >
                      Shift Start Time
                    </label>
                    <select
                      id="start time"
                      value={shift[0]}
                      onChange={newHour => console.log(newHour.target.value)}
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

                    <label
                      className={s.availability_selector_label}
                      htmlFor="end"
                    >
                      Shift End Time
                    </label>
                    <select
                      id="end"
                      value={shift[1]}
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
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default withStyles(s)(AvailabilityInput);
