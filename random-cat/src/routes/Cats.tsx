import { useQuery } from "react-query";
import { fetchCats } from "../api";
import styled from "styled-components";

export const Container = styled.div`
    padding : 0px 20px;
    max-width : 480px;
    margin : 0 auto;
`;

export const Header = styled.header`
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

function Cat(){
    const {isLoading, data, refetch} = useQuery<ICat[]>(["Cats"], () => 
        fetchCats(), {
            refetchOnMount : false,
            refetchOnWindowFocus : false,
        }
    );
    const onClick = () => {refetch();}
    return (
        <div>
            {isLoading ? "Loading..." : (
                <Container>
                    <Header> Random Cats </Header>
                    <div key={data![0]?.id}>
                        <CatImg src={data![0]?.url}/>
                        <span>width : {data![0]?.width}</span>
                        <span>height : {data![0]?.height}</span>
                        <button onClick={onClick}> Another! </button>
                    </div>
                </Container>
            )}
        </div>
    )

}

export default Cat;