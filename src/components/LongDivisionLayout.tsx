import './LongDivisionLayout.css'

type LongDivisionLayoutProps = {
  dividend: string;
  divisor: string;
};

export function LongDivisionLayout({ dividend, divisor }: LongDivisionLayoutProps) {

  return (
    <div className="long-division-container">
      <div className="division-row ">
        <div className="divisor">{divisor}</div>
        <div className="bracket-body">
          <div className="top-bar" />
          <div className="dividend">{dividend}</div>
        </div>
      </div>
    </div>
  );
}

