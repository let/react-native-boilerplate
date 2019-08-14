import EStyleSheet from "react-native-extended-stylesheet";

// always call EStyleSheet.build() even if you don't use global variables!
//Global variables
EStyleSheet.build({
  $appColor: "#0275d8",
  $textColor: "#0275d8",
  "@media ios": {
    $fontSize: 12
  },
  "@media android": {
    $fontSize: 16
  }
});
