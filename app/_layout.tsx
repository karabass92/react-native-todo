import { Slot } from "expo-router";
import { View, Button } from "react-native";
import { useTodos } from "@/store"
import { style } from "@/constants";

const Layout = () => {
  const { addList } = useTodos();

  const handleCreateNewList = () => {
    addList('Новый список');
  }

  return (
    <View style={style.layoutBase}>
      <Slot />
      <Button 
        title="Новый список" 
        accessibilityLabel="Новый список"
        color={"#00a6f4"}
        onPress={handleCreateNewList}
      />
    </View>
  );
};

export default Layout;
