import { useState } from 'react';
import { DivisionInput } from './components/DivisionInput';
import { LongDivisionLayout } from './components/LongDivisionLayout';

function App() {
  const [dividend, setDividend] = useState('');
  const [divisor, setDivisor] = useState('');

  return (
    <>
      <DivisionInput onChangeDividend={setDividend} onChangeDivisor={setDivisor} />
      <LongDivisionLayout dividend={dividend} divisor={divisor}/>
    </>
  );
}

export default App;
