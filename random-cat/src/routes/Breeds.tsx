import { fetchBreeds } from "../api";
import { useQuery } from "react-query";
import { Link} from "react-router-dom";


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

function Breeds() {
    const {isLoading : isBreedLoading, data : breedData} = useQuery<IBreeds[]>(["Breeds"], fetchBreeds);
    return (
        <div>
            {isBreedLoading ? "Loading..." : (
                <div>
                    {breedData?.map((breed) => (
                        <div key={breed.id}>
                            <Link to={`/breeds/${breed.id}`}>
                                <h3> {breed.name} </h3>
                            </Link>
                        </div>
                    ))}
                </div>
                )
            }
        </div>
    );
}
export default Breeds;