import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function About() {
    return (
        <LinearGradient
            colors={["#1E88E5", "#6A1B9A"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}
        >
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Header Section */}
                <View style={styles.header}>
                    <Image
                        source={{
                            uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
                        }}
                        style={styles.avatar}
                    />
                    <Text style={styles.title}>About Us</Text>
                    <Text style={styles.subtitle}>Building Modern Apps with Love 💙</Text>
                </View>

                {/* About Content */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Who We Are</Text>
                    <Text style={styles.cardText}>
                        We are a passionate team of developers and designers dedicated to
                        creating innovative mobile and web applications. Our mission is to
                        bring your ideas to life with modern technology and user-friendly
                        experiences.
                    </Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Our Vision</Text>
                    <Text style={styles.cardText}>
                        To empower individuals and businesses by delivering high-quality
                        digital solutions that inspire creativity, efficiency, and growth.
                    </Text>
                </View>

                {/* Footer */}
                <View style={styles.footer}>
                    <Text style={styles.footerText}>© 2025 Mini-Dictionary App</Text>
                </View>
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
    header: {
        alignItems: "center",
        marginBottom: 10,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#fff",
    },
    subtitle: {
        fontSize: 16,
        color: "#e0e0e0",
        textAlign: "center",
        marginTop: 5,
    },
    card: {
        backgroundColor: "rgba(255,255,255,0.1)",
        borderRadius: 12,
        padding: 20,
        width: "100%",
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 10,
    },
    cardText: {
        fontSize: 16,
        lineHeight: 22,
        color: "#f5f5f5",
    },
    footer: {
        marginTop: 30,
        marginBottom: 10,
    },
    footerText: {
        fontSize: 14,
        color: "#ccc",
        textAlign: "center",
    },
});
