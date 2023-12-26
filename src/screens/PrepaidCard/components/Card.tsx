import {colors} from '@theme/foundations/colors';
import {Icon} from '@ui/icon';

import PrepaidCardImages from 'assets/img/prepaidCard';
import {Box, Text, HStack, Image} from 'native-base';
import React from 'react';
import {Platform} from 'react-native';

const Card = () => {
  const ppayLogo = PrepaidCardImages.PPay;
  const numberCard = PrepaidCardImages.numberCard;
  const visa = PrepaidCardImages.Visa;
  return (
    <Box
      rounded={'lg'}
      backgroundColor={colors.primary['80']}
      height={'330px'}
      width={'196px'}
      alignSelf="center"
      marginTop={12}
      position="relative">
      <Box marginLeft={4} marginTop={4}>
        <HStack space={2} alignItems={'center'}>
          <Icon name={'Billete'} size={'24'} />
          <Image
            source={ppayLogo}
            alt="ppay"
            style={{width: 114, height: 18, marginBottom: 5}}
          />
        </HStack>
      </Box>

      <Box
        position="absolute"
        bottom={0}
        left={0}
        marginLeft={4}
        marginBottom={4}>
        <Image
          source={numberCard}
          alt="ppay"
          style={{width: 55, height: 79, bottom: 3}}
        />
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            position: 'absolute',
            alignSelf: 'center',
            ...Platform.select({
              android: {
                bottom: -4,
              },
              ios: {
                bottom: -4,
              },
            }),
          }}>
          2406
        </Text>
      </Box>
      <Box
        position="absolute"
        bottom={0}
        right={0}
        marginRight={4}
        marginBottom={4}>
        <Image
          source={visa}
          alt="ppay"
          style={{width: 62, height: 20, bottom: 3}}
        />
      </Box>
    </Box>
  );
};
export default Card;
