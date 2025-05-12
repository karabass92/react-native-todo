import { View, Text, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from "expo-router";

const Navigation = () => {
  return (
    <View style={styles.container}>
      <Link href={"/"}>
        <View style={styles.link}>
          <View>
            <Ionicons name="caret-back-outline" size={24} color="white" />
          </View>
          <Text style={styles.text}>
            Назад
          </Text>
        </View>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00bcff",
    padding: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  link: {
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  text: {
    alignContent: "center",
    fontSize: 20,
    fontWeight: 500,
    color: "white"
  }
});

export { Navigation };
