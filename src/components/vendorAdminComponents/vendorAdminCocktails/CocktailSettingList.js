import React, { set } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './VendorCocktailSettings.scss';
import SingleVendorCocktail from "./Cocktail";

class CocktailSettingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCocktailId: null,
    };
    this.updateActiveCocktailId = this.updateActiveCocktailId.bind(this);

  }

  updateActiveCocktailId(cocktailId) {
    this.setState({activeCocktailId: cocktailId});
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
          return (
            <SingleVendorCocktail
              key={index}
              vendor={vendor}
              cocktail={cocktail}
              activeId={this.state.activeCocktailId}
              updateActiveCocktailId={this.updateActiveCocktailId}
            />
          )
        })}

        <div className={s.end_explainer}>{explainer}</div>
      </div>
    );
  }
}

export default withStyles(s)(CocktailSettingList);
