import { View, Text, ScrollView, StyleSheet, Linking, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function Contact() {
    const openLink = (url) => {
        Linking.openURL(url);
    };

    return (
        <LinearGradient
            colors={["#1E88E5", "#6A1B9A"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}
        >
            <ScrollView
                style={{ width: "100%" }}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Header */}
                <Text style={styles.title}>Contact Us</Text>
                <Text style={styles.subtitle}>We’d love to hear from you 💬</Text>

                {/* Contact Info */}
                <View style={styles.card}>
                    <Ionicons name="call" size={28} color="#fff" />
                    <Text style={styles.cardText}>+91 96929 26869</Text>
                </View>

                <View style={styles.card}>
                    <Ionicons name="mail" size={28} color="#fff" />
                    <Text style={styles.cardText}>birendrapradhan112@gmail.com</Text>
                </View>

                <View style={styles.card}>
                    <Ionicons name="location" size={28} color="#fff" />
                    <Text style={styles.cardText}>Bangalore, India</Text>
                </View>

                {/* Buttons */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => openLink("mailto:birendrapradhan112@gmail.com")}
                >
                    <Text style={styles.buttonText}>Send Email</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, { backgroundColor: "#43A047" }]}
                    onPress={() => openLink("tel:+919692926869")}
                >
                    <Text style={styles.buttonText}>Call Now</Text>
                </TouchableOpacity>
            </ScrollView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        alignItems: "center",
        padding: 20,
        gap: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 16,
        color: "#e0e0e0",
        textAlign: "center",
        marginBottom: 20,
    },
    card: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        backgroundColor: "rgba(255,255,255,0.1)",
        borderRadius: 12,
        padding: 15,
        width: "100%",
    },
    cardText: {
        fontSize: 16,
        color: "#fff",
    },
    button: {
        backgroundColor: "#FF7043",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 10,
        width: "100%",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
    },
});
