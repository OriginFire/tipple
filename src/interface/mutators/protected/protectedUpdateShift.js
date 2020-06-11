import jwt from 'jsonwebtoken';
import Shift from '../../../data/models/Shift';
import ShiftType from '../../types/ShiftType';
import ShiftInputType from '../../types/ShiftInputType';
import config from '../../../config';
import AvailabilityScheduleType from "../../types/AvailabilityScheduleType";

const protectedUpdateShift = {
  type: ShiftType,
  args: {
    shift: { type: ShiftInputType },
  },
  async resolve(value, { shift }) {
    const JWT = jwt.verify(shift.JWT, config.auth.jwt.secret);

    await Shift.update(
      {
        startHour: shift.startHour,
        endHour: shift.endHour,
      },
      { where: { id: shift.id } },
    );
  },
};

export default protectedUpdateShift;
