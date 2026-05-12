import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true, // Aluno geralmente deixa o header padrão aparecer
        headerTitle: "Meu App de Cartão",
      }}
    />
  );
}