import { React, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
export default function GetById() {
    const navigate = useNavigate();
    const param = useParams();

    const apiUrl = "http://localhost:7000/product";

    const [data, setData] = useState({});

    useEffect(() => {
        fetch(apiUrl + "/" + param.id, { method: "GET" })
            .then(res => res.json())
            .then(res => setData(res));
    }, []);

    return <>
        <h1>Itemname : {data.itemname} </h1>
        <h1>Price Per Half Kg : {data.halfprice} </h1>
        <h1>Price Per Kg : {data.fullprice} </h1>

        <button className="btn btn-info mx-1" onClick={() => {
            fetch(apiUrl + "/" + param.id, { method: "DELETE" })
                .then(res => {
                    navigate('/products');
                });
        }}>Delete</button>
        <button className="btn btn-info mx-1" onClick={() => {
            navigate('../product/edit/' + param.id);
        }}>Edit</button>
        <button className="btn btn-info mx-1" onClick={() => {
            navigate('../products');
        }}>Back</button>
    </>;
}