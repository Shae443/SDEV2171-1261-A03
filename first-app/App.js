import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={styles.appShell}>
        <View style={styles.header}>
          <Text style={styles.eyebrow}>The Safety App</Text>
          <Text style={styles.title}>
            A small piece of heaven to dump your thoughts and feelings.
          </Text>
        </View>
      </View>

      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.welcomeText}>Hey, you're welcome here.</Text>
          <StatusBar style="auto" />
        </View>
        <View style={styles.container}>
          <Text style={styles.startText}>Start Here</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ceeab9'
  },

  appShell: {
    flex: 1,
    paddingTop: 50,
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#dacdbd',
    backgroundColor: '#fffaf4',
  },

  eyebrow: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: '#8d5b2b',
    marginBottom: 6,
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1c1a17',
  },

  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  welcomeText: {
    fontsize: 28,
    color: '#9DC183',
  }
});
