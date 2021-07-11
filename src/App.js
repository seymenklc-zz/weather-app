import React, { useEffect, useState } from 'react';

import Header from './components/Header';
import WeatherStatusCard from './components/WeatherStatusCard';

import { fetchData } from './api';

const App = () => {
    const [unit, setUnit] = useState('metric');
    const [cityName, setCityName] = useState('New York');
    const [weatherData, setWeatherData] = useState({ main: [], weather: [], wind: [], country: '', name: '', });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true);
                const data = await fetchData(cityName, unit);
                setWeatherData({
                    main: data.main,
                    name: data.name,
                    wind: data.wind,
                    weather: data.weather,
                    country: data.sys.country
                });
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        loadData();
    }, [unit, cityName]);

    return (
        <div>
            <Header />
            <WeatherStatusCard
                loading={loading}
                weather={weatherData}
                setUnit={setUnit}
                setCityName={setCityName}
            />
        </div>
    );
};

export default App;
