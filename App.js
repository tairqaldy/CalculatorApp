import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleInput = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input).toString());
      } catch {
        setResult("Error");
      }
    } else if (value === "AC") {
      setInput("");
      setResult("");
    } else if (value === "DEL") {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  };

  return (
    <LinearGradient
      colors={["#1e3c72", "#2a5298"]} // Тёмно-синий к светло-синему, градиент
      style={styles.gradientBackground}
    >
      <View style={styles.container}>
        <View style={styles.display}>
          <Text style={styles.input}>{input}</Text>
          <Text style={styles.result}>{result}</Text>
        </View>
        <View style={styles.buttons}>
          {["AC", "DEL", "/", "*", 7, 8, 9, "-", 4, 5, 6, "+", 1, 2, 3, "=", 0, "."].map(
            (btn) => (
              <TouchableOpacity
                key={btn}
                style={[styles.button, btn === "=" && styles.equalsButton]}
                onPress={() => handleInput(btn)}
              >
                <Text style={styles.buttonText}>{btn}</Text>
              </TouchableOpacity>
            )
          )}
        </View>
        <Image
          source={{
            uri: "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif", // Гифка с котиком <3
          }}
          style={styles.catGif}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  display: {
    width: "90%",
    height: "20%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 10,
    marginBottom: 20,
  },
  input: {
    fontSize: 36,
    color: "#fff",
  },
  result: {
    fontSize: 24,
    color: "#aaa",
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "90%",
  },
  button: {
    width: "22%",
    height: 80,
    margin: "1%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  equalsButton: {
    backgroundColor: "orange",
  },
  buttonText: {
    fontSize: 24,
    color: "#000",
  },
  catGif: {
    width: 150,
    height: 150,
    position: "absolute",
    bottom: 20,
    right: 20,
    borderRadius: 10,
  },
});
