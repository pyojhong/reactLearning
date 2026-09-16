import {useEffect, useState} from 'react';

function Coin() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        fetch('https://api.coinpaprika.com/v1/tickers')
        .then(response => response.json())
        .then(data => {
            setCoins(data);
            setLoading(false);
        });
    }, []);
    return (
        <div>
            <h1>코인 목록 {loading ? '' : ': 총' + coins.length + '개'}</h1>
            {loading ? <strong>로딩 중...</strong> :             <ul>
                {coins.map((coin) => <li key={coin.id}>{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price.toFixed(2)} USD</li>)}
            </ul>}
        </div>
    );
}

export default Coin;