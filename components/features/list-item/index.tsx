import { FC } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTodos } from "@/store";
import { TodoList } from "@/types";
import { Link } from "expo-router";

type Props = {
  todoList: TodoList;
};

const ListItem: FC<Props> = ({ todoList }: Props) => {
  const { title, id } = todoList;
  const { removeList } = useTodos();

  const handleremoveList = () => {
    removeList(id);
  };

  return (
    <View style={styles.container}>
      <Text>
        {title}
      </Text>
      <View style={styles.iconContainer}>
        <Pressable onPress={handleremoveList}>
          <Ionicons name="trash-bin" size={20} color="#fb2c36" />
        </Pressable>
        <Link href={`/list/${id}`}>
          <Ionicons name="caret-forward-outline" size={20} color="black" />
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderWidth: 1,
    borderColor: "#00a6f4",
    borderRadius: 12,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  }
});

export { ListItem };
