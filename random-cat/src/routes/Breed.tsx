import { fetchBreed } from "../api";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { ICat, CatImg } from "./Cats";

function Breed() {
    const { breedId } = useParams();
    const { isLoading : infoLoading, data : infoData, refetch} = useQuery<ICat[]>(
        ["info", breedId], 
        () => fetchBreed(breedId!), {
            refetchOnMount : false,
            refetchOnWindowFocus : false,
        }
    );
    const onClick = () => {refetch();}
    return (
        <div>
            {infoLoading ? "Loading..." : (
                    <div key={infoData![0]?.id}>
                        <CatImg src={infoData![0]?.url}/>
                        <button onClick={onClick}> Anoter! </button>
                    </div>
                )
            }

        </div>


    );
}
export default Breed;