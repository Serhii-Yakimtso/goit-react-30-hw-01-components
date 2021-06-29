import s from "./FriendlistItem.module.css";

const FriendlistItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={s.item} key={id}>
      <span
        className={
          !isOnline ? `${s.isOffline} ${s.status}` : `${s.isOnline} ${s.status}`
        }
      >
        {isOnline}
      </span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

export default FriendlistItem;
