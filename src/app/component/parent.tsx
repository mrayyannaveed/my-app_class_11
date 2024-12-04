import ChildComponent from "./child"
import Civic from "../../../public/Honda_Civic.jpg"
import City from "../../../public/Honda_City.jpg"
import Corolla from "../../../public/Toyota_Corolla.jpg"
import Alto from "../../../public/Suzuki_Alto.jpg"
let carInfo = [
    {carName: "Honda Civic", carImage: Civic, carPrice: "10,000,000,", carReviews: "Excellent Average"}, 
    {carName: "Honda City", carImage: City, carPrice: "60,00,000", carReviews: "Best Power Engine"}, 
    {carName: "Toyota Corolla", carImage: Corolla, carPrice: "75,00,000,", carReviews: "Good Power Consumption"}, 
    {carName: "Suzuki Alto", carImage: Alto, carPrice: "27,00,000,", carReviews: "Best for everyone"}
]
let atr = "Car"

function ParentComponent(){
    return(
        <div className="flex flex-col items-center gap-5">
            {carInfo.map((info) => 
            <ChildComponent  head={info.carName} image={info.carImage}
            price={info.carPrice} reviews={info.carReviews} alt={atr}/>
        )}
        </div>
    )
}
export default ParentComponent