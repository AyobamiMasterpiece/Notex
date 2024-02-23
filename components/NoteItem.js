import React from "react";
import { getTimeOfCreation } from "./dateFunctions";
import { StyleSheet, ScrollView, View, Text, Pressable } from "react-native";
export default function NoteItem({
  propsObj: {
    notes,
    changeisdone,
    onHandleNote,
    onChangeNoteData,
    changeNoteMode,
    changeItemId,
    setRecent,
    selectedMode,
  },
  note,
  addSelectedId,
  changeSelectedMode,
}) {
  //   console.log(propsObj, "objlog");
  //   console.log("love her bec");

  return (
    <View style={styles.note}>
      <Pressable
        android_ripple={
          selectedMode ? null : { color: "white", borderless: true }
        }
        style={{
          overflow: "hidden",
          padding: 15,
          flex: 1,
          justifyContent: "center",
          // backgroundColor: "red",
        }}
        onPress={
          selectedMode
            ? null
            : () => {
                onChangeNoteData(note);
                changeNoteMode("edit");
                changeItemId(note.id);
                onHandleNote(note);
                setRecent(note.id);
                changeisdone(true);
              }
        }
        onLongPress={
          selectedMode
            ? null
            : () => {
                addSelectedId(note.id);
                changeSelectedMode();
              }
        }
        delayLongPress={200}
      >
        <View style={styles.noteData}>
          <Text
            style={{
              ...styles.noteTitle,
              display: note.title == "" ? "none" : "flex",
              fontSize: 17,
              // fontSize: viewWidth / 10,
            }}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {note.title}
          </Text>
          <Text
            style={{
              display: note.note == "" ? "none" : "flex",
              fontSize: 13,
              color: "white",
            }}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {note.note}
          </Text>
        </View>
        <Text style={styles.date}>
          {getTimeOfCreation(new Date(note.time))}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  note: {
    backgroundColor: "grey",
    width: "95%",
    alignSelf: "center",

    borderRadius: 14,
    height: 80,
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
  date: {
    fontSize: 12,
  },
});
