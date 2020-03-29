import React from 'react';
import { Feather} from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();

    const incident = route.params.incident;
    const message = `Olá ${incident.name}, estou entradno em contato pois gostaria de entrar em contato no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR',
    { style: 'currency', currency: 'BRL' }).format(incident.value)}`

    function navigateBack() {
        navigation.goBack()
    }

    function sendMail() {
        MailComposer.composeAsync
            subject: `Herói do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message,
    })

    function sendWhatsapp() {
            Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>

                <TouchableOpacity onPress={() => {}}>
                    <Feather name="arrow-left" size={28} color="#E82041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                    <Text style={[styles.IncidentProperty, { marginTop: 0 }]}>ONG:</Text>
                    <Text style={styles.IncidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                    <Text style={styles.IncidentProperty}>CASO:</Text>
                    <Text style={styles.IncidentValue}>{incident.title}</Text>

                    <Text style={styles.IncidentProperty}>VALOR:</Text>
                    <Text style={styles.IncidentValue}>{incident.value}</Text>
            </View>

            <View style={styles.contactBox}>
                    <Text style={styles.heroTitle}>Salve o dia!</Text>
                    <Text style={styles.heroTitle}>Seja o herói deste caso.</Text>

                    <Text style={styles.heroDescription}>Entre em contato:</Text>

            <View style={styles.actions}>
                    <TouchableOpacity styles={styles.action} onPress={(sendWhatsapp)>
                        <Text style={styles.ActionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity styles={styles.action} onPress={sendMail}>
                        <Text style={styles.ActionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}