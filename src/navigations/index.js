import {
  createSwitchNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import HomePage from "../containers/homepage/homepage.component";

const MainSideNavigator = createSwitchNavigator(
  {
    HomePage: {
      screen: HomePage
    }
  },
  {
    initialRouteName: "HomePage"
  }
);

const AppNavigator = createSwitchNavigator(
  {
    MainSideNavigator: MainSideNavigator
  },
  {
    initialRouteName: "MainSideNavigator"
  }
);

const AppNavigatorContainer = createAppContainer(AppNavigator);

export default AppNavigatorContainer;

export const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};
