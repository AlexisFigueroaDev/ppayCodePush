import React, { FC } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import * as _ from 'lodash';
import { Box, Flex, HStack, VStack } from 'native-base';
import { Controller, useForm } from 'react-hook-form';

import { BackdropSelect } from '@ui/backdrop-select';
import { Checkbox } from '@ui/checkbox';
import { Divider } from '@ui/divider';
import { ButtonGroupContainer } from '@ui/footers';
import { Container, ContentWrapper } from '@ui/layout';
import { Text } from '@ui/text';
import { TextArea } from '@ui/text-area';
import { TextFieldReactHookController } from '@ui/text-field';

import { CitiesBackdropSearch } from './cities-backdrop-search';
import { ProvincesBackdropSearch } from './provinces-backdrop-search';
import { AddressFormSchema } from './schema';
import { AddressFormProps, SaveClientAddressForm } from './types';

const MemoizedTextField = React.memo(TextFieldReactHookController);

const TEXTS = {
  title: '¿Dónde vivís actualmente?',
  streetNameLabel: 'Calle',
  streetNumberLabel: 'Número',
  postalCodeLabel: 'Código Postal',
  checkboxText: 'Mi dirección no tiene número',
  floorLabel: 'Piso (opcional)',
  departmentLabel: 'Depto (opcional)',
  provincesSelectLabel: 'Provincia',
  provincesSelectPlaceholder: '(Seleccioná una opción)',
  citiesSelectLabel: 'Ciudad/Barrio',
  citiesSelectPlaceholder: '(Seleccioná una opción)',
  commentsPlaceHolder: 'Comentarios (opcional)',
  provincesBackdropTitle: 'Seleccioná tu provincia',
  citiesBackdropTitle: 'Seleccioná tu ciudad/barrio',
};

