import { Slot } from "expo-router";
import { View } from "react-native"
import { style } from "@/constants";

const BaseLayout = () => {
  return (
    <View style={style.layout}>
      <Slot />
    </View>
  );
};


export default BaseLayout;
