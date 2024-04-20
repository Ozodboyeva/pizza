import account from "../../assets/header/account.png";
import logo from "../../assets/header/logo.png";
import translate from "../../assets/header/translate.webp";
import "../header/style.scss";
const Header = () => {
  return (
    <header>
      <div className="navbar">
        <div className="container">
          <div className="nav">
            <div className="nav__address">
              <p>Проверить адрес</p>
              <p>
                Среднее время доставки*:<span>00:24:19</span>{" "}
              </p>
            </div>
            <div className="nav__time">
              <p>Время работы: с 11:00 до 23:00</p>
              <div className="nav__time-account">
                <img src={account} alt="account" />
                <p>Войти в аккаунт</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="header__items">
          <div className="header__image">
            <img src={logo} alt="" />
          </div>
          <ul className="header__nav">
            <li className="header__nav-item">Акции</li>
            <li className="header__nav-item">Пицца</li>
            <li className="header__nav-item">Суши</li>
            <li className="header__nav-item">Напитки</li>
            <li className="header__nav-item">Закуски</li>
            <li className="header__nav-item">Комбо</li>
            <li className="header__nav-item">Десерты</li>
            <li className="header__nav-item">Соусы</li>
          </ul>
          <div className="header__btn">
            <img src={translate} alt="" />
            <select className="select-style">
              <option value="1">Choose languga</option>
              <option value="2">Uz</option>
              <option value="3">En</option>
              <option value="3">Ko</option>
            </select>
            <button>cart</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
