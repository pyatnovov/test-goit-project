import GoitLogo from "../../svg/Logo.svg";
import backgImage from "../../svg/Picture.svg";

import { Card } from "./Card.styled";
import { useState } from "react";
import { updateUserData } from "../fetchAPI";
import { FlwButton } from "../Card/Card.styled";
import {
  Logo,
  BcgColor,
  Line,
  Avatar,
  PersonImg,
  CardInfo,
} from "./Card.styled";

const UserCard = ({ user, tweets, followers, avatar, followed, id }) => {
  const [countFolower, setCountFolower] = useState(followers);
  const [isFollow, setIsFollow] = useState(followed);

  const onBtnClick = () => {
    setIsFollow(!isFollow);
    if (isFollow) {
      updateUserData(id, {
        user,
        avatar,
        followed: !isFollow,
        tweets,
        followers: countFolower - 1,
      });
      setCountFolower(countFolower - 1);
    }
    if (!isFollow) {
      updateUserData(id, {
        user,
        avatar,
        followed: !isFollow,
        tweets,
        followers: countFolower + 1,
      });
      setCountFolower(countFolower + 1);
    }
  };

  return (
    <Card>
      <Logo src={GoitLogo} alt="logo" />
      <BcgColor src={backgImage} alt="bcg-image" />
      <Avatar>
        <PersonImg src={avatar} />
      </Avatar>
      <Line></Line>

      <CardInfo>
        <p>{tweets} tweets</p>
        <p>{countFolower.toLocaleString("en-US")} followers</p>
      </CardInfo>
      <FlwButton
        style={{ backgroundColor: isFollow ? "#5CD3A8" : "#ebd8ff" }}
        onClick={onBtnClick}
        selected={isFollow}
      >
        {isFollow ? "Following" : "Follow"}
      </FlwButton>
    </Card>
  );
};
export default UserCard;
