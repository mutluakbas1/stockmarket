import React from "react";
import Marketstock from "./marketstock";



const App = ({ pageName }) => {

    const pageToShow = () => {
    
        if (pageName === 'marketstock') return <Marketstock />;
       
       

        return <div>Not Found</div>;
    };

    return (
        <div>

            {pageToShow()}

        </div>
    )

};

export default App;

