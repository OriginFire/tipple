import React from 'react';
import withStyles from "isomorphic-style-loader/withStyles";
import s from "./FilterSettings.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';


function FilterSettings(props) {
  return(
    <div>
      {props.isOpen &&
        <div className={s.filter_settings}>Filter settings
          <div className={s.close} onClick={e => props.close('New Settings?')}>
            <FontAwesomeIcon icon={faTimes} size="lg" color="white" pull="right" />
          </div>

        </div>
      }
    </div>

  )
};

export default withStyles(s)(FilterSettings);
