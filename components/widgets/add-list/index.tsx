import { useState } from "react";
import { View, Pressable, TextInput, StyleSheet, Text } from "react-native";
import { useTodos } from "@/store";

const AddList = () => {
  const { addList } = useTodos();
  const [text, setText] = useState<string>('');

  const handleCreateNewList = () => {
    if (text) {
      addList(text);
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Введите наименование списка"
      />
      <Pressable 
        style={styles.button}
        onPress={handleCreateNewList}
      >
        <Text style={styles.text}>
          Новый список
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 6,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#00a6f4",
    padding: 10,
    borderRadius: 12,
  },
  button: {
    height: 40,
    width: "auto",
    borderRadius: 12,
    backgroundColor: "#00a6f4",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: 600,
  }
});

export { AddList };
