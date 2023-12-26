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

      <Backdrop isOpen={open} onClose={handleBackdrop} title={'Resultado 1'}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quis
          aliquid iure, nihil vel eveniet blanditiis officia laborum numquam
          explicabo quos dolore nostrum doloremque asperiores, nemo non ipsum
          odio impedit. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Fugit, nam qui deserunt temporibus eos rem? Provident voluptates
          voluptatibus aliquid eveniet expedita maxime tempora sapiente odio
          dolore. Quasi enim deserunt laudantium!
        </Text>
      </Backdrop>
    </>
  );
};
export default PrepaidCardHome;
