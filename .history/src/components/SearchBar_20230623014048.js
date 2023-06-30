export function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search product" />
      <label>
        <input type="checkbox" /> Only show products in stock
      </label>
    </form>
  );
}
