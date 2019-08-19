import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import AppNavigatorContainer from "../navigations";
import NavigationService from "../utils/NavigationService";

class GlobalApp extends Component {
  constructor(props) {
    super(props);
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

export default connect(
  null,
  null
)(GlobalApp);
