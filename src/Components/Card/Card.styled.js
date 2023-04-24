import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;
export const Logo = styled.img`
  width: 76px;
  height: 22px;
  position: absolute;
  top: 20px;
  left: 20px;
`;
export const BcgColor = styled.img`
  position: absolute;
  top: 28px;
  left: 36px;
`;

export const Line = styled.p`
  position: absolute;
  z-index: 1000;
  width: 380px;
  height: 8px;
  top: 214px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;
export const Avatar = styled.p`
  position: absolute;
  z-index: 10000;
  width: 80px;
  height: 80px;
  top: 178px;
  left: 150px;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;
export const PersonImg = styled.img`
  position: absolute;
  width: 62px;
  height: 62px;
  left: 9.48px;
  top: 9.42px;
  border-radius: 50%;
`;
export const CardInfo = styled.div`
  position: absolute;
  left: 83px;
  right: 83px;
  bottom: 112px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;
