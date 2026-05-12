import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [anos, setAnos] = useState('');
  const [tecnologia, setTecnologia] = useState('');
  const [cor, setCor] = useState('Azul');

  const validarENavegar = () => {
    if (!nome || !cargo || !anos || !tecnologia) {
      alert("ERRO: Preencha todos os campos obrigatórios!");
      return;
    }

    router.push({
      pathname: '/preview',
      params: { nome, cargo, empresa, anos, tecnologia, cor },
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>CADASTRO DE DEV</Text>
      
      <Text style={styles.label}>NOME COMPLETO:</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} placeholder="Nome aqui..." />

      <Text style={styles.label}>CARGO:</Text>
      <TextInput style={styles.input} value={cargo} onChangeText={setCargo} placeholder="Ex: Analista" />

      <Text style={styles.label}>EMPRESA:</Text>
      <TextInput style={styles.input} value={empresa} onChangeText={setEmpresa} />

      <Text style={styles.label}>ANOS DE EXPERIÊNCIA:</Text>
      <TextInput style={styles.input} value={anos} onChangeText={setAnos} keyboardType="numeric" />

      <Text style={styles.label}>TECNOLOGIA:</Text>
      <TextInput style={styles.input} value={tecnologia} onChangeText={setTecnologia} />

      <Text style={styles.label}>COR DO CARTÃO:</Text>
      <View style={styles.colorRow}>
        {['Azul', 'Verde', 'Roxo'].map((c) => (
          <TouchableOpacity 
            key={c} 
            style={[styles.colorBtn, cor === c && { borderWidth: 3, borderColor: '#000' }]} 
            onPress={() => setCor(c)}
          >
            <Text>{c}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.mainBtn} onPress={validarENavegar}>
        <Text style={styles.mainBtnText}>GERAR CARTÃO</Text>
      </TouchableOpacity>
      <Text style={styles.footer}>...</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#FFF' },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  label: { fontWeight: 'bold', marginTop: 10 },
  input: { borderWidth: 1, borderColor: '#000', padding: 10, marginTop: 5 },
  colorRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  colorBtn: { flex: 1, padding: 10, alignItems: 'center', backgroundColor: '#DDD', margin: 2, borderSize: 1, borderColor: '#CCC' },
  mainBtn: { backgroundColor: '#6366F1', padding: 20, marginTop: 30, alignItems: 'center' },
  mainBtnText: { color: '#FFF', fontWeight: 'bold' },
  footer: { textAlign: 'center', marginTop: 20, fontSize: 10, color: '#666' }
});