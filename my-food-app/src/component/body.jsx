import "./body.css";

export function Body() {
  return (
    <>
      <div className="body-section">
        <div className="welcome-container">Welcome to our Foodbuzz</div>
        <div className="food-container">Its The Food You The Love</div>

        <div className="body-section-bottom">
          <div>
            <button>Order Now</button>
          </div>
          <div>
            <button>Book A Table</button>
          </div>
        </div>
      </div>
    </>
  );
}
