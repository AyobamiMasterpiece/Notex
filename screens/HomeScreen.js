import React, { useEffect } from "react";
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
import ModalNote from "../components/ModalNote";
import Title from "../components/Title";
import Search from "../components/Search";
import NoteList from "../components/NoteList";
import { Note } from "../components/dateFunctions";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SelectedView from "../components/SelectedView";

const saveData = async (notes) => {
  try {
    // Convert the array to a JSON string before storing it
    const jsonValue = JSON.stringify(notes);
    // console.log(jsonValue, "nnaa");
    await AsyncStorage.setItem("myNotes", jsonValue);
    // console.log("Data saved successfully");
  } catch (error) {
    console.error("Error saving data:", error);
  }
}; // Inside your component

const loadData = async (update, loading) => {
  try {
    // Retrieve the JSON string from AsyncStorage and convert it back to an array
    const jsonValue = await AsyncStorage.getItem("myNotes");
    // console.log(jsonValue, "jsonload");
    if (jsonValue !== null) {
      const loadedArray = JSON.parse(jsonValue);

      update(loadedArray);
      loading(false);
    }
  } catch (error) {
    console.error("Error loading data:", error);
  }
};

export default function HomeScreen() {
  const [notes, setNotes] = useState([]);
  const [noteData, setNoteData] = useState(new Note());
  const [loading, setLoading] = useState(true);
  const [isModal, setIsmodal] = useState(false);
  const [noteMode, setNoteMode] = useState("new");
  const [isdone, setIsDone] = useState(false);
  const [itemId, setItemId] = useState(null);
  const [selectedMode, setSelectedMode] = useState(false); /// state for when an item is long pressed and view changes
  const [idOfSelectedItems, setIdOfSelectedItems] = useState([]);

  useEffect(() => {
    loadData(setNotes, setLoading);
    // console.log(notes, "async");
    // console.log(notes, "p");
    // setNotes(notes);
  }, []);
  useEffect(() => {
    saveData(notes);
  }, [notes]);

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
  const changeSelectedMode = () => {
    setSelectedMode((value) => !value);
  };
  const addSelectedId = (id) => {
    setIdOfSelectedItems((former) => {
      return [id, ...former];
    });
    // setIdOfSelectedItems([id, ...arr]);
  };
  const removeSelectedId = (id) => {
    setIdOfSelectedItems((ids) => {
      return ids.filter((item) => item !== id);
    });
  };
  const emptySelectedIds = () => {
    setIdOfSelectedItems([]);
  };

  const deleteMultipleNotes = (arr) => {
    let final = [];
    setNotes((prev) => {
      prev.map((item) => {
        let bool = arr.includes(item.id);
        if (!bool) {
          final.push(item);
        }
      });
      return final;
    });
  };

  let content = (
    <>
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

      {notes.length > 0 ? (
        <>
          <NoteList
            notes={notes}
            onHandleNote={onHandleNote}
            onChangeNoteData={ChangeNoteData}
            changeNoteMode={changeNoteMode}
            changeItemId={changeItemId}
            itemId={itemId}
            setRecent={setRecent}
            changeisdone={changeisdone}
            changeSelectedMode={changeSelectedMode}
            addSelectedId={addSelectedId}
          />
        </>
      ) : (
        <View
          style={{
            // top: 120,
            // left: 100,

            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          {loading && <ActivityIndicator size={80}></ActivityIndicator>}
          {!loading && (
            <>
              <Ionicons name="document-outline" size={200} color="white" />
              <Text style={{ color: "white", fontSize: 20 }}>
                No Notes Yet!
              </Text>
            </>
          )}
        </View>
      )}

      <View style={styles.plusContainer}>
        <TouchableNativeFeedback
          onPress={() => {
            setNoteData(new Note());
            openModalInput();
            setNoteMode("new");
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
    </>
  );
  if (selectedMode) {
    content = (
      <SelectedView
        changeSelectedMode={changeSelectedMode}
        selectedMode={selectedMode}
        notes={notes}
        onHandleNote={onHandleNote}
        onChangeNoteData={ChangeNoteData}
        changeNoteMode={changeNoteMode}
        changeItemId={changeItemId}
        itemId={itemId}
        setRecent={setRecent}
        changeisdone={changeisdone}
        idOfSelectedItems={idOfSelectedItems}
        removeSelectedId={removeSelectedId}
        addSelectedId={addSelectedId}
        emptySelectedIds={emptySelectedIds}
        deleteMultipleNotes={deleteMultipleNotes}
      ></SelectedView>
    );
  }
  // console.log(idOfSelectedItems);
  return <View style={styles.app}>{content}</View>;
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
