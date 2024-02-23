import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableNativeFeedback,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Icon } from "@rneui/themed";

function Search() {
  const [search, setSearch] = useState("");

  function handleSearchChange(text) {
    setSearch(text);
    console.log(text);
  }
  return (
    <View style={styles.searchContainer}>
      <Icon name="search" size={25} color="white" type="material" />
      <TextInput
        style={styles.searchInput}
        placeholder="Search notes"
        onChangeText={handleSearchChange}
        value={search}
      ></TextInput>
    </View>
  );
}
const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: "grey",
    flexDirection: "row",
    marginBottom: 15,
    width: "90%",
    alignSelf: "center",
    padding: 8,
    alignItems: "center",
    borderRadius: 20,
  },
  searchInput: {
    color: "white",
    fontSize: 15,
    width: "80%",
    marginLeft: 10,
  },
});
export default Search;
