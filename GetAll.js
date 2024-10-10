import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function GetAll() {
    const navigate = useNavigate();
    const apiUrl = "http://localhost:7000/product";

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(res => setData(res));
    }, []);

    const formatedData = data.map((prod) => {
        return (<>
            <h4 onClick={() => {
                navigate('/product/' + prod._id);
            }}>
                {/* {prod.itemid} */}
                 {prod.itemname}</h4>
        </>)
    });


    return (<>
        {formatedData}
    </>);

}