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

function Title() {
  return (
    <View style={styles.title}>
      <Text style={styles.appTitle}>Notes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
export default Title;
