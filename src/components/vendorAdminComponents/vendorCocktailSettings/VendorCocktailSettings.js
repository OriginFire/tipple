import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './VendorCocktailSettings.scss';
import FormField from '../../sitewideDisplayComponents/formField';
import Button from "../../sitewideDisplayComponents/Button";

class VendorCocktailSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCocktailEdit: null,
      cocktails: this.props.vendorAccount.cocktails,
    };
    this.myDivToFocus = React.createRef();
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(index) {
    if (this.state.activeCocktailEdit === index) {
      this.setState({
        activeCocktailEdit: null,
      });
    } else
      this.setState({
        activeCocktailEdit: index,
      });
  }

  handleButtonClick = event => {
    if (this.myDivToFocus.current) {
      this.myDivToFocus.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  };

  cocktailInputs(index, cocktailState) {
    if (index === this.state.activeCocktailEdit)
      return (
        <form className={s.cocktail_edit_fields}>
          <FormField
            placeholder="Cocktail Name"
            onChange={e =>
              this.setState({ cocktailState: { name: e.target.value } })
            }
            type="text"
            value={cocktailState.name}
          />
          <FormField
            placeholder="Ingredients"
            onChange={e =>
              this.setState({ cocktailState: { name: e.target.value } })
            }
            type="text"
            value={cocktailState.ingredients}
          />
          <Button type="Secondary" text="Save Changes"/>
        </form>
      );
  }

  render() {
    const vendor = this.props.vendorAccount;

    return (
      <div className={s.settings_content}>
        {vendor.cocktails.map((cocktail, index, cocktails) => {
          let cocktailItemStatus;

          if (index === this.state.activeCocktailEdit) {
            cocktailItemStatus = s.item_box_active;
          } else {
            cocktailItemStatus = s.item_box;
          }

          const cocktailState = this.state.cocktails[index];
          console.log(cocktailState.name);

          return (
            <div className={cocktailItemStatus}>
              <div
                className={s.cocktail}
                onClick={e => this.handleOnClick(index)}
              >
                <img
                  className={s.cocktail_image}
                  src="../../../../Urbana.jpg"
                />
                <div className={s.cocktail_text}>
                  <div className={s.cocktail_name}>{cocktail.name}</div>
                  <div className={s.ingredients}>
                    {cocktail.ingredients}
                  </div>
                </div>
              </div>
              {this.cocktailInputs(index, cocktailState)}
            </div>
          );
        })}

        <div ref={this.myDivToFocus}>Test.</div>
      </div>
    );
  }
}

export default withStyles(s)(VendorCocktailSettings);
