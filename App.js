import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.blueText}>Hello GF Polly! 😘</Text>
      <Text>Kiss Kiss</Text>
      <Text>More power!</Text>
      <Text>Not yet</Text>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blueText: {
    color: 'blue',
    fontSize: 32,
    fontWeight: 'bold',
  },
})
