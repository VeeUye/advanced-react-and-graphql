import Products from "../components/Products";
import Pagination from "../components/Pagination";

function OrderPage() {
  return (
    <div>
      <Pagination page={1} />
      <Products />
      <Pagination page={1} />
    </div>
  );
}

export default OrderPage;