export const AddressForm: FC<AddressFormProps> = ({
  addressType,
  onSubmit,
}) => {
  const form = useForm<SaveClientAddressForm>({
    defaultValues: { type: addressType },
    resolver: yupResolver(AddressFormSchema),
    mode: 'all',
  });

  const province = form.watch('province');
  const addressHasNoNumber = form.watch('addressHasNoNumber');
  const isDisabled = !form.formState.isValid;
  return (
    <>
      <Container
        bottomIosScrollViewBackgroundColor="white"
        topIosScrollViewBackgroundColor="white"
      >
        <ContentWrapper variant="body">
          <VStack space={7} paddingBottom={7} w="full">
            <Box paddingTop={6}>
              <Text variant="bodyBold-md">{TEXTS.title}</Text>
            </Box>
            <MemoizedTextField
              control={form.control}
              name="streetName"
              elementProps={{
                title: TEXTS.streetNameLabel,
                testID: 'streetName',
                isInvalid: !!form.formState.errors.streetName,
                errorMessage: form.formState.errors.streetName?.message,
                autoFocus: true,
                format: 'no-format',
              }}
            />
            <HStack space={3} w="100%">
              <Flex flex={1}>
                <MemoizedTextField
                  control={form.control}
                  name="streetNumber"
                  elementProps={{
                    title: TEXTS.streetNumberLabel,
                    testID: 'streetNumber',
                    isDisabled: addressHasNoNumber,
                    type: 'number',
                    isInvalid: !!form.formState.errors.streetNumber,
                    errorMessage: form.formState.errors.streetNumber?.message,
                    format: 'no-format',
                  }}
                />
              </Flex>
              <Flex flex={1}>
                <MemoizedTextField
                  control={form.control}
                  name="postalCode"
                  elementProps={{
                    title: TEXTS.postalCodeLabel,
                    testID: 'postalCode',
                    isInvalid: !!form.formState.errors.postalCode,
                    errorMessage: form.formState.errors.postalCode?.message,
                    format: 'no-format',
                  }}
                />
              </Flex>
            </HStack>
            <Controller
              name="addressHasNoNumber"
              control={form.control}
              render={({ field }) => (
                <Checkbox
                  value={field.name}
                  title={TEXTS.checkboxText}
                  onChange={(e) => {
                    if (e) {
                      // Clears current errors over street number and resets the value of street number field
                      form.clearErrors('streetNumber');
                      form.setValue('streetNumber', '');
                    }
                    field.onChange(e);
                  }}
                  testID="addressHasNoNumber"
                />
              )}
            />

            <HStack space={3}>
              <Flex flex={1}>
                <MemoizedTextField
                  name="floor"
                  control={form.control}
                  elementProps={{
                    title: TEXTS.floorLabel,
                    testID: 'floor',
                    isInvalid: !!form.formState.errors.floor,
                    errorMessage: form.formState.errors.floor?.message,
                    type: 'number',
                    format: 'no-format',
                  }}
                />
              </Flex>
              <Flex flex={1}>
                <MemoizedTextField
                  name="department"
                  control={form.control}
                  elementProps={{
                    title: TEXTS.departmentLabel,
                    testID: 'department',
                    isInvalid: !!form.formState.errors.department,
                    errorMessage: form.formState.errors.department?.message,
                    format: 'no-format',
                  }}
                />
              </Flex>
            </HStack>
            <Controller
              name="province"
              control={form.control}
              render={({ field }) => (
                <BackdropSelect
                  label={TEXTS.provincesSelectLabel}
                  placeholder={TEXTS.provincesSelectPlaceholder}
                  testID="provincesSelect"
                  backdropProps={{
                    title: TEXTS.provincesBackdropTitle,
                    wrappedHeight: true,
                  }}
                  hasError={!!form.formState.errors.province?.id}
                  errorMessage={form.formState.errors.province?.id?.message}
                  onClose={() => {
                    // Triggers validation on province field
                    form.trigger('province.id');
                  }}
                  renderBackdropChildren={(close) => (
                    <ProvincesBackdropSearch
                      close={close}
                      onChange={(v) => {
                        // Reset city field
                        field.onChange(v);
                        form.resetField('city');
                      }}
                    />
                  )}
                  value={field.value?.description}
                />
              )}
            />

            <Controller
              name="city"
              control={form.control}
              render={({ field }) => (
                <BackdropSelect
                  label={TEXTS.citiesSelectLabel}
                  placeholder={TEXTS.citiesSelectPlaceholder}
                  testID="citiesSelect"
                  backdropProps={{
                    title: TEXTS.citiesBackdropTitle,
                    wrappedHeight: true,
                  }}
                  isDisabled={!province}
                  hasError={!!form.formState.errors.city?.id}
                  errorMessage={form.formState.errors.city?.id?.message}
                  onClose={() => {
                    // Triggers validation on city field
                    form.trigger('city.id');
                  }}
                  renderBackdropChildren={(close) => (
                    <CitiesBackdropSearch
                      close={close}
                      onChange={field.onChange}
                      provinceId={province.id}
                    />
                  )}
                  value={field.value?.description}
                />
              )}
            />
            <Controller
              name="comments"
              control={form.control}
              render={({ field, formState }) => (
                <TextArea
                  onChange={field.onChange}
                  label={TEXTS.commentsPlaceHolder}
                  errorMessage={formState.errors.comments?.message}
                  testID="comments"
                  value={field.value}
                />
              )}
            />
          </VStack>
        </ContentWrapper>
      </Container>
      <VStack space={5} bg="white">
        <Divider />

        <ButtonGroupContainer
          primaryButton={{
            children: 'Continuar',
            testID: 'confirmAddressFormSubmit',
            // We deep clone the data object because its making nested objects readonly.
            // see: https://github.com/react-hook-form/react-hook-form/issues/7703
            onPress: form.handleSubmit((data) => onSubmit(_.cloneDeep(data))),
            isDisabled,
          }}
        />
      </VStack>
    </>
  );
};
