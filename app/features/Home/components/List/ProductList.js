import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchDetail } from "../../homeSlice";
import { ProductCard } from "../Card/ProductCard";

export const ProductList = ({ dataList }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const onclick = (data) => {
    dispatch(fetchDetail(data))
    history.push("/home/detail")
  }
  return (
    <div className="d-flex flex-xl-row flex-column flex-wrap mb-10">
      {dataList.map((data,key) =>
        <ProductCard title={data.name} key={key} price={`$${data.price}`} category={data.category} onClick={() => onclick(data)} />
      )}

    </div>
  )
}