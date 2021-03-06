import React from 'react';
import { View, Image, Text, Linking } from 'react-native';

import styles from './styles'
import { RectButton } from 'react-native-gesture-handler';

import heartOutline from '../../images/icons/heart-outline.png'
import unfavourite from '../../images/icons/unfavorite.png'
import whatsappIcon from '../../images/icons/whatsapp.png'

export interface Teacher {
    id: number;
    avatar: string; 
    bio: string;
    cost: number; 
    name: string;
    subject: string;
    whatsapp: string;
}

interface TeacherItemProps {
    teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
    function handleLinkToWhatsApp(){
        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
    }

    return(
    <View style={styles.container}>
        <View style={styles.profile}>
            <Image style={styles.avatar} source={{ uri: teacher.avatar}} />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}> {teacher.name}</Text>
                    <Text style={styles.subject}> {teacher.subject}</Text>
                </View>
        </View>
            <Text style={styles.bio}> 
            {teacher.bio}
            </Text>
        <View style={styles.footer}>
             <Text style={styles.price}>Preço/Hora{'  '}<Text style={styles.priceValue}> R$ {teacher.cost}</Text> </Text>

        <View style={styles.buttonsContainer}>
            <RectButton style={[styles.favoriteButton, styles.favorited]}>
                {/* <Image source={heartOutline} /> */}
                <Image source={unfavourite} />
            </RectButton>

            <RectButton onPress={handleLinkToWhatsApp} style={styles.contactButton}>
                <Image source={whatsappIcon} />
                <Text style={styles.contactButtonText}>Entrar em Contato</Text>
            </RectButton>
        </View>
        </View>
    </View>
    )
}

export default TeacherItem;