import { CheckBox } from "@rneui/base";
import React, { useEffect, useRef, useState } from "react";
import { View, Pressable } from "react-native";
import Checkbox from "../UI/CheckBox";
export default function SelectNote({
  children,
  idOfSelectedItems,
  removeSelectedId,
  addSelectedId,
  id,
  parentChecked,
  parentChangeChecked,
  ignore,
  changeIgnore,
  notes,
  changeSelectedMode,
  selectedMode,
}) {
  const [checked, setChecked] = useState(false);

  ///////// I have to add useffect in parent component so that each time it rerenders i will check if notes.length !== to selected ids.length if true thne setschecked to false
  useEffect(() => {
    if (parentChecked == checked || ignore) {
      //// this makes sure guys that are cheked are not added again when all items are checked
      // console.log("oversabi");

      return;
    }
    // console.log("escape");
    setChecked(parentChecked);
    if (parentChecked) {
      addSelectedId(id);
    } else {
      removeSelectedId(id);
    }
    return () => {};
  }, [parentChecked]);

  useEffect(() => {
    if (id == idOfSelectedItems[0]) {
      console.log(id, idOfSelectedItems[0], "crazy");
      setChecked((e) => !e);
      console.log("GOD ABEG");
    }
    console.log(id, idOfSelectedItems);
  }, []);

  const updateSelectedIds = (checked, add, remove, id) => {
    if (checked == true) {
      remove(id);
    } else {
      add(id);
    }
  };

  return (
    <Pressable
      style={
        {
          // backgroundColor: "red",
        }
      }
      onPress={() => setChecked((value) => !value)}
      //   {
      //     /////////have not perfected this onpress
      //   }
    >
      <View
        style={{
          position: "absolute",
          top: "30%",
          right: 30,
          zIndex: 3,

          alignItems: "flex-start",
        }}
      >
        <Checkbox
          style={{
            borderColor: "white",
          }}
          onChange={() => {
            updateSelectedIds(
              checked,
              addSelectedId,
              removeSelectedId,

              id
            );
            setChecked((value) => !value);
          }}
          checked={checked}
        ></Checkbox>
      </View>

      {children}
    </Pressable>
  );
}
