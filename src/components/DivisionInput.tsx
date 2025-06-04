import './DivisionInput.css'

type DivisionInputProps = {
    onChangeDividend: (value: string) => void;
    onChangeDivisor: (value: string) => void;
};

export function DivisionInput({ onChangeDividend, onChangeDivisor }: DivisionInputProps) {
    return (
        <div className='division-input-container'>
            <label className='problem-input'>
                <input
                    type="number"
                    onChange={e => onChangeDividend(e.target.value)}
                />
                <span className='arithmetic'>÷</span>
                <input
                    type="number"
                    onChange={e => onChangeDivisor(e.target.value)}
                />
            </label>
        </div>
    );
}