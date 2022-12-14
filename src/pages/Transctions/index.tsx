import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighlight, TransctionsContainer, TransctionsTable } from "./styles";

export function Trasctions() {
    return (
        <div>
            <Header />
            <Summary />
            <TransctionsContainer>
                <TransctionsTable>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento ded site</td>
                            <td>
                                <PriceHighlight variant="income">
                                    R$ 12.000,00
                                </PriceHighlight>
                            </td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>
                        <tr>
                            <td width="50%">Hamburguer</td>
                            <td>
                                <PriceHighlight variant="outcome">
                                    - R$ 59,00
                                </PriceHighlight>
                            </td>
                            <td>Alimentação</td>
                            <td>10/04/2022</td>
                        </tr>
                    </tbody>
                </TransctionsTable>
            </TransctionsContainer>

        </div>
    )
}