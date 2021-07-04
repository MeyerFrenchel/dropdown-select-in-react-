import React from 'react'
import { useParams } from 'react-router-dom';
const Page = ({data}) => {
    
    const { title } = useParams();
    console.log(title);
    return (
        <div className="reports">

            {
                data
                .filter((card) => card.name === title)
                .map((card, index) => (
                    <div key={index}>

                        <h1>{card.name}</h1>
                        <p>cacat</p>
                    </div>
                ))
            }

        </div>
    )
}

export default Page
