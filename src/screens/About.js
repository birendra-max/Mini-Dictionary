
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
export default function About() {
    return (
        <LinearGradient colors={['#1E88E5', '#6A1B9A']}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <View>
                <Text>Hello i am About Screen</Text>
            </View>
        </LinearGradient>
    );
}
