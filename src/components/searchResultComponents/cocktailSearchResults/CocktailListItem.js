import React, { useState } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import s from './CocktailResultsList.scss';
import history from '../../../history';

function CocktailListItem(props) {
  const { vendor } = props;
  const { cocktail } = props;
  const { index } = props;
  const [isOpen, setIsOpen] = useState(false);

  function DisplayContent(vendor) {
    if (isOpen) {
      return (
        <div
          index={index}
          className={s.list_item}
          // onClick={e => history.push(`/vendor/${vendor.slug}`)}
        >
          <div>
            <img
              className={s.cocktail_image}
              src={`data:image/jpg;base64,${cocktail.image}`}
              alt={`${cocktail.name} Image`}
            />
            <div className={s.vendor_name}>Sold by {vendor.dbaName}</div>
            <div className={s.availability}>Available Today</div>
          </div>

          <div className={s.result_text}>
            <div className={s.cocktail_name}>{cocktail.name}</div>
            <div className={s.price}>
              ${cocktail.price} / {cocktail.servingSize} oz serving
            </div>
            <div className={s.ingredients}>
              {cocktail.description} {cocktail.description.length}
            </div>
            <div className={s.expand} onClick={e => setIsOpen(false)}>
              Now This Is Open{` `}
              <FontAwesomeIcon icon={faChevronUp} size="xs" />
            </div>
          </div>
        </div>
      );
    }
    return (
      <div
        index={index}
        className={s.list_item}
        // onClick={e => history.push(`/vendor/${vendor.slug}`)}
      >
        <div>
          <img
            className={s.cocktail_image}
            src={`data:image/jpg;base64,${cocktail.image}`}
            alt={`${cocktail.name} Image`}
          />
          <div className={s.vendor_name}>Sold by {vendor.dbaName}</div>
          <div className={s.availability}>Available Today</div>
        </div>

        <div className={s.result_text}>
          <div className={s.cocktail_name}>{cocktail.name}</div>
          <div className={s.price}>
            ${cocktail.price} / {cocktail.servingSize} oz serving
          </div>
          <div className={s.ingredients}>
            {cocktail.ingredients} {cocktail.ingredients.length}
          </div>
          <div className={s.expand} onClick={e => setIsOpen(true)}>
            More Details{` `}
            <FontAwesomeIcon icon={faChevronDown} size="xs" />
          </div>
        </div>
      </div>
    );
  }

  return <div>{DisplayContent(vendor)}</div>;
}

export default withStyles(s)(CocktailListItem);
