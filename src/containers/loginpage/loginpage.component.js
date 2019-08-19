import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { connect } from "react-redux";
import { login } from "./loginpage.actions";
import { log } from "handlebars";
class LoginPage extends Component {
  onPressLearnMore = () => {
    //this.props.login.then()
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Login Page</Text>
        <Button
          onPress={this.onPressLearnMore}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

export function mapDispatchToProps(dispatch, ownProps) {
  return {
    dispatch,
    login: value => {
      return new Promise((resolve, reject) =>
        dispatch(login(value, resolve, reject))
      );
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(LoginPage);
