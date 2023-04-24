import GoitLogo from "../../svg/Logo.svg";
import backgImage from "../../svg/Picture.svg";
import { fetchUsers } from "../fetchAPI";
import { Card } from "./Card.styled";

import {
  Logo,
  BcgColor,
  Line,
  Avatar,
  PersonImg,
  CardInfo,
} from "./Card.styled";
import FollowButton from "../FollowBtn/FollowBtn";

const users = await fetchUsers();
const UserCard = () => {
  return users.map((user) => {
    const followers = user.followers.toLocaleString("en");
    return (
      <Card key={user.id}>
        <Logo src={GoitLogo} alt="logo" />
        <BcgColor src={backgImage} alt="bcg-image" />
        <Avatar>
          <PersonImg src={user.avatar} />
        </Avatar>
        <Line></Line>

        <CardInfo>
          <p>{user.tweets} tweets</p>
          <p>{followers} followers</p>
        </CardInfo>
        <FollowButton />
      </Card>
    );
  });
};
export default UserCard;
