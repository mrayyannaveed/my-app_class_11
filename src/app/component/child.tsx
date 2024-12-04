import Image from "next/image"
function ChildComponent(props:any){
    return(
        <div>
            <div className="bg-teal-300 w-[1000px] h-80 flex rounded-lg my-5">
                <div className="w-1/2 bg-purple-20 h-[100%] flex flex-col items-center justify-center">
                <h1 className="text-2xl p-4 font-bold">{props.head}</h1>
                <p className="text-xl font-bold">{props.price}</p>
                <p className="text-lg font-medium">{props.reviews}</p>
                </div>
                <div className="w-1/2 bg-yellow-200">
                <Image className="rounded-r-lg object-cover h-full w-full"  src={props.image} alt={props.alt}></Image>
                </div>
            </div>
        </div>
    )
}
export default ChildComponent