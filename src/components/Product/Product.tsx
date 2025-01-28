import "./styles.css";
import { ProductProps } from "./types";
import { ProductWrapper } from "./styles";

function showProduct({ productName, productPrice }: ProductProps) {
  return (
    <ProductWrapper>
      <div>{productName}</div>
      <div>{productPrice}</div>
    </ProductWrapper>
  );
}

export default showProduct;

// import "./styles.css";

// function Product({ productName = "Unknown", productPrice }) {
//   return (
//     <div className="product-wrapper">
//       <h3>{productName}</h3>
//       {/* Пример тернарного оператора для скрытия элемента div, если цена не была передана */}
//       {/* {productPrice !== undefined ? <div>{productPrice} $</div> : null} */}
//       {/* Пример использования оператора условного рендеринга - && */}
//       {productPrice !== undefined && <div>{productPrice} $</div>}
//     </div>
//   );
// }

// export default Product;
