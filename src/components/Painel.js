import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Entrada from './Entrada';
import Operacao from './Operacao';
import Comando from './Comando';

class Painel extends Component {
    constructor(props) {
        super(props);

        this.state = { num1: '10', num2: '25' };

        this.calcular = this.calcular.bind(this);
    }

    calcular() {
        const { num1, num2 } = this.state;
        const resultado = parseFloat(num1) + parseFloat(num2);
        alert(`Sim vamos calcular ${resultado}`);
    }

    render() {
        return (
            <View>
                <Entrada num1={this.state.num1} num2={this.state.num2} />
                <Operacao />
                <Comando acao={this.calcular} />
            </View>
        );
    }
}

export { Painel };
