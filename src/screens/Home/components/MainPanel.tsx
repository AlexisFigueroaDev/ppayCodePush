import {colors} from '@theme/foundations/colors';
import {Icon} from '@ui/icon';
import {Text} from '@ui/text';
import {Pill} from '@ui/pill';
import {BadgeTag} from '@ui/badge';
import {Box, Flex, HStack} from 'native-base';
import React from 'react';
import {AmountCard} from '@ui/card';
import {BalanceRow} from '@ui/row';
import {CreditCardButton, VariableWithSolidButton} from '@ui/button';
import {useNavigation} from '@react-navigation/native';

const MainPanel = () => {
  const navigation = useNavigation();
  return (
    <>
      <Box
        backgroundColor={'white'}
        borderWidth={1}
        borderColor={colors.primaryDark[40]}
        rounded={'lg'}
        marginX={4}
        height={'200px'}
        marginTop={'-40px'}>
        <HStack space={2} alignItems={'center'} paddingLeft={4} marginTop={4}>
          <Text variant="bodyBold-lg">Mi dinero</Text>
          <Icon name={'EyeOpen'} size={'20'} />
        </HStack>

        <Box paddingTop={4}>
          <BadgeTag variant="news">104,9%</BadgeTag>
        </Box>

        <Box paddingX={2}>
          <BalanceRow
            value={10000}
            variant="large"
            onPress={() => {}}
            isShowAmount={true}
            isLoading={false}
          />
        </Box>

        <HStack space={2} paddingX={4} marginTop={2}>
          <Box flex={1}>
            <VariableWithSolidButton
              onPress={() => {
                console.log('click');
              }}
              variant="fixed-box"
              size="fb"
              minPaddingY
              testID="">
              Ingresá dinero
            </VariableWithSolidButton>
          </Box>
          <Box flex={1}>
            <VariableWithSolidButton
              onPress={() => {
                console.log('click');
              }}
              variant="fixed-box"
              size="fb"
              minPaddingY
              testID="">
              Ingresá dinero
            </VariableWithSolidButton>
          </Box>
          <Box flex={2}>
            <CreditCardButton
              iconName={'Visa'}
              // text={'Tu tarjeta'}
              lastNumbers={2406}
              onPress={() => {
                console.log('Click Tarjeta');
                navigation.navigate('Wallet');
              }}
              testID=""
            />
          </Box>
        </HStack>
      </Box>
    </>
  );
};
export default MainPanel;
