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
            <Text style={styles.signal}>◔</Text>
            <Text style={styles.wifi}>◍</Text>
            <Text style={styles.battery}>▣</Text>
          </View>
        </View>

        <View style={styles.headerWrap}>
          <Text style={styles.logo}>
            <Text style={styles.logoIcon}>{'☑'}</Text>
            {' MyList'}
          </Text>
        </View>

        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            value={task}
            onChangeText={setTask}
            placeholder="Adicione algo a sua lista"
            placeholderTextColor="#d3d5d8"
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
            <Text style={styles.tabCountComplete}>{completedCount}</Text>
          </View>
        </View>

        <View style={styles.separator} />

        <View style={styles.emptyState}>
          <Image
            source={require('./assets/clipboard.png')}
            style={styles.emptyIcon}
          />
          <Text style={styles.emptyTitle}>Sua lista ainda está vazia</Text>
          <Text style={styles.emptySubtitle}>Adicione algo para se organizar</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121619',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phoneFrame: {
    width: 392,
    height: 840,
    backgroundColor: '#1f2327',
    borderRadius: 32,
    overflow: 'hidden',
    paddingHorizontal: 18,
    paddingTop: 10,
    paddingBottom: 18,
    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingTop: 4,
    paddingBottom: 12,
  },
  time: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: -0.8,
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  signal: {
    color: '#fff',
    fontSize: 18,
    lineHeight: 18,
    transform: [{ rotate: '180deg' }],
  },
  wifi: {
    color: '#fff',
    fontSize: 18,
    lineHeight: 18,
  },
  battery: {
    color: '#fff',
    fontSize: 18,
    lineHeight: 18,
  },
  headerWrap: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 26,
  },
  logo: {
    fontSize: 39,
    fontWeight: '800',
    color: '#19c8e6',
    letterSpacing: -1.2,
  },
  logoIcon: {
    color: '#1cd5ff',
    fontWeight: '700',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: '#2d3338',
    borderRadius: 12,
    color: '#fff',
    fontSize: 24,
    paddingHorizontal: 18,
    paddingVertical: 18,
    height: 76,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#383e42',
  },
  addButton: {
    width: 74,
    height: 74,
    borderRadius: 12,
    backgroundColor: '#22a8f2',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#0caae5',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
  },
  plus: {
    color: '#fff',
    fontSize: 40,
    fontWeight: '300',
    lineHeight: 40,
  },
  tabsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
    paddingHorizontal: 8,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    flex: 1,
  },
  tabLabel: {
    fontSize: 26,
    fontWeight: '800',
    color: '#f2f7ff',
  },
  tabCount: {
    fontSize: 22,
    fontWeight: '800',
    color: '#fff',
    backgroundColor: '#2f3841',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 3,
    minWidth: 36,
    textAlign: 'center',
    overflow: 'hidden',
  },
  tabCountComplete: {
    fontSize: 22,
    fontWeight: '800',
    color: '#fff',
    backgroundColor: '#2f3841',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 3,
    minWidth: 36,
    textAlign: 'center',
    overflow: 'hidden',
  },
  separator: {
    marginTop: 14,
    height: 1,
    backgroundColor: '#4a4f55',
    width: '100%',
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 80,
  },
  emptyIcon: {
    width: 72,
    height: 72,
    resizeMode: 'contain',
    tintColor: '#b5b5b5',
    opacity: 0.8,
    marginBottom: 18,
  },
  emptyTitle: {
    fontSize: 24,
    color: '#f0f0f0',
    textAlign: 'center',
    maxWidth: 260,
    lineHeight: 30,
    marginBottom: 6,
  },
  emptySubtitle: {
    fontSize: 18,
    color: '#d6d6d6',
    textAlign: 'center',
    maxWidth: 260,
    lineHeight: 24,
  },
});
