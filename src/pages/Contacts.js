const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>
        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Kharkiv, Ukraine</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram / WhatsApp</h2>
            <p>
              <a href="tel:+380669886533">+38 (066) 988-65-33</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:kmustymenko@gmail.com">kmustymenko@gmail.com</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
