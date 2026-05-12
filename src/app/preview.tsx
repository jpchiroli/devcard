import { router, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Preview() {
  const { nome, cargo, empresa, anos, tecnologia, cor } = useLocalSearchParams();

  const numAnos = Number(anos);
  let nivel = 'Júnior';
  let badgeColor = 'gray'; // 0-2 anos

  if (numAnos >= 3 && numAnos <= 5) {
    nivel = 'Pleno';
    badgeColor = 'blue';
  } else if (numAnos >= 6) {
    nivel = 'Sênior';
    badgeColor = 'gold';
  }

  const cardBg = cor === 'Verde' ? '#10B981' : cor === 'Roxo' ? '#8B5CF6' : '#3B82F6';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SEU CARTÃO</Text>
      
      <View style={[styles.card, { backgroundColor: cardBg }]}>
        <View style={styles.avatar}><Text style={{fontSize: 30}}>👤</Text></View>
        <Text style={styles.name}>{nome}</Text>
        <Text style={styles.sub}>{cargo}</Text>
        <Text style={styles.sub}>{empresa}</Text>
        
        <View style={styles.hr} />
        
        <Text style={{color: '#FFF'}}>Especialista em: {tecnologia}</Text>
        
        <View style={[styles.badge, { backgroundColor: badgeColor }]}>
          <Text style={styles.badgeText}>{nivel.toUpperCase()}</Text>
        </View>
        
        <Text style={{color: '#FFF', fontSize: 10}}>{anos} anos de experiência</Text>
      </View>

      <TouchableOpacity style={styles.btnEdit} onPress={() => router.back()}>
        <Text>EDITAR DADOS</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnFinish} onPress={() => router.replace('/sucesso')}>
        <Text style={{color: '#FFF', fontWeight: 'bold'}}>FINALIZAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 30, backgroundColor: '#F0F0F0', justifyContent: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  card: { padding: 20, borderSize: 2, borderColor: '#000', alignItems: 'center', borderRadius: 10 },
  avatar: { width: 60, height: 60, backgroundColor: '#FFF', borderRadius: 30, justifyContent: 'center', alignItems: 'center', marginBottom: 10 },
  name: { color: '#FFF', fontSize: 20, fontWeight: 'bold' },
  sub: { color: '#EEE' },
  hr: { width: '100%', height: 1, backgroundColor: '#FFF', marginVertical: 15 },
  badge: { padding: 5, marginTop: 10, width: 100, alignItems: 'center', borderWidth: 1, borderColor: '#FFF' },
  badgeText: { color: '#FFF', fontWeight: 'bold', fontSize: 12 },
  btnEdit: { borderSize: 1, borderWidth: 1, padding: 15, alignItems: 'center', marginTop: 20 },
  btnFinish: { backgroundColor: '#6366F1', padding: 15, alignItems: 'center', marginTop: 10 }
});