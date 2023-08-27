import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

class App extends Component{

    //método construtor
    constructor(props){
        super(props);
        this.state = {
            textoFrase: 'Vamos saber qual a sua Sorte!',
            img: require('./src/biscoito.png'),
        };

        //ativando a função onpress do button
        this.quebraBiscoito = this.quebraBiscoito.bind(this);

        //Isto é um array de ítens
        this.frases = [
            'Siga os bons e aprenda com eles.',
            'O bom-senso vale mais do que muito conhecimento.',
            'O riso é a menor distância entre duas pessoas.',
            'Deixe de lado as preocupações e seja feliz.',
            'Realize o óbvio, pense no improvável e conquiste o impossível.',
            'Acredite em milagres, mas não dependa deles.',
            'A maior barreira para o sucesso é o medo do fracasso.',
            'Espere o melhor, prepare-se para o pior e aceite o que vier',
        ]; 
    }

    //aqui criamos as nossas funções
    quebraBiscoito(){
        //gerar número aleatório baseado na quantidade de frases
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

        //alterar os estados a cada clique no botão
        this.setState({
            textoFrase: ' "' + this.frases[numeroAleatorio] + '"',
            img: require('./src/biscoitoAberto.png')
        })
    }

    render(){
        return(
            <View style={styles.container}>
                
                <Image
                source={this.state.img}
                style={styles.img}
                />

                <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

                <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
                    <View style={styles.btnArea}> 
                        <Text style={styles.btnTexto}>QUEBRAR BISCOITO</Text>                     
                    </View>
                </TouchableOpacity>

            </View>

        );
    }
}

//Aqui são os estilos de cada componente

const styles = StyleSheet.create({
    container:{
        flex:1,        
        alignItems: 'center',
        justifyContent: 'center'
    },
    img:{
        width: 250,
        height: 250,
    },
    textoFrase:{
        fontSize: 20,
        color: '#dd7b22',
        margin: 30,
        fontStyle: 'italic',
        textAlign: 'center'
    },
    botao:{
        width: 230,
        height: 50,
        borderWidth: 2,
        borderColor: '#dd7b22',
        borderRadius: 25
    },
    btnArea:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnTexto:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#dd7b22'
    }
});

export default App;