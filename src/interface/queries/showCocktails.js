import { GraphQLList as List } from "graphql";
import Vendor from '../../data/models/Vendor';
import Cocktail from "../../data/models/Cocktail";
import CocktailType from "../types/CocktailType";
import FindVendorType from "../types/FindVendorType";


const showCocktails = {
  type: List(CocktailType),
  vendor: {type: FindVendorType},
  resolve(value, {vendor}) {
    let theVendor = Vendor.findOne( {where: { slug: vendor.slug} });
  },
};

export default showCocktails;
