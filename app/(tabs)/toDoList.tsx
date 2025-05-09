//Deixa tudo em inglês, Deixar a parte de baixo roxa e mudar os nomes do index/about, mudar o branco do input lá que cria o balão



import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useTarefas } from "@/hooks/useTarefas";

export default function App() {
    const { tarefas, novaTarefa, setNovaTarefa, adicionarTarefa, removerTarefa } = useTarefas();

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Lista de Personagens de Anime</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o nome da Personagem..."
                    value={novaTarefa}
                    onChangeText={setNovaTarefa}
                />
                <Button color= "purple" title="Adicionar" onPress={adicionarTarefa} />
            </View>

            <FlatList
                data={tarefas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.tarefaContainer}>
                        <Text style={styles.tarefaTexto}>{item.texto}</Text>
                        <TouchableOpacity onPress={() => removerTarefa(item.id)}>
                            <Text style={styles.remover}>
                                <Ionicons name={'close'} color={''} size={24} />
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#0D0D0D' },
    titulo: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#ccc0ed' },
    inputContainer: { flexDirection: 'row', marginBottom: 10 },
    input: { flex: 1, borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginRight: 10, color: '#ccc0ed' },
    tarefaContainer: {
        flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#e6ccef', padding: 15,
        marginBottom: 5, borderRadius: 5, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 3, elevation: 2
    },

});