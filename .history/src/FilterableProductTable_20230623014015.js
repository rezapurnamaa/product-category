import { SearchBar } from "./SearchBar";
import { ProductTable } from "./components/ProductTable";

export function FilterableProductTable({ products }) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}
