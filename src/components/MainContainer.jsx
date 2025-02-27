import { ARITHMENTIC_OPERATIONS } from "../store/arithmetic-operations";
import Panel from "./Panel/Panel";

export default function MainContainer() {
    const operations = ARITHMENTIC_OPERATIONS.map((operation) => {
        return <Panel key={operation} type={operation} />
    });
    return (
        <>
            {operations}
        </>
    );
}