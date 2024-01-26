/**
 * Represents a monster card.
 */
export type Monster = {
  id: string;
  name: string;
  email: string;
};

/**
 * Props for the CardList component.
 */
type CardListProps = {
  monsters: Monster[];
};

/**
 * Renders a list of monster cards.
 * @param {CardListProps} props - The component props.
 * @returns {JSX.Element} The rendered CardList component.
 */
const CardList = ({ monsters }: CardListProps) => {
  return (
    <div>
      {monsters.map((monster) => {
        return (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
