import jwt from 'jsonwebtoken';
import config from '../../../config';
import Shift from "../../../data/models/Shift";
import ShiftType from '../../types/ShiftType';
import ShiftInputType from '../../types/ShiftInputType';
import AvailabilitySchedule from "../../../data/models/AvailabilitySchedule";

const protectedNewShift = {
  type: ShiftType,
  args: {
    shift: { type: ShiftInputType },
  },
  resolve(value, { shift }) {
    // check JWT valid
    const JWT = jwt.verify(shift.JWT, config.auth.jwt.secret);
    const AvailabilityScheduleId = shift.scheduleId;

    console.log(JWT);

    AvailabilitySchedule.findOne({ where: { id: AvailabilityScheduleId } })
      .then(() => {
        return Shift.create({
          AvailabilityScheduleId: AvailabilityScheduleId,
          startHour: 25,
          endHour: 25,
        });
      })
      .error(() => {
        console.log('Unable to find vendor');
      });
  },
};

export default protectedNewShift;
