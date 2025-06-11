import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      {/* Header Section */}
      <header className={styles.header}>
        <div className={styles.logo}>LOGO</div>
        <nav className={styles.nav}>
          <a href="shop.html">Shop</a>
        </nav>
        <div className={styles.auth__links}>
          <a href="admin-home.html">Admin</a>
          <a href="#">User</a>
        </div>
      </header>

      {/* Banner Section */}
      <section className={styles.banner}>
        <div className={styles.banner__image}>BANNER IMAGE</div>
      </section>

      {/* Products Section */}
      <section className={styles.products}>
        <div className={styles.product__card}>
          <div className={styles.product__image}>Product 1</div>
          <div className={styles.product__actions}>
            <a href="#">ADD TO CART</a>
            <a href="#">BUY NOW</a>
          </div>
        </div>
        <div className={styles.product__card}>
          <div className={styles.product__image}>Product 2</div>
          <div className={styles.product__actions}>
            <a href="#">ADD TO CART</a>
            <a href="#">BUY NOW</a>
          </div>
        </div>
        <div className={styles.product__card}>
          <div className={styles.product__image}>Product 3</div>
          <div className={styles.product__actions}>
            <a href="#">ADD TO CART</a>
            <a href="#">BUY NOW</a>
          </div>
        </div>
      </section>
    </>
  );
}
