import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';

import Header from './components/Header/header';
import Balance from './components/Balance/balance';
import Moviments from './components/Moviments/moviments'
import Actions from './components/Actions/actions';

const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '300,30',
    date: '17/09/2022',
    type: 0 // despesas
  },
  {
    id: 2,
    label: 'Pix cliente X',
    value: '2.500,00',
    date: '17/09/2022',
    type: 1 // entrada
  },
  {
    id: 3,
    label: 'Salário',
    value: '7.200,00',
    date: '17/09/2022',
    type: 1 // despesas
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name='Matheus Pinheiro' />
      
      <Balance saldo='15.000,00' expences='390,00' />

      <Actions />

      <Text style={styles.title}>Últimas movimentações</Text>
      
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String.fromCharCode(item.id)}
        renderItem={({ item }) => <Moviments data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14
  }
});
