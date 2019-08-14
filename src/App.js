import React, { Component } from "react";
import { View } from "react-native";

import AppNavigatorContainer from "./navigations";
import NavigationService from "./utils/NavigationService";

class GlobalApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppNavigatorContainer
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </View>
    );
  }
}

export default GlobalApp;
