import GoitLogo from "../../svg/Logo.svg";
import backgImage from "../../svg/Picture.svg";
import Person from "../../svg/Hansel.svg";

import { Card } from "./Card.styled";
import {
  Logo,
  BcgColor,
  Line,
  Avatar,
  PersonImg,
  CardInfo,
  Button,
} from "./Card.styled";

const UserCard = () => {
  return (
    <section>
      <Card>
        <Logo src={GoitLogo} alt="logo" />
        <BcgColor src={backgImage} alt="bcg-image" />
        <Avatar>
          <PersonImg src={Person} />
        </Avatar>
        <Line></Line>

        <CardInfo>
          <p>777 tweets</p>
          <p>100,500 followers</p>
        </CardInfo>
        <Button type="button">Follow</Button>
      </Card>
    </section>
  );
};
export default UserCard;
