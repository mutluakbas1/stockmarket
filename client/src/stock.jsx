import axios from 'axios';
import React from "react";

const Stock = ({ display, urun, fiyat, adet, id,

}) => {

    const adetEkle = () => {
       console.log('Id '+ id);

        axios.post('http://localhost:3000/market/ekle/' + id, {
            urun: urun,
            adet: adet,
            fiyat: fiyat,
            id: id,

        }) 
         .then(function (response) {
            console.log(response);
            setDisplayResult(false);
        })
            .then(function (response) {
                console.log(response);
                setDisplayResult(false);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const adetCikar = () => {
        
        axios.post('http://localhost:3000/market/cikar/' + id, {
            urun: urun,
            adet: adet,
            fiyat: fiyat,
            id: id,


        })  
        .then(function (response) {
            console.log(response);
            setDisplayResult(false);
        })
            .then(function (response) {
                console.log(response);
                setDisplayResult(false);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="div-bottom-border">

            {(display) ? <Menu /> : <></>}


            <div className="row">

                <div className="col-sm-4">

                    <p>Urun : {urun}</p>
                    <p>Adet: {adet}</p>
                    <p>Fiyat: {fiyat}</p>

                    <button onClick={adetEkle}>Ekle</button>
                    <button onClick={adetCikar}>Cikar</button>

                </div>

                <div className="col-sm-4">



                </div>

            </div>
        </div>

    )
};


export default Stock;


