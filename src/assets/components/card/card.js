import "./card.css"
import "../../images/contentimage_01.jpg"
import React, { useState, useEffect } from "react";
import axios from "axios";

const CardComponent = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/post')
            .then(
                response => setData(response.data)
            )
            .catch(
                error => console.error("API통신에러:", error)
            )
    },[])

    console.log(data)


    return <>
        <ul id="concepts">
            {data.map(item => (
                <li key={item.id} className="concept">
                    <img src="" alt={item.images.description} />
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>
                </li>
            ))}
        </ul>

    </>

}

export default CardComponent;