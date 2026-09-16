import {useEffect, useState} from 'react';

function CoinChallenge() {
    const [money, setMoney] = useState('');
    const [loading, setLoading] = useState(true);
    const [coin, setCoin] = useState([]);
    const [key, setKey] = useState(0);
    const [count, setCount] = useState(0);
    
    function onChange(event) {
        setMoney(Number(event.target.value));
    }

    function onSubmit(event) {
        event.preventDefault();
        const result = money / key;
        setCount(result.toFixed(2));
        setMoney('');
    }

    function onSelect(event) {
        setKey(Number(event.target.value));
    }

    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const response = await fetch('https://api.coinpaprika.com/v1/tickers');
                const data = await response.json();
                setLoading(false);
                setCoin(data);
                setKey(data[0].quotes.USD.price);
            }
            catch(error) {
                console.log(error);
                return;
            }
        }
        fetchAPI();
    }, []);


    return (
        <div>
            <h1>코인 구매 확인</h1>
            {loading ? <strong>로딩 중 ...</strong> :
                <div>
                    <h3>코인 선택</h3>
                    <select onChange={onSelect}> 
                        {coin.map((coin) => 
                        <option key={coin.id} value={coin.quotes.USD.price}>
                            {coin.name}, {coin.symbol}, ${coin.quotes.USD.price.toFixed(2)}
                        </option>)}
                    </select>
                    <h3>금액 ($)</h3>
                    <form onSubmit={onSubmit}>
                        <input type='number' value={money} onChange={onChange}></input>
                        <button>확인</button>
                    </form>
                    <hr></hr>
                    <h2>구매 가능한 코인의 수</h2>
                    <p>{count} 코인</p>
            </div>}
        </div>
    );
}

export default CoinChallenge;