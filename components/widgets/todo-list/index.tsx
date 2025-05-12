import { ScrollView, StyleSheet, View } from "react-native";
import { useTodos } from "@/store";
import { ListItem } from "@/components/features";

const TodoList = () => {
  const { todos } = useTodos();

  return (
    <ScrollView >
      <View style={styles.container}>
        {todos.map(list => <ListItem key={list.id} todoList={list} />)}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 8,
  },
});

export { TodoList };
