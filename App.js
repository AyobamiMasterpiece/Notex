import { StatusBar } from "expo-status-bar";

import HomeScreen from "./screens/HomeScreen";

export default function App() {
  // Set dark-colored icon style

  return (
    <>
      <StatusBar showHideTransition="slide" translucent={true} style="light" />
      <HomeScreen></HomeScreen>
    </>
  );
}
