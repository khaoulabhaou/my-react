import { malhafti } from "../api/malhafti";
import Affichage from "./Affichage";

export default function Rambayat(){
    return(
        <div className="container" id="content">
            {
                malhafti.malhafti.filter((malhafti) => {
                    return malhafti.category == "الرمبي"
                }).map((element,i)=>{
                    return (
                        <Affichage key = {i} malhafti = {element}/>
                    )
                })
            }
        </div>
    )
}