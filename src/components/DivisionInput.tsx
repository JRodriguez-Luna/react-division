import './DivisionInput.css'

type DivisionInputProps = {
    onChangeDividend: (value: number) => void;
    onChangeDivisor: (value: number) => void;
};

export function DivisionInput({ onChangeDividend, onChangeDivisor }: DivisionInputProps) {
    return (
        <div className='division-input-container'>
            <label className='problem-input'>
                <input
                    type="number"
                    onChange={e => onChangeDividend(Number(e.target.value))}
                />
                <span className='arithmetic'>÷</span>
                <input
                    type="number"
                    onChange={e => onChangeDivisor(Number(e.target.value))}
                />
            </label>
        </div>
    );
}