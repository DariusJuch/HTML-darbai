import dodge from "../image/dodge.jpg";
import firstCar from "../image/firstcar.jpg";
import secondCar from "../image/secondCar.jpg";
import lambo from "../image/lambo.jpg";

function ImageCars() {
   const arrCar = [dodge, firstCar, secondCar, lambo];
    let index = 0;
  return (
    <div className="photo">
      {arrCar.map((arrCar) => (
        <img src={arrCar} alt="" key={index++} />
      ))}
    </div>
  );
}

export default ImageCars;
