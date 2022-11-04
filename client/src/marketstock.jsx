import React, {useEffect , useState} from "react";
import axios from 'axios';
import Stock from "./stock";
import Menu from "./menu";

const Marketstock = ({  }) => {

    const [marketstock , setMarketStock ] = useState ([]);


    useEffect(() => {

        const fetchData = async() => {
            const {data} = await axios.get('http://localhost:3000/market');
            setMarketStock(data);
        
        }

        fetchData();

        return () => {}
    },[]);

    

    return(
        <div>
            <Menu />

        {marketstock.map((marketstock, index) =>
                <Stock urun={marketstock.urun}
                    adet={marketstock.adet}
                    fiyat={marketstock.fiyat}
                    kategori={marketstock.kategori}
                    display={false}
                    link={marketstock.link}
                    id={marketstock.id}
                    key={index} />
            )}
            

        </div>

    )
 };

export default Marketstock;