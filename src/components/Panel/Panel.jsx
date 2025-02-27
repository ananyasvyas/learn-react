import ArithmeticOperation from "../ArithmeticOperation/ArithmeticOperation";

export default function Panel({type}) {
    return (
        <div className="panel">
            <div className="panel-body">
                <ArithmeticOperation type={type} />
            </div>
        </div>
    );
}