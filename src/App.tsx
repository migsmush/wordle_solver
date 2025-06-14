import { useState } from "react";
import {
  TextInput,
  View,
  Text,
  SafeAreaView,
  TouchableHighlight,
} from "react-native";
import "./App.css";

function App() {
  const [letterOne, setLetterOne] = useState("");
  const [letterTwo, setLetterTwo] = useState("");
  const [letterThree, setLetterThree] = useState("");
  const [letterFour, setLetterFour] = useState("");
  const [letterFive, setLetterFive] = useState("");

  return (
    <SafeAreaView
      style={{ flex: 1, height: "100%", backgroundColor: "#000000" }}
    >
      <View
        style={{
          backgroundColor: "#000000",
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          alignItems: "center",
        }}
      >
        <View style={{ width: "100%" }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <TouchableHighlight onPress={() => {}} />
            <TextInput
              style={{
                borderColor: "#ffffff",
                color: "#ffffff",
                borderWidth: 1,
                width: 25,
                backgroundColor: "#ffffff",
              }}
              onChangeText={setLetterOne}
              value={letterOne}
              maxLength={1}
            />
            <TextInput
              style={{
                borderColor: "#ffffff",
                color: "#ffffff",
                borderWidth: 1,
                width: 25,
              }}
              onChangeText={setLetterTwo}
              value={letterTwo}
              maxLength={1}
            />
            <TextInput
              style={{
                borderColor: "#ffffff",
                color: "#ffffff",
                borderWidth: 1,
                width: 25,
              }}
              onChangeText={setLetterThree}
              value={letterThree}
              maxLength={1}
            />
            <TextInput
              style={{
                borderColor: "#ffffff",
                color: "#ffffff",
                borderWidth: 1,
                width: 25,
              }}
              onChangeText={setLetterFour}
              value={letterFour}
              maxLength={1}
            />
            <TextInput
              style={{
                borderColor: "#ffffff",
                color: "#ffffff",
                borderWidth: 1,
                width: 25,
              }}
              onChangeText={setLetterFive}
              value={letterFive}
              maxLength={1}
            />
          </View>
        </View>
        <Text style={{ color: "#ffffff" }}>Hello World!</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
