import React from 'react';

import { Container } from '@chakra-ui/layout';
import { Box, SimpleGrid, Heading, Spinner } from '@chakra-ui/react';

import { FaTemperatureLow } from 'react-icons/fa';
import { BsDropletHalf } from 'react-icons/bs';
import { RiCloudLine } from 'react-icons/ri';
import { BiSun } from 'react-icons/bi';
import { WiStrongWind } from 'react-icons/wi';
import { GrLocation } from 'react-icons/gr';

import StatsCard from './StatsCard';
import ChangeValue from './ChangeValue';

const WeatherStatusCard = ({ weather, loading, setUnit, setCityName }) => {
    return (
        <Container maxW='6xl'>
            {!loading ? (
                <>
                    <Heading as='h3' size='xl' align='center' mt='15px' mb='15px' color='cyan.400'>
                        Current City:
                    </Heading>
                    <Heading align='center' mt='-10px' as='h2' size='xl' color='red.400'>
                        {weather.name}
                    </Heading>
                    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
                        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
                            <StatsCard
                                title={'Country Code'}
                                stat={weather.country}
                                icon={<GrLocation size={'3em'} />}
                            />
                            <StatsCard
                                title={'Temperature'}
                                stat={`${weather.main.temp}\u00b0` || 'No data'}
                                icon={<FaTemperatureLow size={'3em'} />}
                            />
                            <StatsCard
                                title={'Humidity'}
                                stat={`${weather.main.humidity}%` || 'No data'}
                                icon={<BsDropletHalf size={'3em'} />}
                            />
                            <StatsCard
                                title={'Feels Like'}
                                stat={weather.main.feels_like || 'No data'}
                                icon={<BiSun size={'3em'} />}
                            />
                            <StatsCard
                                title={'Wind'}
                                stat={`${weather.wind.speed} km/s` || 'No data'}
                                icon={<WiStrongWind size={'3em'} />}
                            />
                            <StatsCard
                                title={'Clouds'}
                                stat={
                                    weather ? weather.weather.map(
                                        desc => desc.description.charAt(0).toUpperCase() + desc.description.slice(1)
                                    ) : 'No Data'
                                }
                                icon={<RiCloudLine size={'3em'} />}
                            />
                        </SimpleGrid>
                    </Box>
                    <ChangeValue setUnit={setUnit} setCityName={setCityName} />
                </>
            ) : (
                <Spinner
                    ml='50%'
                    mt='10px'
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500" size="md" />
            )}
        </Container >
    );
};

export default WeatherStatusCard;
