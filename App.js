import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableNativeFeedback,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function App() {
  const [search, setSearch] = useState("");
  const [isNote, setIsNote] = useState(false);
  function handleSearchChange(text) {
    setSearch(text);
    console.log(text);
  }
  function handleNoteNodal() {
    setIsNote(!isNote);
    console.log("ll");
  }

  // Set dark-colored icon style

  return !isNote ? (
    <View style={styles.app}>
      <View style={styles.title}>
        <Text style={styles.appTitle}>Notes</Text>
      </View>

      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="white" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search notes"
          onChangeText={handleSearchChange}
          value={search}
        ></TextInput>
      </View>

      <TouchableNativeFeedback
        onPress={() => {
          handleNoteNodal();
        }}
        background={TouchableNativeFeedback.Ripple("grey", true, 30)}
      >
        <View style={styles.plus}>
          <View>
            <Icon name="plus" size={30} color="white" />
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  ) : (
    <View style={styles.modalnote}></View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "black",
  },
  appTitle: {
    color: "white",
    marginTop: 40,
    fontSize: 30,
    marginBottom: 15,
  },
  title: {
    width: "90%",
    marginTop: 30,

    alignSelf: "center",
  },
  searchContainer: {
    backgroundColor: "grey",
    flexDirection: "row",

    width: "90%",
    alignSelf: "center",
    padding: 5,
    alignItems: "center",
    borderRadius: 20,
  },
  searchInput: {
    color: "white",
    fontSize: 12,
    width: "80%",
    marginLeft: 10,
  },
  plus: {
    backgroundColor: "grey",
    alignSelf: "center",
    padding: 10,
    width: 50,
    height: 50,
    alignItems: "center",
    position: "absolute",
    bottom: 80,
    right: 15,
    borderRadius: 50,
  },
  modalnote: {
    flex: 1,
    backgroundColor: "red",
  },
});
