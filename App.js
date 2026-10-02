import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [task, setTask] = useState('');
  const createdCount = 0;
  const completedCount = 0;

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.phoneFrame}>
        <View style={styles.logoRow}>
          <Image
            source={require('./assets/Playlist add check.png')}
            style={styles.logoIcon}
          />
          <Text style={styles.logoText}>
            <Text style={styles.logoMy}>My</Text>
            <Text style={styles.logoList}>List</Text>
          </Text>
        </View>

        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            value={task}
            onChangeText={setTask}
            placeholder="Adicione algo a sua lista"
            placeholderTextColor="#7a7d80"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <TouchableOpacity style={styles.addButton} activeOpacity={0.8}>
            <Image source={require('./assets/plus.png')} style={styles.plusIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.tabsRow}>
          <View style={styles.tab}>
            <Text style={[styles.tabLabel, styles.logoMy]}>Criadas</Text>
            <Text style={styles.tabCount}>{createdCount}</Text>
          </View>

          <View style={styles.tab}>
            <Text style={[styles.tabLabel, styles.logoList]}>Concluídas</Text>
            <Text style={styles.tabCount}>{completedCount}</Text>
          </View>
        </View>

        <View style={styles.separator} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f1114',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  phoneFrame: {
    width: 375,
    height: 812,
    backgroundColor: '#1a1f24',
    borderRadius: 40,
    paddingHorizontal: 20,
    paddingTop: 14,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 10 },
    elevation: 12,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 28,
    marginBottom: 26,
    gap: 4,
  },
  logoIcon: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
  logoText: {
    fontSize: 38,
    fontWeight: '800',
    letterSpacing: -1,
  },
  logoMy: {
    color: '#00CBCE',
  },
  logoList: {
    color: '#109AE5',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 24,
    gap: 12,
  },
  input: {
    flex: 1,
    height: 68,
    backgroundColor: '#2b3037',
    borderRadius: 10,
    color: '#fff',
    fontSize: 22,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 0,
  },
  addButton: {
    width: 72,
    height: 68,
    borderRadius: 10,
    backgroundColor: '#0aa8e8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  tabsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
    paddingHorizontal: 4,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    gap: 8,
  },
  tabLabel: {
    fontSize: 22,
    fontWeight: '700',
  },
  tabCount: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    backgroundColor: '#2b3037',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    minWidth: 32,
    textAlign: 'center',
    overflow: 'hidden',
  },
  separator: {
    marginTop: 12,
    width: '100%',
    height: 1,
    backgroundColor: '#3d4349',
  },
});
