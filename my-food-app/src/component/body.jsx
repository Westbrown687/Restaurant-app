import "./body.css";

export function Body() {
  return (
    <>
      <div className="body-section">
        <div className="welcome-container">Welcome to our Foodbuzz</div>
        <div className="food-container">Its The Food You The Love</div>

        <div className="body-section-bottom">
          <button className="order-button">Order Now</button>

          <button className="booking-button">Book A Table</button>
        </div>
      </div>

      <div className="about-section">
        <div className="about-container-left">
          <div className="about-sec-A">
            <div className="about-wlc">Welcome Food Buzz</div>
            <div className="about-history">About Restaurant History !</div>
          </div>
          <div className="about-sec-B">
            <p>
              Synergistca conceptualize leveraged inte ectual capital through
              virtual and the a and Proactiviely initiate lrisk highyield a
              platforms after realtme froms growth that awesome tently matrix
              robusti method powerm foistcky Sytical concepta leved ntelectua
              anding capita hrough virtua nteectua that capta the and
              Proactiviely initiate low risk highyield platforms after realtme
              froms that there andin Proctive initate low risk high yeld
              platform aftering Conven iterate optimal paradigms reliable techno
            </p>
          </div>

          <button className="direction-container">Get a Direction</button>
        </div>

        <div className="about-container-right">
          <img className="cooking-pan" src="./cooking.png" alt="" />
        </div>
      </div>

      <div className="restaurant-special">hello</div>
    </>
  );
}
