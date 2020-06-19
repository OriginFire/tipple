import React from 'react';
import withStyles from "isomorphic-style-loader/withStyles";
import s from './VendorSignupForm.scss';
import Button from '../../sitewideDisplayComponents/Button';
import history from "../../../history";

function VendorFormButtons(props) {
  const { formStage } = props;

  return (
    <div className={s.buttons}>
      {(() => {
        switch (formStage) {
          case 1:
            return (
                <Button
                  type="Secondary"
                  text="Return Home"
                  onClick={e => history.push('./')}
                />
            );
          case 2:
            return (
              <Button
                type="Secondary"
                onClick={e => props.formStageChange(1)}
                text="Go Back"
              />
            );
          case 3:
            return (
              <Button
                type="Secondary"
                onClick={e => props.formStageChange(2)}
                text="Go Back"
              />
            );
        }
      })()}

      {(() => {
        switch (formStage) {
          case 1:
            return (
              <Button
                type="Primary"
                onClick={e => props.formStageChange(2)}
                text="Next"
              />
            );
          case 2:
            return (
              <Button
                type="Primary"
                onClick={e => props.formStageChange(3)}
                text="Next"
              />
            );
          case 3:
            return (
              <Button
                type="Primary"
                onClick={props.submitForm}
                text="Add My Bar"
              />
            );
        }
      })()}
    </div>
  );
}

export default withStyles(s)(VendorFormButtons);
