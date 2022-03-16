export default function CategoryFilter(){
    return (
        <div className="m-md1 m-rl0">
          <h5 className="fw-600">Category</h5>
          <div className="input-wrapper checkbox m-s m-rl0">
            <input type="checkbox" id="mens-app" />
            <label htmlFor="mens-app">Weights</label>
          </div>
          <div className="input-wrapper checkbox m-s m-rl0">
            <input type="checkbox" id="womens-app" />
            <label htmlFor="womens-app">Equipments</label>
          </div>
          <div className="input-wrapper checkbox m-s m-rl0">
            <input type="checkbox" id="equipments" />
            <label htmlFor="equipments">Supplements</label>
          </div>
          <div className="input-wrapper checkbox m-s m-rl0">
            <input type="checkbox" id="accessories" />
            <label htmlFor="accessories">Accessories</label>
          </div>
        </div>
    );
}