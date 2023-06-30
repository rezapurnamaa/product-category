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
    </>
  );
}

function ProductCategoryRow() {}

function ProductRow() {}
