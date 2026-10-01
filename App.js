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
  const createdCount = 5;
  const completedCount = 2;

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.phoneFrame}>
        <View style={styles.topBar}>
          <Text style={styles.time}>9:41</Text>
          <View style={styles.statusIcons}>
            <Text style={styles.signal}>▥</Text>
            <Text style={styles.signal}>◔</Text>
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
            placeholderTextColor="#d6d8db"
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
            <Text style={styles.tabCount}> {completedCount}</Text>
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
    backgroundColor: '#121619',
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneFrame: {
    width: 390,
    height: 840,
    backgroundColor: '#1d2125',
    borderRadius: 32,
    paddingHorizontal: 18,
    paddingTop: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 8 },
    elevation: 10,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginTop: 4,
  },
  time: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '700',
    letterSpacing: -0.7,
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  signal: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
  battery: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 28,
    gap: 8,
  },
  logoIcon: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
  },
  logoText: {
    fontSize: 42,
    fontWeight: '800',
    color: '#0abfe5',
    letterSpacing: -1.2,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 26,
  },
  input: {
    flex: 1,
    height: 76,
    backgroundColor: '#2d3338',
    borderRadius: 12,
    color: '#fff',
    fontSize: 26,
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#3b4043',
  },
  addButton: {
    width: 80,
    height: 76,
    borderRadius: 12,
    backgroundColor: '#1ea9ea',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
  plus: {
    color: '#fff',
    fontSize: 42,
    fontWeight: '300',
    lineHeight: 42,
  },
  tabsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    gap: 10,
  },
  tabLabel: {
    fontSize: 26,
    fontWeight: '700',
    color: '#f5f7fa',
  },
  tabCount: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
    backgroundColor: '#2d3338',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 4,
    minWidth: 38,
    textAlign: 'center',
    overflow: 'hidden',
  },
  separator: {
    marginTop: 18,
    width: '100%',
    height: 1,
    backgroundColor: '#4d5359',
  },
});
