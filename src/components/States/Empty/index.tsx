import { Props } from "./types";

const EmptyState = ({ title, buttonTitle, onClick }: Props) => {
  return (
    <section>
      <div>
        <h2>{title}</h2>
        <button onClick={onClick}>{buttonTitle}</button>
      </div>
    </section>
  );
};

export default EmptyState;
