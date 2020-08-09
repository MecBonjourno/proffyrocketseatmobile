import React from 'react';
import { View, ImageBackground, Text } from 'react-native';

import styles from './styles'

import teachBG from '../../images/give-classes-background.png'
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function Teach(){

    const { goBack } = useNavigation();

    function handleNavigateBack(){
        goBack();
    }

    return(
    <View style={styles.container}>
        <ImageBackground resizeMode="contain"  source={teachBG} style={styles.content} >
            <Text style={styles.title}>Quer Ser um Proffy?</Text>
            <Text style={styles.description}>Para começar a ensinar, você precisa se cadastrar como professor na nossa plataforma Web.</Text>
        </ImageBackground>
        <RectButton onPress={handleNavigateBack} style={styles.okButton}>
            <Text style={styles.okButtonText}> Tudo Bem </Text>
        </RectButton>
    </View>
    )
}

export default Teach;