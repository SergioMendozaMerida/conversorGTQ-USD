import { IonButton, IonContent, IonHeader, IonInput, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { useRef, useState } from 'react';

const Tab1: React.FC = () => {

  const quetzales = useRef<HTMLIonInputElement>(null)
  const [dolares, setDolares] = useState<number | string>('')

const calcular = async () => {
  if (quetzales.current) {
    if (quetzales.current.value) {
      setDolares(parseFloat(quetzales.current.value) / 8)
    }else{
      setDolares('ingrese quetzales')
    }
  }
}
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>DivisApp 22002686</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='contenido' fullscreen>
        <IonLabel>Ingresa Quetzales</IonLabel>
        <IonInput className='ingresar' ref={quetzales} placeholder='Q100'></IonInput>
        <IonButton onClick={calcular}>Calcular</IonButton><br></br>
        <IonLabel>La Cantidad en Dolares es:</IonLabel><br></br>
        <IonLabel>{dolares}</IonLabel>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
