import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView,Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
    const navigation=useNavigation();

    const [word, setWord] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [odiaMeaning, setOdiaMeaning] = useState('');

    const handleSearch = async () => {
        if (!word.trim()) {
            setOdiaMeaning("Please enter a word");
            setShowResult(true);
            return;
        }

        try {
            const res = await axios.post(
                "https://fr.libretranslate.com/translate",
                {
                    q: word,
                    source: "en",
                    target: "or", // Odia
                    format: "text",
                },
                {
                    headers: { "Content-Type": "application/json" },
                }
            );

            console.log("API Response:", res.data);
            setOdiaMeaning(res.data.translatedText || "No translation found");
            setShowResult(true);

        } catch (err) {
            if (err.response) {
                console.error("Error Response:", err.response.data);
            } else {
                console.error("Error Message:", err.message);
            }
            setOdiaMeaning("Error fetching translation");
        }
    };



    return (
        <LinearGradient
            colors={['#1E88E5', '#6A1B9A']}
            style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <ScrollView style={{width:"100%"}}  contentContainerStyle={{ alignItems: "center", justifyContent: "center",gap:20, marginTop:20, paddingBottom:40 }} >
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

                <View style={styles.resultview}>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>Entered Texts : {word}</Text>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>Total Cheracter : {word.length} </Text>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }} > Total words : {(word.split(' ').length == '') ? 0 : word.split(' ').length} </Text>
                </View>

                <View style={styles.resultview}>
                    <Image source={{ uri: "https://cloudinary-marketing-res.cloudinary.com/image/upload/w_1300/q_auto/f_auto/hiking_dog_mountain" }} style={{ width: "100%", height: 200 }} />

                    <Button title="Go to about" onPress={()=>navigation.navigate('About')} />
                </View>

                <View style={styles.resultview}>
                    <Image source={{ uri: "https://cloudinary-marketing-res.cloudinary.com/image/upload/w_1300/q_auto/f_auto/hiking_dog_mountain" }} style={{ width: "100%", height: 200 }} />

                    <Button title="Go to about" onPress={()=>navigation.navigate('About')} />
                </View>

                <View style={styles.resultview}>
                    <Image source={{ uri: "https://cloudinary-marketing-res.cloudinary.com/image/upload/w_1300/q_auto/f_auto/hiking_dog_mountain" }} style={{ width: "100%", height: 200 }} />

                    <Button title="Go to about" onPress={()=>navigation.navigate('About')} />
                </View>

                <View style={styles.resultview}>
                    <Image source={{ uri: "https://cloudinary-marketing-res.cloudinary.com/image/upload/w_1300/q_auto/f_auto/hiking_dog_mountain" }} style={{ width: "100%", height: 200 }} />

                    <Button title="Go to about" onPress={()=>navigation.navigate('About')} />
                </View>
            </ScrollView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
    },
    form: {
        backgroundColor: "#fff",
        padding: 24,
        width: "95%",
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

    resultview: {
        width: "95%",
        alignItems: "left",
        backgroundColor: "#f4f4f4",
        padding: 8,
        gap: 20,
        borderRadius: 8,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: "#ddd",
    }
});
