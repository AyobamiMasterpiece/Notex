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
import NoteList from "./components/NoteList";
import { Note } from "./components/dateFunctions";
export default function App() {
  const [notes, setNotes] = useState([]);
  const [noteData, setNoteData] = useState(new Note());

  const [isModal, setIsmodal] = useState(false);
  const [noteMode, setNoteMode] = useState("new");
  const [isdone, setIsDone] = useState(false);
  const [itemId, setItemId] = useState(null);

  const setRecent = (id) => {
    setNotes((old) => {
      let remain = old.filter((item) => item.id !== id);
      let note = old.find((item) => item.id == id);
      let newnote = [note, ...remain];

      return newnote;
    });
  };
  const handledeleteitem = (id) => {
    setNotes((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  const changeItemId = (id) => {
    setItemId(id);
  };
  const changeisdone = (p) => {
    setIsDone(p);
  };
  const onHandleNote = () => {
    setIsmodal(true);
  };
  function openModalInput() {
    setIsmodal(!isModal);
  }

  function handleSetnote(params) {
    setNotes(params);
  }
  function ChangeNoteData(item) {
    setNoteData(item);
  }
  const changeNoteMode = (p) => {
    setNoteMode(p);
  };
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
          noteData={noteData}
          handleSetnote={handleSetnote}
          ChangeNoteData={ChangeNoteData}
          key={isModal ? "modalVisible" : "modalHidden"}
          isdone={isdone}
          changeisdone={changeisdone}
          noteMode={noteMode}
          changeNoteMode={changeNoteMode}
          itemId={itemId}
          changeItemId={changeItemId}
          handledeleteitem={handledeleteitem}
        ></ModalNote>

        <Title />
        <Search />
        <ActivityIndicator size="large" color={"#ff99cc00"} />
        <NoteList
          notes={notes}
          onHandleNote={onHandleNote}
          onChangeNoteData={ChangeNoteData}
          changeNoteMode={changeNoteMode}
          changeItemId={changeItemId}
          itemId={itemId}
          setRecent={setRecent}
        />

        <View style={styles.plusContainer}>
          <TouchableNativeFeedback
            onPress={() => {
              setNoteData(new Note());
              openModalInput();
            }}
            background={TouchableNativeFeedback.Ripple("grey", true, 30)}
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
});
