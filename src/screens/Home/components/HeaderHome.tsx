import React from 'react';
import {Box, Flex, HStack, StatusBar, VStack} from 'native-base';
import {colors} from '@theme/foundations/colors';
import {Icon} from '@ui/icon';
import {Text} from '@ui/text';
import {Platform} from 'react-native';
import {Avatar} from '@ui/avatar';
import {IconButtonTransparent} from '@ui/button/icon-button-transparent';
import {getVersion} from 'react-native-device-info';

const HeaderHome = () => {
  return (
    <>
      <Box
        backgroundColor={colors.primary[100]}
        paddingTop={Platform.OS === 'ios' ? 12 : 0}>
        <StatusBar backgroundColor={colors.primary[100]} />
      </Box>

      <Box backgroundColor={colors.primary[100]} height={'180px'}>
        <HStack space={2} justifyContent="space-between">
          <Box
            backgroundColor={colors.primary[60]}
            rounded={'sm'}
            width={'45%'}
            paddingLeft={2}
            paddingBottom={1}
            marginLeft={4}
            marginTop={4}>
            <HStack space={2} alignItems={'center'}>
              <Avatar variant="square" name={'avatar'} />
              <VStack>
                <Text variant="body-lg" color={'white'}>
                  Hola, Usuario
                </Text>
                <Box
                  style={{
                    alignContent: 'center',
                  }}>
                  <HStack space={2}>
                    <Text
                      variant="body-sm"
                      color={'white'}
                      textAlign={'center'}>
                      Ver más info
                    </Text>
                    <Box paddingTop={'2px'}>
                      <Icon name={'ChevronRight'} size={'12'} color={'white'} />
                    </Box>
                  </HStack>
                </Box>
              </VStack>
            </HStack>
          </Box>

          <HStack space={2} alignItems={'flex-end'} paddingRight={4}>
            <Box
              backgroundColor={colors.primary[60]}
              rounded={'sm'}
              padding={4}
              marginTop={4}>
              <Icon name={'Shop'} size={'20'} color={'white'} />
            </Box>
            <Box
              backgroundColor={colors.primary[60]}
              rounded={'sm'}
              padding={3}
              marginTop={3}>
              <IconButtonTransparent
                name={'BellDefault'}
                size={'md'}
                onPress={() => {
                  console.log(getVersion());
                }}
                testID={''}
              />
              {/* <Icon name={'BellDefault'} size={'20'} color={'white'} /> */}
            </Box>
          </HStack>
        </HStack>

        <Box
          borderColor={'white'}
          rounded={'md'}
          marginY={4}
          marginX={4}
          paddingX={4}
          paddingY={1}
          borderWidth={1}>
          <HStack justifyContent={'space-between'}>
            <Flex direction="row">
              <Box marginRight={2}>
                <Icon name={'BadgeLvl2small'} />
              </Box>
              <Text variant="body-md" color="white">
                {'¡Estás en '}
              </Text>
              <Text variant="bodyBold-md" color="white">
                Nivel 2
              </Text>
              <Text variant="body-md" color="white">
                !
              </Text>
            </Flex>
            <Box paddingTop={'2px'}>
              <Icon name={'ChevronRight'} size={'16'} color={'white'} />
            </Box>
          </HStack>
        </Box>
      </Box>
    </>
  );
};
export default HeaderHome;
