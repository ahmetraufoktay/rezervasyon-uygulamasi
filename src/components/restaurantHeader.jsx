import restoranResmi from "../assets/restaurant.svg";
import kullaniciResmi from "../assets/user.svg";
import "./restaurantHeader.css";

function RestaurantHeader() {
  return (
    <>
      <header className="restaurantHeader">
        <div>
          <img className="foto restoranResmi" src={restoranResmi} alt="" />
          <h1>RESAPP</h1>
        </div>
        <h1>Restoran Adı</h1>
        <div>
          <img className="foto" src={kullaniciResmi} alt="kullanici fotosu" />
          <h1>Kullanıcı</h1>
        </div>
      </header>
    </>
  );
}

export default RestaurantHeader;
