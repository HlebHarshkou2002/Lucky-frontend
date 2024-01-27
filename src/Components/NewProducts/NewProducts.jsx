import React from "react";
import s from "./NewProducts.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewProducts } from "../../redux/slices/products";
import NewProduct from "./NewProduct/NewProduct";

function NewProducts() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.newProducts);
   
  const isProductsLoading = products.status === "loading";

  React.useEffect(() => {
    dispatch(fetchNewProducts());
  }, []);



  return (
    <div className={s.products__block}>
      <div className={s.products__header__wrapper}>
        <div className={s.products__title__wrapper}>New Courses</div>

        <div className={s.lines}>
          <span></span>
        </div>
      </div>

      <div className={s.products__wrapper}>
        {isProductsLoading
          ? "Loading"
          : products.items.data?.map((product) => (
              <NewProduct
                id={product._id}
                title={product.title}
                price={product.price}
                productImgUrl={product.imgUrl}
              />
            ))}
      </div>
    </div>
  );
}

export default NewProducts;
