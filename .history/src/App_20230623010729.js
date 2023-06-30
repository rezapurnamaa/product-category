import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <FilterableProductTable />
    </div>
  );
}

export default App;

function FilterableProductTable() {
  return (
    <>
      <h2>FilterableProductTable</h2>
      <SearchBar />
      <ProductTable />
    </>
  );
}

function SearchBar() {
  return (
    <>
      <input type="text" placeholder="Search product" />
    </>
  );
}

function ProductTable() {
  return (
    <>
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </table>
      <ProductCategoryRow />
    </>
  );
}

function ProductCategoryRow() {
  return (
    <>
      <td>Fruits</td>
      <tr>
        <ProductRow />
      </tr>
    </>
  );
}

function ProductRow() {
  return (
    <>
      <td>NAME</td>
      <td>$1.90</td>
      <td>X</td>
      <td>X</td>
    </>
  );
}
