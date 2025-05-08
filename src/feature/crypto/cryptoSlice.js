import { createSlice } from '@reduxjs/toolkit';
import sampleData from './sampleCryptoData.json'; // Import local sample data

const cryptoSlice = createSlice({
    name: 'crypto',
    initialState: {
        assets: sampleData,
    },
    reducers: {
        updateAssets(state) {
            state.assets = state.assets.map(asset => {
                const priceFluctuation = 1 + (Math.random() - 0.5) / 50;
                const newPrice = +(asset.price * priceFluctuation).toFixed(2);
                const new1h = +(asset.percent_change_1h + (Math.random() - 0.5) * 2).toFixed(2);
                const new24h = +(asset.percent_change_24h + (Math.random() - 0.5) * 3).toFixed(2);
                const new7d = +(asset.percent_change_7d + (Math.random() - 0.5) * 5).toFixed(2);
                const newVolume = asset.volume_24h + Math.floor(Math.random() * 10000 - 5000);

                return {
                    ...asset,
                    price: newPrice,
                    percent_change_1h: new1h,
                    percent_change_24h: new24h,
                    percent_change_7d: new7d,
                    volume_24h: newVolume,
                };
            });
        },
    },
});

export const { updateAssets } = cryptoSlice.actions;
export default cryptoSlice.reducer;
