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
      <input type="text" />
    </>
  );
}

function ProductTable() {
  return (
    <>
      <table>
        <thead>Name</thead>
        <thead>Price</thead>
      </table>
    </>
  );
}

function ProductCategoryRow() {}

function ProductRow() {}
