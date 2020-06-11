import jwt from 'jsonwebtoken';
import Shift from '../../../data/models/Shift';
import ShiftType from "../../types/ShiftType";
import ShiftInputType from '../../types/ShiftInputType';
import config from '../../../config';

const protectedDeleteShift = {
  type: ShiftType,
  args: {
    shift: { type: ShiftInputType },
  },
  resolve(value, { shift }) {
    const JWT = jwt.verify(shift.JWT, config.auth.jwt.secret);

    Shift.destroy(
      { where: { id: shift.id } },
    );
  },
};

export default protectedDeleteShift;
