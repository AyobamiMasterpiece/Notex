import { StyleSheet, ScrollView, View, Text, Pressable } from "react-native";

function NoteList({ notes, onHandleNote }) {
  return (
    <ScrollView>
      <View style={styles.noteList}>
        {notes.map((note) => {
          return (
            <View style={styles.note}>
              <Pressable
                android_ripple={{ color: "white", borderless: true }}
                style={{
                  overflow: "hidden",
                  padding: 15,
                  flex: 1,
                  justifyContent: "center",
                  // backgroundColor: "red",
                }}
                onPress={onHandleNote}
              >
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
              </Pressable>
            </View>
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

    marginTop: 10,
  },
  note: {
    backgroundColor: "grey",
    width: "95%",
    alignSelf: "center",

    borderRadius: 14,
    height: 90,
    // justifyContent: "center",
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
export default NoteList;
