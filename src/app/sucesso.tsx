import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Sucesso() {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>✅</Text>
      <Text style={styles.title}>CARTÃO CRIADO!</Text>
      <Text style={{textAlign: 'center'}}>Tudo pronto. Compartilhe agora.</Text>
      
      <TouchableOpacity style={styles.btn} onPress={() => router.replace('/')}>
        <Text style={{color: '#FFF'}}>NOVO CARTÃO</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => router.replace('/')}>
        <Text style={{marginTop: 20, color: 'blue', textDecorationLine: 'underline'}}>Voltar ao início</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  icon: { fontSize: 80 },
  title: { fontSize: 24, fontWeight: 'bold', marginVertical: 10 },
  btn: { backgroundColor: '#6366F1', padding: 20, width: '100%', alignItems: 'center', marginTop: 30 }
});