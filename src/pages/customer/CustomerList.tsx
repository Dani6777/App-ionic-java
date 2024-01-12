// CustomerList.tsx
import React from 'react';
import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import { add, personAdd } from 'ionicons/icons';


const CustomerList: React.FC = () => {
    const { name } = useParams<{ name: string; }>();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>{name}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">{name}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <>
                <IonCard>
                    <IonTitle>Menu Clientes</IonTitle>

                    <IonItem>
                        <IonButton color='secondary' fill='solid' slot='end' size='default'><IonIcon icon={personAdd}/>
                            Nuevo CLiente
                        </IonButton>
                    </IonItem>

                    <IonGrid className='table'>
                        <IonRow className='even-row'>
                            <IonCol>#</IonCol>
                            <IonCol>Nombre</IonCol>
                            <IonCol>Correo</IonCol>
                            <IonCol>Teléfono</IonCol>
                            <IonCol>Dirección</IonCol>
                        </IonRow>
                        <IonRow className='odd-row'>
                             <IonCol>#</IonCol>
                            <IonCol>1</IonCol>
                            <IonCol>2</IonCol>
                            <IonCol>3</IonCol>
                            <IonCol>4</IonCol>
                        </IonRow>
                        <IonRow className='even-row'>
                            <IonCol>#</IonCol>
                            <IonCol>5</IonCol>
                            <IonCol>6</IonCol>
                            <IonCol>7</IonCol>
                            <IonCol>8</IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCard>
                </>
            </IonContent>
        </IonPage>
    );
};

export default CustomerList;
