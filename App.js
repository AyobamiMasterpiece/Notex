// import { StatusBar } from "expo-status-bar";
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
  ActivityIndicator,
  Platform,
  PlatformColor,
} from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome";
import { Icon } from "@rneui/themed";
import ModalNote from "./components/ModalNote";
import Title from "./components/Title";
import Search from "./components/Search";

export default function App() {
  const [notes, setNotes] = useState([]);

  const [isModal, setIsmodal] = useState(true);

  function openModalInput() {
    setIsmodal(!isModal);
  }

  function handleSetnote(params) {
    setNotes(params);
  }

  // Set dark-colored icon style

  return (
    <>
      <SafeAreaView>
        <StatusBar
          barStyle="light-content"
          showHideTransition="slide"
          translucent={true}
        />
      </SafeAreaView>

      <View style={styles.app}>
        <ModalNote
          visible={isModal}
          handleNoteNodal={openModalInput}
          notes={notes}
          handleSetnote={handleSetnote}
        ></ModalNote>

        <Title />
        <Search />
        <ActivityIndicator size="large" color={"#ff99cc00"} />
        <ScrollView>
          <View style={styles.noteList}>
            {notes.map((note) => {
              return (
                <View style={styles.note}>
                  <View style={styles.noteData}>
                    <Text
                      style={{
                        ...styles.noteTitle,
                        display: note.title == "" ? "none" : "flex",
                        fontSize: 17,
                      }}
                    >
                      {note.title}
                    </Text>
                    <Text
                      style={{
                        display: note.note == "" ? "none" : "flex",
                        fontSize: 13,
                        color: "white",
                      }}
                    >
                      {note.note}
                    </Text>
                  </View>
                  <Text style={styles.date}>{note.getTime()}</Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
        <View style={styles.plusContainer}>
          <TouchableNativeFeedback
            onPress={() => {
              openModalInput();
            }}
            // background={TouchableNativeFeedback.Ripple("grey", true, 30)}
          >
            <View>
              <Icon
                name="plus"
                size={30}
                color="grey"
                type="antdesign"
                style={{
                  opacity: 0.7,
                }}
              />
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "black",
    position: "relative",
  },

  noteList: {
    width: "100%",
    //  backgroundColor: "yellow",

    marginTop: 10,
  },
  note: {
    backgroundColor: "grey",
    width: "95%",
    alignSelf: "center",
    padding: 15,
    borderRadius: 14,
    height: 90,
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 5,
  },
  noteData: {
    marginBottom: 5,
  },
  noteTitle: {
    fontSize: 17,
    display: "none",
    color: "white",
  },
  plusContainer: {
    position: "absolute",
    zIndex: 3,
    bottom: 80,
    right: 15,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",

    width: 50,
    height: 50,

    borderRadius: 50,
  },
  date: {
    fontSize: 12,
  },
});
