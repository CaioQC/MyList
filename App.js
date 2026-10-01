import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [task, setTask] = useState('');
  const createdCount = 5;
  const completedCount = 2;

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.headerWrap}>
        <Text style={styles.logo}>
          <Text style={styles.logoIcon}>☑</Text>
          {' MyList'}
        </Text>
      </View>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          value={task}
          onChangeText={setTask}
          placeholder="Adicione algo a sua lista"
          placeholderTextColor="#888"
        />

        <TouchableOpacity style={styles.addButton} activeOpacity={0.8}>
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabsRow}>
        <View style={styles.tab}>
          <Text style={styles.tabLabel}>Criadas</Text>
          <Text style={styles.tabCount}>{createdCount}</Text>
        </View>

        <View style={styles.tab}>
          <Text style={styles.tabLabel}>Concluídas</Text>
          <Text style={styles.tabCount}>{completedCount}</Text>
        </View>
      </View>

      <View style={styles.separator} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0c0d',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  headerWrap: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    fontSize: 32,
    fontWeight: '800',
    color: '#00bcd4',
    letterSpacing: -0.5,
  },
  logoIcon: {
    fontSize: 32,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    gap: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#1a1d1f',
    borderRadius: 8,
    color: '#fff',
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: '#2a2d2f',
  },
  addButton: {
    width: 56,
    height: 56,
    borderRadius: 8,
    backgroundColor: '#00a8d4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '300',
  },
  tabsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex: 1,
  },
  tabLabel: {
    fontSize: 18,
    fontWeight: '700',
    color: '#00bcd4',
  },
  tabCount: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
    backgroundColor: '#2a2d2f',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    minWidth: 32,
    textAlign: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: '#2a2d2f',
  },
});
