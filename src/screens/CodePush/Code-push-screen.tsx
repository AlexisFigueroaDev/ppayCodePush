import {useNavigation} from '@react-navigation/native';
import {Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import CodePush from 'react-native-code-push';
import {PopupModal} from '../../ui/modals/popup-modal/popup-modal';

const Codepushscreen = () => {
  const [updatePending, setUpdatePending] = useState(false);
  const checkUpdate = async () => {
    if (false) {
    } else {
      const update = await CodePush.checkForUpdate();
      console.log(update);
      return setUpdatePending(!!update);
    }
  };

  useEffect(() => {
    checkUpdate();
  }, [updatePending]);

  const [OpenPopUp, setOpenPopUp] = useState(true);
  const navigation = useNavigation();

  const handlePopUp = () => {
    setOpenPopUp(false);
  };

  const handleUpdate = () => {
    navigation.navigate('UpdateApp', {
      update: true,
    });
  };

  return (
    <>
      {updatePending ? (
        <PopupModal
          icon="Megaphone"
          title={'Tenemos una actualización disponible'}
          description={
            'Es importante mantener la app actualizada para no perderte ningún beneficio ni oferta'
          }
          isOpen={OpenPopUp}
          primaryButtonTitle={'Actualizar la app'}
          primaryButtonAction={handleUpdate}
          onClose={handlePopUp}
        />
      ) : null}
    </>
  );
};
export default Codepushscreen;
