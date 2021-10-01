import Product from "./product";

const List = () => {
  return (
    <form>
      <label>訂單日期：2021/04/25</label>
      <Product />
      <label>訂單確認：</label>
      <button>確認</button>
      <button>取消</button>
    </form>
  );
};

export default List;
