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
        <View style={styles.topBar}>
          <Text style={styles.time}>9:41</Text>

          <View style={styles.statusIcons}>
            <Text style={styles.signal}>▥</Text>
            <Text style={styles.wifi}>◔</Text>
            <Text style={styles.battery}>◍</Text>
          </View>
        </View>

        <View style={styles.logoRow}>
          <Image
            source={require('./assets/Playlist add check.png')}
            style={styles.logoIcon}
          />
          <Text style={styles.logoText}>MyList</Text>
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
            <Text style={styles.plus}>＋</Text>
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
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    marginTop: 2,
  },
  time: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: -0.5,
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  signal: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  wifi: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  battery: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
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
    tintColor: '#00d4ff',
  },
  logoText: {
    fontSize: 38,
    fontWeight: '800',
    color: '#00d4ff',
    letterSpacing: -1,
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
  plus: {
    color: '#fff',
    fontSize: 38,
    fontWeight: '300',
    lineHeight: 38,
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
    color: '#00d4ff',
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
