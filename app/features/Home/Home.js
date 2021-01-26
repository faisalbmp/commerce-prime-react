import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HomeTitle } from "./components/HomeTitle";
import { ProductList } from "./components/List/ProductList";
import { fetchShoesData } from "./homeSlice";

export const Home = () => {
  const dispatch = useDispatch()
  const shoes = useSelector(state => state.home.shoes)
  useEffect(() => {
    dispatch(fetchShoesData())
  }, [dispatch])

  return (
    <div className="container-fluid pt-10 mt-7">
      <HomeTitle value="New Releases" />
      <ProductList dataList={shoes}/>
    </div>
  )
}