import "./styles.css";

export default function ShopPage() {
  return (
    <>
      <header className="header">
        <div className="logo">LOGO</div>
        <nav className="nav">
          <a href="#">Shop</a>
        </nav>
        <div className="auth__links">
          <a href="#">User</a>
        </div>
      </header>
      <br />
      <div className="nav">
        <a href="index.html">Home</a>
      </div>

      <section className="products__grid">
        <div className="product__card">
          <div className="product__image">Product 1</div>
          <div className="product__actions">
            <a href="#">ADD TO CART</a>
            <a href="#">BUY NOW</a>
          </div>
        </div>
        <div className="product__card">
          <div className="product__image">Product 2</div>
          <div className="product__actions">
            <a href="#">ADD TO CART</a>
            <a href="#">BUY NOW</a>
          </div>
        </div>
        <div className="product__card">
          <div className="product__image">Product 3</div>
          <div className="product__actions">
            <a href="#">ADD TO CART</a>
            <a href="#">BUY NOW</a>
          </div>
        </div>
        <div className="product__card">
          <div className="product__image">Product 4</div>
          <div className="product__actions">
            <a href="#">ADD TO CART</a>
            <a href="#">BUY NOW</a>
          </div>
        </div>
        <div className="product__card">
          <div className="product__image">Product 5</div>
          <div className="product__actions">
            <a href="#">ADD TO CART</a>
            <a href="#">BUY NOW</a>
          </div>
        </div>
        <div className="product__card">
          <div className="product__image">Product 6</div>
          <div className="product__actions">
            <a href="#">ADD TO CART</a>
            <a href="#">BUY NOW</a>
          </div>
        </div>
      </section>
    </>
  );
}
