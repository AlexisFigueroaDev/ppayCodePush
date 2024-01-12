import {Backdrop} from '@ui/backdrop';
import {FullWidthSolidButton, VariableWithSolidButton} from '@ui/button';
import {Text} from '@ui/text';
import {Box} from 'native-base';
import React, {useState} from 'react';
import Card from './components/Card';
import HeaderPrepaid from './components/HeaderPrepaid';

const PrepaidCardHome = () => {
  const [open, setOpen] = useState(false);
  const handleBackdrop = () => {
    setOpen(!open);
  };
  return (
    <>
      <HeaderPrepaid />
      <Card />

      <Box width={'50%'} alignSelf={'center'} marginTop={'8'}>
        <FullWidthSolidButton
          testID="bnpl-prepaid-button"
          variant="secondary"
          onPress={handleBackdrop}
          isDisabled={false}
          isLoading={false}>
          Mostrar datos
        </FullWidthSolidButton>
      </Box>

      <Backdrop isOpen={open} onClose={handleBackdrop} title={'Hola Mundo iOS'}>
        <Box marginY={2}>
          <Text variant="body-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            explicabo id, ea sint ipsa enim reiciendis doloremque voluptates
            totam error incidunt esse, quam nihil, animi impedit! Aspernatur
            distinctio nobis in!
          </Text>
        </Box>
      </Backdrop>
    </>
  );
};
export default PrepaidCardHome;
