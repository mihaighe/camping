import { createStackNavigator } from "react-navigation-stack";

import Campings from "../screens/Campings";
import Settings from "../screens/Settings";

export default createStackNavigator({
  Settings: Settings,
  Campings: Campings,
});
