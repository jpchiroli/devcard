import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BEM-VINDO AO DEVCARD</Text>
      
      <View style={styles.box}>
        <Text style={styles.emoji}>💳</Text>
        <Text style={styles.description}>
          Seu cartão de visita digital de dev mobile.
        </Text>
      </View>
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => router.push('/cadastro')}
      >
        <Text style={styles.buttonText}>CRIAR MEU CARTÃO</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#EEE', alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', color: 'blue', marginBottom: 20 },
  box: { padding: 20, backgroundColor: 'white', borderWidth: 2, borderColor: '#000', marginBottom: 30 },
  emoji: { fontSize: 50, textAlign: 'center' },
  description: { textAlign: 'center', marginTop: 10 },
  button: { backgroundColor: 'green', padding: 15, width: '100%' },
  buttonText: { color: 'white', textAlign: 'center', fontWeight: 'bold' },
});