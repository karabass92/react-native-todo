import { Slot } from "expo-router";
import { View } from "react-native";

import { Navigation } from "@/components/widgets";
import { style } from "@/constants";

const ListLayout = () => {
  return (
    <View style={style.layoutNavigation}>
      <Navigation />
      <Slot />
    </View>
  );
};

export default ListLayout;
