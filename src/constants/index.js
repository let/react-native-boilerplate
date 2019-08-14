import { Dimensions, Platform } from "react-native";

//For Recalculate
export function getHeight() {
  const { height } = Dimensions.get("window");
  return height;
}
//For Recalculate
export function getWidth() {
  const { width } = Dimensions.get("window");
  return width;
}

export default {
  platform: Platform.OS,
  platformVersion: Platform.Version
};
