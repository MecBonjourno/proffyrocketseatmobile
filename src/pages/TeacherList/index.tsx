import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { BorderlessButton, RectButton} from 'react-native-gesture-handler';

import styles from './styles'
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import api from '../../services/api';




function TeacherList() {
    const [teachers, setTeacher]=useState([]);

    const [subject, setSubject] = useState('')
    const [week_day, setWeekDay] = useState('')
    const [time, setTime] = useState('')

    async function handleFiltersSubmit(){
        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        })

        
        setFiltersVisible(false);
        setTeacher(response.data);
    }

    

    const [ isFiltersVisible, setFiltersVisible ] = useState(false);

    function handleToggleFilters() {
        setFiltersVisible(!isFiltersVisible);
    }

    return (
        <View style={styles.container}>
            <PageHeader 
            title="Proffys Disponíveis" 
            headerRight={(
            <BorderlessButton onPress={handleToggleFilters}><Feather name="filter" size={20} color="#FFF"></Feather></BorderlessButton>)
            } >
               { isFiltersVisible && (
                <View style={styles.searchForm}>
                        <Text style={styles.label}> Matéria </Text>
                        <TextInput value={subject} onChangeText={text => setSubject(text)} style={styles.input} placeholder="Qual a Matéria?" placeholderTextColor="#c1bccc"/>
                    
                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Dia da Semana</Text>
                            <TextInput value={week_day} onChangeText={text => setWeekDay(text)} style={styles.input} placeholder="Qual o Dia" placeholderTextColor="#c1bccc"/>
                        </View>

                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Horário</Text>
                            <TextInput value={time} onChangeText={text => setTime(text)} style={styles.input} placeholder="Qual o Horário" placeholderTextColor="#c1bccc"/>
                        </View>
                    </View>

                    <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
                        <Text style={styles.submitButtonText}>Filtrar</Text>
                    </RectButton>
                </View>
               )}
            </PageHeader>

            <ScrollView style={styles.teacherList} contentContainerStyle={{paddingHorizontal: 16, paddingBottom: 16}}>
               {teachers.map((teacher: Teacher) => {
                   return <TeacherItem key={teacher.id} teacher={teacher}/>
                }
                   )}
             {/* <TeacherItem />
             <TeacherItem />
             <TeacherItem /> */}
            </ScrollView>
            
        </View>
    )
}

export default TeacherList;