import withStyles from 'isomorphic-style-loader/withStyles';
import React from 'react';
import s from './VendorSignupForm.scss';

function VendorFormStatus(props) {
  const { formStage } = props;
  return (
    <div>
      {(() => {
        switch (formStage) {
          case 1:
            return (
              <div className={s.form_status}>
                <div className={s.active_status_item}>
                  <div className={s.status_indicator}>Account User</div>
                  <div className={s.status_bar} />
                </div>
                <div className={s.status_item} onClick={e => props.formStageChange(2)}>
                  <div className={s.status_indicator}>Business Details</div>
                </div>
                <div className={s.status_item} onClick={e => props.formStageChange(3)}>
                  <div className={s.status_indicator}>Alcohol License</div>
                </div>
              </div>
            );
          case 2:
            return (
              <div className={s.form_status}>
                <div className={s.status_item} onClick={e => props.formStageChange(1)}>
                  <div className={s.status_indicator}>Account User</div>
                </div>
                <div className={s.active_status_item}>
                  <div className={s.status_indicator}>Business Details</div>
                  <div className={s.status_bar} />
                </div>
                <div className={s.status_item} onClick={e => props.formStageChange(3)}>
                  <div className={s.status_indicator}>Alcohol License</div>
                </div>
              </div>
            );
          case 3:
            return (
              <div className={s.form_status}>
                <div
                  className={s.active_status_item}
                  onClick={e => props.formStageChange(1)}
                >
                  <div className={s.status_indicator}>Account User</div>
                </div>
                <div className={s.status_item} onClick={e => props.formStageChange(2)}>
                  <div className={s.status_indicator}>Business Details</div>
                </div>
                <div className={s.active_status_item}>
                  <div className={s.status_indicator}>Alcohol License</div>
                  <div className={s.status_bar} />
                </div>
              </div>
            );
        }
      })()}
    </div>
  );
}

export default withStyles(s)(VendorFormStatus)
