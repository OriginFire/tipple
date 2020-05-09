import React, { useState } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import s from './DynamicSetting.scss';
import FormField from '../../sitewideDisplayComponents/formField';

function DynamicSetting(props) {
  const { settingName } = props;
  const { settingValue } = props;
  const { addressFieldType } = props;
  const [fieldValue, setFieldValue] = useState(settingValue);
  const [inputDisplayed, setInputDisplayed] = useState(false);

  function Content() {
    if (inputDisplayed) {
      return (
        <div>
          <div className={s.input_setting}>
            <div className={s.input}>
              <FormField
                placeholder={settingName}
                value={fieldValue}
                onChange={e => setFieldValue(e.target.value)}
              />
            </div>
            <FontAwesomeIcon
              icon={faEdit}
              className={s.icon}
              color="#7d7d7d"
              onClick={e => setInputDisplayed(false)}
            />
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className={s.display_setting}>
          <div className={s.setting_field}>{settingName}</div>
          <div className={s.setting_value}>{settingValue}</div>
          <FontAwesomeIcon
            icon={faEdit}
            className={s.icon}
            color="#7d7d7d"
            onClick={e => setInputDisplayed(true)}
          />
        </div>
      </div>
    );
  }

  return <div>{Content()}</div>;
}

export default withStyles(s)(DynamicSetting);
