import { React, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
export default function EditProduct() {
    const param = useParams();
    const navigate = useNavigate();
    const apiUrl = "http://localhost:7000/product";

    const [data, setData] = useState({ itemname: "" });
    useEffect(() => {
        fetch(apiUrl + "/" + param.id, { method: "GET" })
            .then(res => res.json())
            .then(res => setData(res));
    }, []);
    return (<>

        <div class="input-group flex-nowrap m-3" style={{ width: '25%' }}>
            <span class="input-group-text" id="addon-wrapping">Item Name</span>
            <input
                type="text"
                class="form-control rounded"
                value={data.itemname}
                placeholder="Item Name"
                aria-describedby="addon-wrapping"
                onChange={(e) => {
                    setData({ ...data, itemname: e.target.value });
                }}
            />
        </div>

        <div class="input-group flex-nowrap m-3" style={{ width: '25%' }}>
            <span class="input-group-text" id="addon-wrapping">Half price</span>
            <input
                type="text"
                class="form-control rounded"
                value={data.fullprice}
                placeholder="Price per Kg"
                aria-describedby="addon-wrapping"
                onChange={(e) => {
                    setData({ ...data, halfprice: e.target.value });
                }}
            />
        </div>

        <div class="input-group flex-nowrap m-3" style={{ width: '25%' }}>
            <span class="input-group-text" id="addon-wrapping">Full Price</span>
            <input
                type="text"
                class="form-control rounded"
                value={data.halfprice}
                placeholder="price per Half kg"
                aria-describedby="addon-wrapping"
                onChange={(e) => {
                    setData({ ...data, fullprice: e.target.value });
                }}
            />
        </div>

        <input type="button" className="btn btn-info m-3" value="Edit Product" onClick={() => {

            fetch(apiUrl + "/" + param.id, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then((res) => {
                    navigate('/products');
                })
        }} />
        <button className="btn btn-info m-3" onClick={() => {
            navigate('../product/' + data.id);
        }}>Cancel</button>
    </>);
}