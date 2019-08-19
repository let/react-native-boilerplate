import React from "react";
import {
  createSwitchNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import { Transition } from "react-native-reanimated";
import createAnimatedSwitchNavigator from "react-navigation-animated-switch";
import AppLoadPage from "../containers/apploadpage/apploadpage.component";
import HomePage from "../containers/homepage/homepage.component";
import LoginPage from "../containers/loginpage/loginpage.component";
const MainSideNavigator = createStackNavigator(
  {
    HomePage: {
      screen: HomePage
    }
  },
  {
    initialRouteName: "HomePage"
  }
);

const AuthNavigator = createSwitchNavigator(
  {
    LoginPage: {
      screen: LoginPage
    }
  },
  {
    initialRouteName: "LoginPage"
  }
);

const AppNavigator = createAnimatedSwitchNavigator(
  {
    AppLoad: AppLoadPage,
    AuthNavigator: AuthNavigator,
    MainSideNavigator: MainSideNavigator
  },
  {
    initialRouteName: "AppLoad",
    transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-right"
          durationMs={400}
          interpolation="linear"
        />
        <Transition.In type="slide-left" durationMs={500} />
      </Transition.Together>
    )
  }
);

const AppNavigatorContainer = createAppContainer(AppNavigator);

export default AppNavigatorContainer;

export const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};
