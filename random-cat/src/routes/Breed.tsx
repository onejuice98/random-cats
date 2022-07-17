import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchBreed } from "../api";
import { CatImg, Container, Header, ICat } from "./Cats";

function Breed(){
    const { breedId } = useParams();
    const { isLoading : infoLoading, data : infoData, refetch : infoRefetch} = useQuery<ICat[]>(
        ["info", breedId], 
        () => fetchBreed(breedId!), {
            refetchOnMount : false,
            refetchOnWindowFocus : false,
        }
    );
    const onClick = () => {infoRefetch();}
    return (
        <div>
            {infoLoading ? "Loading..." : (
                <Container>
                    <Header> {breedId} </Header>
                    <div key={infoData![0]?.id}>
                        <CatImg src={infoData![0]?.url}/>
                        <span>width : {infoData![0]?.width}</span>
                        <span>height : {infoData![0]?.height}</span>
                        <button onClick={onClick}> Another! </button>
                    </div>
                </Container>
            )}
        </div>
    );
}

export default Breed;