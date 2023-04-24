import { useState } from "react";
import { Button } from "./FollowBtn.styled";
const FollowButton = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleButtonClick = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <Button
      onClick={handleButtonClick}
      style={{ backgroundColor: isFollowing ? "#5CD3A8" : "#ebd8ff" }}
    >
      {isFollowing ? "Following" : "Follow"}
    </Button>
  );
};

export default FollowButton;
