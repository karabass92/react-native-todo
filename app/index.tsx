import { Text, View, ScrollView, StyleSheet } from "react-native";
import { useTodos } from "@/store";
import { TodoList, AddList } from "@/components/widgets";

const MainScreen = () => {
  const { todos } = useTodos();

  return (
    <View style={styles.layout}>
      <ScrollView style={styles.screenContainer}>
        {todos.length ? (
          <TodoList />
        ) : (
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              Нет списков Todo
              </Text>
            <Text style={styles.text}>
              Создате первый список
            </Text>
          </View>
        )}
      </ScrollView>
      <AddList />
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    padding: 12,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#dff2fe",
  },
  screenContainer: {
    flexGrow: 1,  
  }, 
   textContainer: {
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: 600,
    color: "#00a6f4",
  }
});

export default MainScreen;
