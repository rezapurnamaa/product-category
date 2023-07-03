import { ProductRow } from "./ProductRow";
import { ProductCategoryRow } from "./ProductCategoryRow";

export function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  //filter product by name and stock availability
  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(filterText.toLowerCase()) &&
      (inStockOnly ? product.stocked : true)
    );
  });

  console.log(filteredProducts);
  generateProductTable(filteredProducts);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </>
  );

  function generateProductTable(products) {
    products.forEach((product) => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            key={product.category}
            category={product.category}
          />
        );
      }

      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });
  }
}
