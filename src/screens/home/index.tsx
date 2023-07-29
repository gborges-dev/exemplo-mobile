import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles'

import { Participante } from '../../components/participante';
import { useState } from 'react';

export default function Home() {
  const [participantes, setParticipantes] = useState<string[]>([]);
  const [participanteName, setParticipanteName] = useState('')

  function handleParticipanteRemove(nome: string) {
    Alert.alert('Remover',`Você deseja remover o participante ${nome}?`, [
      {
        text: 'Sim',
        onPress: () => setParticipantes(prevState => [...prevState.filter(participante => participante !== nome)])
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ]);
  }

  function handleValidaNomeParticipante () {
    if (participanteName == '') {
      return
    } else if (participantes.includes(participanteName)) {
      return Alert.alert('Atenção','Já existe um participante com o mesmo nome!');
    }

    adicionarParticipante()
  }

  function adicionarParticipante () {
    
    setParticipantes(prevState => [...prevState, participanteName]);

    Alert.alert('Sucesso','Participante cadastrado!');

    setParticipanteName('')
  }

  return (
      <View style={styles.container}>
      <Text style={styles.title}>Nome do evento</Text>
      <Text style={styles.subTitle}>Sexta, 4 de Novembro de 2023.</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor={"#6b6b6b"}
          onChangeText={setParticipanteName}
          value={participanteName}
        />

        <TouchableOpacity style={styles.button} onPress={handleValidaNomeParticipante}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participantes}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participante
            key={item}  //Melhor prática nessa key é usar o ID do registro
            nome={item}
            onRemove={() => handleParticipanteRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listaVaziaText}>
            Nínguem chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />

    </View>
   
  );
};
