import Card from '../card/card.component';

import './card-list.styles.css';

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
    <div className='card-list'>
      {monsters.map((monster) => {
        return <Card monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
