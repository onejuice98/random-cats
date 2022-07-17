import { useQuery } from "react-query";
import { fetchBreeds, fetchCats } from "../api";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    padding : 0px 20px;
    max-width : 480px;
    margin : 0 auto;
`;

const Header = styled.header`
    height : 15vh;
    display : flex;
    justify-content : center;
    align-items : center;
    font-size : 48px;
`;

export const CatImg = styled.img`
    width : 400px;
    height : 400px;
`;

export interface ICat {
    breeds : [];
    id : string;
    url : string;
    width : number;
    height : number;
}

interface IBreeds {
    adaptability: number;
    affection_level: number;
    alt_names: string;
    cfa_url: string;
    child_friendly: number;
    country_code: string;
    country_codes: string;
    description: string;
    dog_friendly: number;
    energy_level: number;
    experimental: number;
    grooming: number;
    hairless: number;
    health_issues: number;
    hypoallergenic: number;
    id: string;
    image: {
        id: string;
        width: number;
        height: number; 
        url: string;
    };
    indoor: number;
    intelligence: number;
    life_span: string;
    name: string;
    natural: number;
    origin: string;
    rare: number;
    reference_image_id: string;
    rex: number;
    shedding_level: number;
    short_legs: number;
    social_needs: number;
    stranger_friendly: number;
    suppressed_tail: number;
    temperament: string;
    vcahospitals_url: string;
    vetstreet_url: string;
    vocalisation: number;
    weight: {
        imperial: string;
        metric: string;
    };
    wikipedia_url: string;
}
function Cat(){
    const {isLoading, data, refetch} = useQuery<ICat[]>(["Cats"], () => 
        fetchCats(), {
            refetchOnMount : false,
            refetchOnWindowFocus : false,
        }
    );
    const {isLoading : isBreedLoading, data : breedData} = useQuery<IBreeds[]>(["Breeds"], fetchBreeds);
    const loading = isLoading || isBreedLoading;
    const onClick = () => {refetch();}
    return (
        <div>
            
            {loading ? "Loading..." : (
                <Container>
                    <Header> Random Cats </Header>
                    <div key={data![0]?.id}>
                        <CatImg src={data![0]?.url}/>
                        <span>width : {data![0]?.width}</span>
                        <span>height : {data![0]?.height}</span>
                        <button onClick={onClick}> Another! </button>
                    </div>
                    {breedData?.map((breed) => (
                        <div key={breed.id}>
                            <Link to={`/${breed.id}`}>
                                <h3> {breed.name} </h3>
                            </Link>
                        </div>
                    ))}

                </Container>
            )}
        </div>
    )

}

export default Cat;