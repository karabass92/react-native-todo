import { ScrollView, Text, View } from "react-native";
import { useTodos } from "@/store"

const MainScreen = () => {
  const { todos } = useTodos();

  return (
    <ScrollView>
      {todos.length ? (
        todos.map(list => (
          <View key={list.id}>
            <Text>
              {list.title}
            </Text>
          </View>
        ))
      ) : (
        <View>
          <Text>Нет списков Todo</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default MainScreen;
