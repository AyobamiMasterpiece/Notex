// IconButton.js

import { TouchableHighlight, View, StyleSheet } from "react-native";
import { Icon } from "@rneui/themed";

const IconButton = ({
  onPress,
  underlayColor,
  iconName,
  iconType,
  iconSize,
  iconColor,
}) => {
  return (
    <TouchableHighlight
      underlayColor={underlayColor}
      onPress={onPress}
      style={styles.touchableContainer}
    >
      <View style={styles.iconContainer}>
        <Icon
          name={iconName}
          type={iconType}
          size={iconSize}
          color={iconColor}
        />
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  touchableContainer: {
    borderRadius: 50,
    height: 40,
    width: 40,
  },
  iconContainer: {
    padding: 5,
    borderRadius: 50,
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default IconButton;
