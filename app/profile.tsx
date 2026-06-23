import {
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>

      <Image
        source={{
          uri: "https://i.pravatar.cc/150",
        }}
        style={styles.avatar}
      />

      <Text style={styles.name}>
        Anish
      </Text>

      <Text style={styles.email}>
        anish@example.com
      </Text>

      <View style={styles.infoBox}>
        <Text style={styles.info}>
          Total Runs: 25
        </Text>

        <Text style={styles.info}>
          Distance: 120 km
        </Text>

        <Text style={styles.info}>
          Calories Burned: 8500
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7FC",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 15,
  },

  email: {
    color: "#666",
    marginBottom: 30,
  },

  infoBox: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
  },

  info: {
    fontSize: 18,
    marginBottom: 10,
  },
});