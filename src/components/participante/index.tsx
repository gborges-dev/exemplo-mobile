import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type Props = {
    nome: string;
    onRemove: () => void;
}

export function Participante({ nome, onRemove }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>
                { nome }
            </Text>

            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Text style={styles.buttonText}>
                    -
                </Text>
            </TouchableOpacity>
        </View>
    )
}