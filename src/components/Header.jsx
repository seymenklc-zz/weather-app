import React from 'react';

import { TiWeatherPartlySunny } from 'react-icons/ti';
import { FaMoon, FaSun } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';

import { Divider, Flex, Heading, Icon, IconButton, useColorMode, VStack } from '@chakra-ui/react';

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <VStack>
            <Flex>
                <Heading as='h2' size='2xl' color='cyan.500' align='center' mt='20px'>
                    Weather App
                </Heading>
                <Icon w={8} h={8} as={TiWeatherPartlySunny} />
            </Flex>
            <div style={{ marginLeft: '92%', position: 'relative', top: '-60px' }}>
                <Flex>
                    <a href="https://twitter.com/seymennklc"><IconButton icon={<FiTwitter />} /></a>
                    <IconButton ml='8px' icon={colorMode === 'light' ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} />
                </Flex>
            </div>
            <Divider />
        </VStack>
    );
};

export default Header;
