import { Slot } from "expo-router";
import { View } from "react-native";

import { Navigation } from "@/components/widgets";
import { style } from "@/constants";

const ListLayout = () => {
  return (
    <View style={style.layoutNavigation}>
      <Slot />
      <Navigation />
    </View>
  );
};

export default ListLayout;
