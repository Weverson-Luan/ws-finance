/**
 * IMPORTS
 */

import { StatusBar } from "react-native";



import { Onboarding } from "./src/screens/onboarding";

export default function App() {
  return (
    <>
    <StatusBar translucent barStyle={'light-content'}/>
    <Onboarding />
    </>
  )
}
