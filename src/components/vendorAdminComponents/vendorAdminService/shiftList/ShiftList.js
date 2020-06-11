import React, { useState, useEffect, useContext } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import s from './ShiftList.scss';
import TimeSelectors from "../timeSelectors/TimeSelectors";
import ApplicationContext from "../../../ApplicationContext";
import {useMutation} from "graphql-hooks";

const UPDATE_SHIFTS = `
  mutation UpdateShift ($JWT: String!, $id: String!, $startHour: Int!, $endHour: Int!) {
    protectedUpdateShift(shift: {
        JWT: $JWT,
        id: $id,
        startHour: $startHour,
        endHour: $endHour,
    }) {
      id
    }
  }
`;

const DELETE_SHIFT = `
  mutation DeleteShift ($JWT: String!, $id: String!) {
    protectedDeleteShift(shift: {
        JWT: $JWT,
        id: $id
    }) {
      id
    }
  }
`;

const CREATE_SHIFT = `
  mutation CreateShift ($JWT: String!, $scheduleId: String!) {
    protectedNewShift(shift: {
        JWT: $JWT,
        scheduleId: $scheduleId,
      }) {
      id
    }
  }
`;

function ShiftList(props) {
  const authenticationContext = useContext(ApplicationContext);
  const [shifts, setShifts] = useState(props.shifts);
  const [daySelectorsOpen, setDaySelectorsOpen] = useState(false);
  const { scheduleId } = props;
  const [createShift] = useMutation(CREATE_SHIFT);
  const [deleteThisShift] = useMutation(DELETE_SHIFT);
  const [saveAllChanges] = useMutation(UPDATE_SHIFTS);

  function updateShifts(newTimes, shiftArrayIndex) {
    let updatedShifts = shifts;
    updatedShifts[shiftArrayIndex].startHour = newTimes[0];
    updatedShifts[shiftArrayIndex].endHour = newTimes[1];
    setShifts(updatedShifts);
  }

  function saveUpdates() {
    setDaySelectorsOpen(false);
    shifts.map(shift => {
      console.log(shift.startHour, shift.endHour);
      const update = saveAllChanges({
        variables: {
          JWT: authenticationContext.context.JWT,
          id: shift.id,
          startHour: shift.startHour,
          endHour: shift.endHour,
        }
      })
    })
  }

  async function addNewShift() {
    let newShifts = [];
    shifts.map(shift => {
      newShifts.push(shift);
    });
    newShifts.push({startHour: 25, endHour: 25});
    setShifts(newShifts);
    const newShift = await createShift({
      variables: {
        JWT: authenticationContext.context.JWT,
        scheduleId,
      }
    })
  }

  async function deleteShift(shiftID, index) {
    let newShifts = [];
    shifts.map(shift => {
      newShifts.push(shift);
    });
    newShifts.splice(index, 1);
    setShifts(newShifts);
    let deleted = await deleteThisShift({
      variables: {
        JWT: authenticationContext.context.JWT,
        id: shiftID,
      }
    })
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
              startHour={shift.startHour}
              endHour={shift.endHour}
              key={shift.id}
              updatedShifts={times => updateShifts(times, shiftIndex)}
              deleteShift={e => deleteShift(shift.id, shiftIndex)}
              isOpen={daySelectorsOpen}
            />
          );
        })}
        {daySelectorsOpen && (
          <div className={s.add_shift} onClick={e => addNewShift()}><span className={s.plus}>+ </span> Add a shift</div>
        )}
      </div>
      {!daySelectorsOpen && (
        <FontAwesomeIcon
          icon={faEdit}
          color="#7d7d7d"
          className={s.icon}
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
