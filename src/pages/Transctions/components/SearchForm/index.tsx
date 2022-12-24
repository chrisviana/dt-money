import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainter } from "./styles";

export function SearchForm() {
    return (
        <SearchFormContainter>
            <input type="text" placeholder="Busque por transações"/>
            <button type="submit">
                <MagnifyingGlass size={20}/>
                Buscar
            </button>
        </SearchFormContainter>
    )
}