import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native'
import styles from './styles';
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

import landingImgs from '../../images/landing.png';
import studyIcon from '../../images/icons/study.png';
import teacherIcon from '../../images/icons/give-classes.png';
import heartIcon from '../../images/icons/heart.png';
import api from '../../services/api';



function Landing(){
    const [ totalConnections, setTotalConnections ] = useState(0)

    useEffect(()=>{
        api.get('connections').then(response => {
            const { total }  = response.data;

            setTotalConnections(total);
        })
    }, [])

    const {navigate} = useNavigation();

    function handleNavigationToTeachPage(){
        navigate('Teach');
    }

    function handleNavigationToStudyPage() {
        navigate('Study');
    }

    return(
        <View style={styles.container}>
            <Image source={landingImgs} style={styles.banner} />

            <Text style={styles.title}> Seja Bem-Vindo, {"\n"} <Text style={styles.titleBold}>O que deseja Fazer?</Text> </Text>

            <View style={styles.buttonsContainer}>
                <RectButton onPress={handleNavigationToStudyPage} style={[styles.button, styles.buttonPrimary]}>
                    <Image source={studyIcon} />
                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>

                <RectButton onPress={handleNavigationToTeachPage} style={[styles.button, styles.buttonSecondary]}>
                    <Image source={teacherIcon} />
                    <Text style={styles.buttonText}>Ensinar</Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}> Total de {totalConnections} Conexões Realizadas! {' '} <Image source={heartIcon} /> </Text>
        </View>
        )
}

export default Landing;