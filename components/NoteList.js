import { StyleSheet, ScrollView, View, Text, Pressable } from "react-native";
import React, { useState } from "react";

import NoteItem from "./NoteItem";

function NoteList({
  notes,
  changeisdone,
  onHandleNote,
  onChangeNoteData,
  changeNoteMode,
  changeItemId,
  setRecent,
  changeSelectedMode,
  addSelectedId,
}) {
  let propsObj = {
    notes,
    changeisdone,
    onHandleNote,
    onChangeNoteData,
    changeNoteMode,
    changeItemId,
    setRecent,
  };
  return (
    <ScrollView>
      <View style={styles.noteList}>
        {notes.map((note) => {
          return (
            <NoteItem
              propsObj={propsObj}
              note={note}
              key={note.id}
              changeSelectedMode={changeSelectedMode}
              addSelectedId={addSelectedId}
            ></NoteItem>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  noteList: {
    width: "100%",
    //backgroundColor: "yellow",

    // marginTop: 10,
  },
});
export default NoteList;
