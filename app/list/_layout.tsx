import { Slot } from "expo-router";
import { View } from "react-native";

import { Navigation } from "@/components/widgets";
import { TodosProvider } from "@/store";
import { style } from "@/constants";

const Layout = () => {
  return (
    <TodosProvider>
      <View style={style.layoutNavigation}>
        <Slot />
        <Navigation />
      </View>
    </TodosProvider>
  );
};

export default Layout;
