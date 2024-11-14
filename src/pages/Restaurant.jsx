import RestaurantHeader from "../components/restaurantHeader";
import "./Restaurant.css";
import Table from "../components/Table";
import restoranData from "../assets/mockupdata";

const restoran = restoranData.restaurants[0];
const restoranMasalari = restoran.tables;

function Restaurant() {
  return (
    <>
      <RestaurantHeader />
      <main className="restaurant">
        <article>
          <div className="camkenari">CAM KENARI</div>
          <aside>
            {restoranMasalari.map((table) => (
              <Table key={table.id} data={table} />
            ))}
          </aside>
        </article>
      </main>
    </>
  );
}

export default Restaurant;
