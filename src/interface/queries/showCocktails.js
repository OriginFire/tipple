import { GraphQLList as List } from "graphql";
import BarType from "../types/VendorType";
import Bar from '../../data/models/Vendor';


const showCocktails = {
  type: List(BarType),
  resolve() {
    cocktails = Bar.finderFunction();
    bars.mapToDelivery();
    return (
      cocktails
    );
  },
};

export default showCocktails;
