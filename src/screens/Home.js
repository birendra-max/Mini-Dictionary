import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  const [word, setWord] = useState('');

  const handleSearch = () => {
    // later you can call API here
    console.log("Searching:", word);
  };

  return (
    <LinearGradient
      colors={['#1E88E5', '#6A1B9A']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.form}>
        <Text style={styles.title}>Welcome to Mini-Dictionary</Text>

        {/* Search Box */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={22} color="#888" style={{ marginRight: 8 }} />
          <TextInput
            placeholder="Enter English word"
            value={word}
            onChangeText={setWord}
            style={styles.input}
          />
        </View>

        {/* Search Button */}
        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "center",
  },
  form: {
    backgroundColor: "#fff",
    padding: 24,
    width: "90%",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 8,
    elevation: 6,
    alignItems: "center",
    gap: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    color: "#333",
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#f4f4f4",
    borderRadius: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
    color: "#000",
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 14,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
