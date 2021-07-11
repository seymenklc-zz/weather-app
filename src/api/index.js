import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchData = async (queryString, unit) => {
    try {
        const { data } = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${queryString}&units=${unit}&appid=${API_KEY}`
        );
        return data;
    } catch (error) {
        console.log(error);
    }
};
