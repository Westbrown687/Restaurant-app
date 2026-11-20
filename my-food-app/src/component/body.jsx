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
        <div className="about-container">
          <div>Welcome Food Buzz</div>
          <div>About Restaurant History !</div>
          <div>
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
        </div>

        <div>
          <img src="./cooking.png" alt="" />
        </div>
      </div>
    </>
  );
}
