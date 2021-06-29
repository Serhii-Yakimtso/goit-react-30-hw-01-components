import ProtoTypes from "prop-types";
import FriendlistItem from "./FriendlistItem/FriendlistItem";
import s from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <>
      <h2>FriendList</h2>

      <section className={s.friends}>
        <ul className={s.friendsList}>
          {friends.map((el) => {
            const { avatar, name, isOnline, id } = el;

            return (
              <FriendlistItem
                avatar={avatar}
                name={name}
                isOnline={isOnline}
                id={id}
              />
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default FriendList;

FriendList.protoTypes = {
  avatar: ProtoTypes.string.isRequired,
  name: ProtoTypes.string.isRequired,
  isOnline: ProtoTypes.bool.isRequired,
  id: ProtoTypes.string.isRequired,
};
