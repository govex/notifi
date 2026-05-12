import axios from 'axios';



const connector = {
    getCityByCode: async (code) => {
        try {
            const response = await axios.get(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_AIRTABLE_CITIES_TABLE}?filterByFormula={city code}="${code}"`, {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
                },
            });

            if (response.data.records.length === 0) {
                throw new Error(`No city found with code: ${code}`);
            }

            return response.data.records;
        } catch (error) {
            console.error('Error fetching city by code:', error);
            throw error;
        }
    }
}


export { connector };