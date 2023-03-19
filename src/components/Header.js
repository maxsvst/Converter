import "../index.css";

export default function Header({ currentUsd, currentEur }) {
  return (
    <div className="header">
      <span>$ {currentUsd}</span>
      <span>€ {currentEur}</span>
    </div>
  );
}
