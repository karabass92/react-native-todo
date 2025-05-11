import { StyleSheet } from "react-native";

const color = {
  layoutBackground: "#dff2fe",
  navigationBackground: "#74d4ff",
};

export const style = StyleSheet.create({
  layoutBase: {
    paddingBlockStart: 48,
    paddingHorizontal: 12,
    paddingBlockEnd: 12,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: color.layoutBackground,
  },
  layoutNavigation: {
    paddingBlockStart: 48,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: color.layoutBackground,
  },
  navigation: {
    backgroundColor: color.navigationBackground,
    padding: 16,
    borderTopLeftRadius: 12,
    borderTopEndRadius: 12,
  },
  primaryButton: {
    borderRadius: 12,
  }
});
