import RestaurantHeader from "../components/restaurantHeader";
import "./Restaurant.css";

function Restaurant() {
  return (
    <>
      <RestaurantHeader />
      <main className="restaurant">
        <article>
          <div className="camkenari">CAM KENARI</div>
          <aside>
            <div>Deneme</div>
            <div>Deneme</div>
            <div>Deneme</div>
            <div>Deneme</div>
            <div>Deneme</div>
            <div>Deneme</div>
          </aside>
        </article>
      </main>
    </>
  );
}

export default Restaurant;
