import React from 'react';
import { View, ScrollView, Text } from 'react-native';

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

function Favourites() {
    return (
    <View style={styles.container}>
        <PageHeader title="Proffys Favoritos"> 
           
        </PageHeader>

        <ScrollView style={styles.teacherList} contentContainerStyle={{paddingHorizontal: 16, paddingBottom: 16}}>
             <TeacherItem />
             <TeacherItem />
             <TeacherItem />
            </ScrollView>

    </View>
    )
}

export default Favourites;