import React from 'react';
import { useSelector } from 'react-redux';

const CryptoTable = () => {
    const assets = useSelector(state => state.crypto.assets);

    const getColor = (value) => (value > 0 ? 'text-green-600' : value < 0 ? 'text-red-600' : 'text-gray-600');

    return (
        <div className="overflow-x-auto p-8">
            <table className="min-w-full bg-white shadow rounded-xl">
                <thead className="bg-gray-100">
                    <tr className="text-left text-sm">
                        <th className="p-2">#</th>
                        <th className="p-2">Name</th>
                        <th className="p-2">Price</th>
                        <th className="p-2">1h %</th>
                        <th className="p-2">24h %</th>
                        <th className="p-2">7d %</th>
                        <th className="p-2">Market Cap</th>
                        <th className="p-2">24h Volume</th>
                        <th className="p-2">Circulating</th>
                        <th className="p-2">Max Supply</th>
                        <th className="p-2">7D Chart</th>
                    </tr>
                </thead>
                <tbody>
                    {assets.map((asset, i) => (
                        <tr key={asset.id} className="border-t text-sm">
                            <td className="p-9">{i + 1}</td>
                            <td className="p-2 text-black font-bold">{asset.name} <span className='text-gray-400'> {asset.symbol} </span></td>
                            <td className="p-2">${asset.price.toLocaleString()}</td>
                            <td className={`p-2 ${getColor(asset.percent_change_1h)}`}>{asset.percent_change_1h}%</td>
                            <td className={`p-2 ${getColor(asset.percent_change_24h)}`}>{asset.percent_change_24h}%</td>
                            <td className={`p-2 ${getColor(asset.percent_change_7d)}`}>{asset.percent_change_7d}%</td>
                            <td className="p-2">${asset.market_cap.toLocaleString()}</td>
                            <td className="p-2">${asset.volume_24h.toLocaleString()}</td>
                            <td className="p-2">{asset.circulating_supply.toLocaleString()}</td>
                            <td className="p-2">{asset.max_supply ? asset.max_supply.toLocaleString() : '∞'}</td>
                            <td className="p-2"><img src="/7dchart.svg" alt="7d" className="w-20" /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CryptoTable;
