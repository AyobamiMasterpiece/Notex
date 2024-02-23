import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Pressable,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Checkbox from "../UI/CheckBox";
import { useState } from "react";
import SelectedText from "./SelectedText";
import SelectNote from "./SelectNote";
import NoteItem from "./NoteItem";
import DeleteModal from "./DeleteModal";
import DeleteScreen from "./DeleteScreen";
export default function SelectedView({
  notes,
  changeisdone,
  onHandleNote,
  onChangeNoteData,
  changeNoteMode,
  changeItemId,
  setRecent,
  changeSelectedMode,
  selectedMode,
  idOfSelectedItems,
  removeSelectedId,
  addSelectedId,
  emptySelectedIds,
  deleteMultipleNotes,
}) {
  const [checked, setChecked] = useState(false);
  const [showDeleteScreen, setShowDeleteScreen] = useState(false);
  console.log(idOfSelectedItems, "allofus");
  useEffect(() => {
    if (notes.length !== idOfSelectedItems.length) {
      // console.log("pop");
      onchangeCheked(false);
    } else {
      onchangeCheked(true);
    }
    changeIgnore(true);
  }, [idOfSelectedItems]);

  useEffect(() => {
    return () => {
      emptySelectedIds();
      console.log("start again");
    };
  }, []);

  const [ignore, setIgnore] = useState(true); /// state value for ignoring if changing the parent checked state wont affect all of child checked state
  let changeIgnore = (e) => {
    setIgnore(e);
  };
  let onchangeCheked = (value) => {
    if (value !== undefined) {
      setChecked(value);
      return;
    }

    setChecked((e) => !e);
  };

  const propsObj = {
    notes,
    changeisdone,
    onHandleNote,
    onChangeNoteData,
    changeNoteMode,
    changeItemId,
    setRecent,
    changeSelectedMode,
    selectedMode,
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.root, { opacity: showDeleteScreen ? 0.4 : 1 }]}>
        <View style={styles.topBar}>
          <View style={styles.positionRow}>
            <Feather
              name="x"
              size={34}
              color="blue"
              onPress={() => {
                changeSelectedMode();
              }}
            />
            <SelectedText arr={idOfSelectedItems}></SelectedText>
          </View>
          <Checkbox
            checked={checked}
            onChange={() => {
              onchangeCheked();
              changeIgnore(false);
            }}
          ></Checkbox>
        </View>
        <View
          style={{
            flex: 1,
            // backgroundColor: "blue",
            marginTop: 10,
          }}
        >
          <FlatList
            data={notes}
            keyExtractor={(note) => note.id}
            renderItem={({ item }) => {
              return (
                <SelectNote
                  idOfSelectedItems={idOfSelectedItems}
                  removeSelectedId={removeSelectedId}
                  addSelectedId={addSelectedId}
                  id={item.id}
                  parentChecked={checked} ///
                  parentChangeChecked={onchangeCheked}
                  notes={notes}
                  ignore={ignore}
                  changeIgnore={changeIgnore}
                  changeSelectedMode={changeSelectedMode}
                  selectedMode={selectedMode}
                >
                  <NoteItem note={item} propsObj={propsObj}></NoteItem>
                </SelectNote>
              );
            }}
          ></FlatList>
        </View>
      </View>
      <View
        style={[styles.deleteView, { opacity: showDeleteScreen ? 0.3 : 1 }]}
      >
        <View
          style={{
            alignItems: "center",

            flex: 1,
          }}
        >
          <Pressable
            onPress={() => {
              setShowDeleteScreen(true);

              {
                ///delete items,leave selected view, use a toast to show items deleted ot an undo toast kind of
              }
            }}
            disabled={idOfSelectedItems.length == 0}
            hitSlop={40}
          >
            <Ionicons name="trash" color={"white"} size={25}></Ionicons>
          </Pressable>

          <Text
            style={{
              fontSize: 12,
              color: idOfSelectedItems.length > 0 ? "white" : "black",
            }}
          >
            Delete
          </Text>
        </View>
      </View>
      {showDeleteScreen && (
        <DeleteScreen
          onpress={() => setShowDeleteScreen(null)}
          ondelete={() => {
            deleteMultipleNotes(idOfSelectedItems);
            setShowDeleteScreen(false);
            changeSelectedMode();
          }}
        ></DeleteScreen>
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "black",
    position: "relative",
    padding: 10,
  },
  topBar: {
    marginTop: 20,
    // backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
  },
  positionRow: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "blue",

    flex: 2,
  },
  deleteView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    height: "9%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "grey",
    zIndex: 5,
  },
});
