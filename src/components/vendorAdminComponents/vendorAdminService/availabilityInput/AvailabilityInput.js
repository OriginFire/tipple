import React, { useState, useEffect, useContext } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { useMutation } from 'graphql-hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import s from './AvailabilityInput.scss';

function TimeSelectors(props) {
  const [startHour, setStartHour] = useState(props.startHour);
  const [endHour, setEndHour] = useState(props.endHour);
  const [isOpen, setIsOpen] = useState(true);

  function updateTimes() {
    const times = [startHour, endHour];
    props.updatedTimes(times);
    setIsOpen(false);
  }

  function renderHours(startHour, endHour) {
    const converter = [
      "12 AM",
      "1 AM",
      "2 AM",
      "3 AM",
      "4 AM",
      "5 AM",
      "6 AM",
      "7 AM",
      "8 AM",
      "9 AM",
      "10 AM",
      "11 AM",
      "12 AP",
      "1 PM",
      "2 PM",
      "3 PM",
      "4 PM",
      "5 PM",
      "6 PM",
      "7 PM",
      "8 PM",
      "9 PM",
      "10 PM",
      "11 PM",
      "12 AM"
    ];
    let start = converter[startHour];
    let end = converter[endHour];
    return (`${start} - ${end}`)
  }

  function selectorDisplay() {
    if (isOpen) {
      return (
        <div className={s.shift}>
          <div className={s.selection_row}>
            <div className={s.selection}>
              <select
                id="start time"
                value={startHour}
                onChange={newHour => setStartHour(parseInt(newHour.target.value))}
                className={s.availability_selector}
              >
                <option value={"start"}>Start Time</option>
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
            <div className={s.availability_selector_label}>
              -
            </div>
            <div className={s.selection}>
              <select
                id="end"
                value={endHour}
                onChange={newHour => setEndHour(parseInt(newHour.target.value))}
                className={s.availability_selector}
              >
                <option value={"end"}>End Time</option>
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
          </div>

          <FontAwesomeIcon
            icon={faTrash}
            className={s.save}
            color="white"
            onClick={e => updateTimes()}
          />
        </div>
      );
    }
    return (
      <div className={s.shift}>
        <div className={s.hours}>From {renderHours(startHour, endHour)}</div>
      </div>
    );
  }

  return <div>{selectorDisplay()}</div>;
}

function AvailabilityInput(props) {
  const [availability, setAvailability] = useState(props.availabilityType);
  const [daySelectorsOpen, setDaySelectorsOpen] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const individualShifts = [];

  function newSelectorDisplayState(updatedSelectors) {
    console.log(daySelectorsOpen);
    const currentDisplay = daySelectorsOpen;
    currentDisplay[updatedSelectors] = !currentDisplay[updatedSelectors];
    setDaySelectorsOpen(currentDisplay);
    console.log(daySelectorsOpen);
  }

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
    console.log(individualShifts);
    individualShifts[availabilityIndex][shiftIndex] = times;
    console.log(individualShifts);
  }

  return (
    <div className={s.day_list}>
      {availability.map((day, availabilityIndex, days) => {
        const shifts = parseHours(day);
        return (
          <div className={s.availability_day}>
            <div className={s.day}>
              <div className={s.day_indicator}>{day.day}</div>
            </div>
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
                      updatedTimes={times =>
                        updateShiftTimes(times, availabilityIndex, shiftIndex)
                      }
                      isOpen={daySelectorsOpen[availabilityIndex]}
                    />
                  );
                })}
              </div>
              {!daySelectorsOpen[availabilityIndex] && (
                <FontAwesomeIcon
                  icon={faEdit}
                  className={s.icon}
                  color="#7d7d7d"
                  onClick={e => newSelectorDisplayState(availabilityIndex)}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default withStyles(s)(AvailabilityInput);