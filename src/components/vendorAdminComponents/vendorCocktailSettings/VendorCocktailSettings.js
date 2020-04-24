import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './VendorCocktailSettings.scss';
import FormField from '../../sitewideDisplayComponents/formField';
import Button from "../../sitewideDisplayComponents/Button";
import db from "../../../data/dbSimulator/Vendors";

class VendorCocktailSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCocktailEdit: null,
      cocktails: this.props.vendor.cocktails,
      cocktailState: {},
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(index) {
    if (this.state.activeCocktailEdit === index) {
      this.setState({
        activeCocktailEdit: null,
      });
    } else {
      this.setState({
        activeCocktailEdit: index,
      });
    }
  }

  cocktailInputs(index, cocktail) {
    if (index === this.state.activeCocktailEdit) {
      return (
        <div className={s.cocktail_edit_fields}>
          <div className={s.image_upload_line}>
            <img className={s.upload_image} src="../../../../Urbana.jpg" />
            <div className={s.upload_image_filename}>Test</div>
            <div></div>
          </div>
          <FormField
            placeholder="Cocktail Name"
            onChange={e =>
              this.setState({cocktailState: {name: e.target.value}})
            }
            type="text"
            value={this.state.cocktails[index].name}
          />
          <FormField
            placeholder="Ingredients"
            onChange={e =>
              this.setState({cocktailState: {name: e.target.value}})
            }
            type="text"
            value={this.state.cocktails[index].ingredients}
          />
          <Button type="Secondary" text="Save Changes" onClick={e => this.handleOnClick(index)}/>
          <Button type="Primary" text="Delete Cocktail"/>
        </div>
      );
    }
  }

  render() {
    let vendor = this.props.vendor;
    let explainer;

    if (vendor.cocktails.length === 0) {
      explainer = "You haven't uploaded any cocktails yet. Click the 'Add A Cocktail' button to get started."
    } else {
      explainer = "That's all the cocktails you've uploaded so far. To edit or remove a cocktail, click or tap on it in the list."
    }

    return (
      <div className={s.cocktail_list}>
        {vendor.cocktails.map((cocktail, index, cocktails) => {
          let cocktailItemStatus;
          if (index === this.state.activeCocktailEdit) {
            cocktailItemStatus = s.item_box_active;
          } else {
            cocktailItemStatus = s.item_box;
          }
          return (
            <div key={index} className={cocktailItemStatus}>
              <div className={s.cocktail} onClick={e => this.handleOnClick(index)}>
                <img className={s.cocktail_image} src="../../../../Urbana.jpg" />
                <div className={s.cocktail_text}>
                  <div className={s.cocktail_name}>{cocktail.name}</div>
                  <div className={s.ingredients}>
                    {cocktail.ingredients}
                  </div>
                </div>

              </div>
              {this.cocktailInputs(index, cocktail)}
            </div>
          );
        })}

        <div className={s.end_explainer}>{explainer}</div>
      </div>
    );
  }
}

export default withStyles(s)(VendorCocktailSettings);
