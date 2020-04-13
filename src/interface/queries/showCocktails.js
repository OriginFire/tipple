import { GraphQLList as List } from "graphql";
import BarType from "../types/BarType";
import Bar from '../../data/models/Bar';


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
