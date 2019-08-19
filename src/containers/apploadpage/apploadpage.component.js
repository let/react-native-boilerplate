import React, { Component } from "react";
import { ActivityIndicator, View, AsyncStorage } from "react-native";
import { loadUser } from "../../App/app.actions";
import { connect } from "react-redux";

class AppLoad extends Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }
  _bootstrapAsync = async () => {
    const user = await AsyncStorage.getItem("user");
    if (user) {
      this.props.loadUser(user);
    }
    setTimeout(() => {
      this.props.navigation.navigate(user ? "HomePage" : "LoginPage");
    }, 800);
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
}

export function mapDispatchToProps(dispatch, ownProps) {
  return {
    dispatch,
    loadUser: user => {
      dispatch(loadUser(user));
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(AppLoad);
