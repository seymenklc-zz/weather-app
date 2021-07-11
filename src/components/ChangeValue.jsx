import React from 'react';

import { Container } from '@chakra-ui/layout';
import { Button, HStack, Menu, MenuButton, MenuItem, MenuList, Spacer } from '@chakra-ui/react';

import { BsChevronDown } from 'react-icons/bs';

const cities = [
    'Ankara',
    'Istanbul',
    'New York',
    'Amsterdam',
    'London',
    'Paris',
    'France',
    'Osaka',
    'Tokyo'
];
const unitSystems = ['imperial', 'metric'];

const ChangeValue = ({ setUnit, setCityName }) => {
    return (
        <Container maxW='sm'>
            <HStack align='center' mt='30px' mr='90px'>
                <Menu>
                    <MenuButton ml='30%' as={Button} rightIcon={<BsChevronDown />} >
                        City
                    </MenuButton>
                    <MenuList>
                        {cities.map((city, idx) => (
                            <MenuItem onClick={() => setCityName(city)} key={idx}>
                                {city}
                            </MenuItem>
                        ))}
                    </MenuList>
                </Menu>
                <Spacer />
                <Menu>
                    <MenuButton as={Button} rightIcon={<BsChevronDown />} >
                        Unit
                    </MenuButton>
                    <MenuList>
                        {unitSystems.map((unit, idx) => (
                            <MenuItem onClick={() => setUnit(unit)} key={idx}>
                                {unit.toUpperCase()}
                            </MenuItem>
                        ))}
                    </MenuList>
                </Menu>
            </HStack>
        </Container>
    );
};

export default ChangeValue;
