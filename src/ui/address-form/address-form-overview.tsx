import React, { FC, useMemo } from 'react';

import { useNavigation } from '@react-navigation/native';
import { Box, VStack } from 'native-base';

import { Divider } from '@ui/divider';
import { ButtonGroupContainer } from '@ui/footers';
import { Container, ContentWrapper } from '@ui/layout';
import { DoubleLineRow } from '@ui/row';
import { Text } from '@ui/text';
import { capitalize } from '@utils/index';

import { SaveClientAddressForm } from './types';

const addressFormOverviewTexts = {
  title: '¿Es correcta tu dirección?',
  subTitle: 'Tu dirección',
  commentsTitle: 'Comentarios',
  confirmBtn: 'Confirmar dirección',
  editBtn: 'Editar dirección',
};

type AddressFormOverviewProps = {
  onSubmit: () => void;
  address: SaveClientAddressForm;
  isLoading?: boolean;
};

export const AddressFormOverview: FC<AddressFormOverviewProps> = ({
  onSubmit,
  address,
  isLoading,
}) => {
  const { goBack } = useNavigation();

  const formatedRegion = useMemo(
    () =>
      `${
        capitalize(address.city.description) ?? `, ${address.city.description}`
      }, ${
        address.province.description ?? `, ${address.province.description}`
      }`,
    [address.city.description, address.province.description],
  );
  const normalizedAddress = useMemo(
    () =>
      `${capitalize(address.streetName.trim())} ${address.streetNumber}${
        address.floor ? ` - ${address.floor}` : ''
      } ${
        address.floor && address.department
          ? ` ${address.department}`
          : address.department
          ? `- ${address.floor}`
          : ''
      } \nCP ${address.postalCode} - ${formatedRegion}`,
    [
      address.department,
      address.floor,
      address.postalCode,
      address.streetName,
      address.streetNumber,
      formatedRegion,
    ],
  );

  return (
    <Container
      bottomIosScrollViewBackgroundColor="white"
      topIosScrollViewBackgroundColor="white"
    >
      <ContentWrapper variant="body">
        <VStack>
          <Box paddingY={6}>
            <Text>{addressFormOverviewTexts.title}</Text>
          </Box>

          <DoubleLineRow
            title={addressFormOverviewTexts.subTitle}
            description={normalizedAddress}
            descriptionNoOfLines={4}
          />
          {!!address.comments && (
            <Box>
              <Divider />
              <DoubleLineRow
                title={addressFormOverviewTexts.commentsTitle}
                description={address.comments}
                descriptionNoOfLines={4}
              />
            </Box>
          )}
        </VStack>
      </ContentWrapper>
      <ButtonGroupContainer
        primaryButton={{
          children: addressFormOverviewTexts.confirmBtn,
          onPress: onSubmit,
          isLoading,
          testID: 'ResumeUserAddressContinueBtn',
        }}
        secondaryButton={{
          children: addressFormOverviewTexts.editBtn,
          onPress: goBack,
          testID: 'ResumeUserAddressBackBtn',
        }}
      />
    </Container>
  );
};
