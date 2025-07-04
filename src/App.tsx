import { useState, useEffect } from "react";
import {
  TextInput,
  View,
  Text,
  SafeAreaView,
  TouchableHighlight,
  Button,
} from "react-native";
import "./App.css";
import words from "an-array-of-english-words";

const GRAY = "#222222";
const YELLOW = "#ffff00";
const GREEN = "#00ff00";

const NUMLETTERS = 5;

// TODO: suggest a word based on the number of options it would rule out

const DEFAULT_BUTTON_COLORS = Array.from(Array(NUMLETTERS).keys()).map(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (i) => "#ffffff",
);

const DEFAULT_WORDS = words.filter((d) => d.length === 5);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DEFAULT_LETTERS = Array.from(Array(NUMLETTERS).keys()).map((i) => "");
function App() {
  const [lettersArr, setLettersArr] = useState(DEFAULT_LETTERS);
  const [buttonColors, setButtonColors] = useState(DEFAULT_BUTTON_COLORS);
  const [currentWords, setCurrentWords] = useState(DEFAULT_WORDS);

  useEffect(() => {
    console.log(currentWords);
  }, [currentWords]);

  const handleSubmit = () => {
    setCurrentWords((prevWords) => {
      return prevWords.filter((word) => isWordValid(word));
    });
  };

  const isWordValid = (word: string) => {
    for (let i = 0; i < NUMLETTERS; i += 1) {
      if (
        (buttonColors[i] === GRAY || buttonColors[i] === YELLOW) &&
        lettersArr[i] === word[i]
      ) {
        return false;
      }
      if (buttonColors[i] === GREEN && lettersArr[i] !== word[i]) {
        return false;
      }
      if (buttonColors[i] === YELLOW && !word.includes(lettersArr[i])) {
        return false;
      }
      if (buttonColors[i] === GRAY && word.includes(lettersArr[i])) {
        const hasRepeats =
          lettersArr.filter((char) => char === lettersArr[i]).length > 1;
        if (!hasRepeats) {
          return false;
        }
      }
    }
    return true;
  };

  const onChangeTextInput = (letter: string, index: number) => {
    const newLetters = [...lettersArr];
    newLetters[index] = letter;
    setLettersArr(newLetters);
  };

  const onPressButton = (index: number) => {
    const newButtonColors = [...buttonColors];
    const color = newButtonColors[index];
    let newColor;
    switch (color) {
      case GRAY:
        newColor = YELLOW;
        break;
      case YELLOW:
        newColor = GREEN;
        break;
      case GREEN:
        newColor = GRAY;
        break;
      default:
        newColor = GRAY;
    }
    newButtonColors[index] = newColor;
    setButtonColors(newButtonColors);
    console.log();
  };

  const handleReset = () => {
    setButtonColors(DEFAULT_BUTTON_COLORS);
    setButtonColors(DEFAULT_WORDS);
    setLettersArr(DEFAULT_LETTERS);
  };

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
            {Array.from(Array(NUMLETTERS).keys()).map((i) => {
              return (
                <TextInput
                  style={{
                    borderColor: "#ffffff",
                    color: "#ffffff",
                    borderWidth: 1,
                    width: 25,
                  }}
                  onChangeText={(letter) => onChangeTextInput(letter, i)}
                  value={lettersArr[i]}
                  maxLength={1}
                  key={`textField_${i}`}
                />
              );
            })}
          </View>
        </View>
        <View style={{ width: "100%" }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            {Array.from(Array(NUMLETTERS).keys()).map((i) => {
              return (
                <View
                  style={{ borderWidth: 1, borderColor: "#ffffff" }}
                  key={`buttonWrapper_${i}`}
                >
                  <Button
                    title=""
                    color={buttonColors[i]}
                    onPress={() => onPressButton(i)}
                    key={`button_${i}`}
                  />
                </View>
              );
            })}
          </View>
        </View>
        <View
          style={{
            backgroundColor: "white",
            padding: 10,
            margin: 10,
            borderRadius: 10,
          }}
        >
          <TouchableHighlight onPress={handleSubmit}>
            <Text>Submit</Text>
          </TouchableHighlight>
        </View>
        <View
          style={{
            backgroundColor: "white",
            padding: 10,
            margin: 10,
            borderRadius: 10,
          }}
        >
          <TouchableHighlight onPress={handleReset}>
            <Text>Reset</Text>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default App;
