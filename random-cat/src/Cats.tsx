import { useQuery } from "react-query";
import { fetchCats } from "./api";
import styled from "styled-components";

const CatImg = styled.img`
    width : 500px;
    height : 500px;
`;

interface ICat {
    breeds : [];
    id : string;
    url : string;
    width : number;
    height : number;
}

function Cat(){
    //const [change, setChange] = useState(false);
    const {isLoading, data, refetch} = useQuery<ICat[]>(["Cats"], () => 
        fetchCats(), {
            refetchOnMount : false,
            refetchOnWindowFocus : false,
        }
    );
    const onClick = () => {refetch();}
    return (
        <div>
            <button onClick={onClick}>click me!</button>
            {isLoading ? "Loading..." : (
                <div>
                    {data?.map((cat) => (
                        <div key={cat.id}>
                            <CatImg src={cat.url}/>
                            <span>width : {cat.width}</span>
                            <span>height : {cat.height}</span>
                        </div>
                    ))}

                </div>
            )}
        </div>
    )

}

export default Cat;