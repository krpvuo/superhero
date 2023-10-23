import { useQuery } from "@tanstack/react-query";
import { Wrapper } from "../assets/wrappers/Characters"
import { useGlobalContext } from "../context/context"
import { SearchForm } from "./components/SearchForm"
import { customFetch } from "../utils/utils";
import { CharacterList } from "./components/CharacterList";

export const Characters = () => {

    const { searchTerm } = useGlobalContext();

    const { isLoading, data, isError } = useQuery({
        queryKey: ['find-characters', searchTerm],
        queryFn: async () => {
            try {
                const response = await customFetch.get(`/search/${searchTerm}`);

                return response.data;
            } catch (error) {
                return error.message
            }
        }
    })

    return (
        <Wrapper>
            <div className="page">
                <SearchForm />
                <CharacterList data={data} error={isError} loading={isLoading} />
            </div>
        </Wrapper>
    )
}