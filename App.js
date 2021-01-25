import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Campings from "./src/screens/Campings";
import Settings from './src/screens/Settings'

const navigator = createStackNavigator(
  {
    Campings: Campings,
    Settings: Settings,
  },
  {
    initialRouteName: "Campings",
    defaultNavigationOptions: {
      title: "Campings",
    },
  }
);

export default createAppContainer(navigator);
