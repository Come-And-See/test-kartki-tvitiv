import styled from "styled-components";

export const TweetsDiv = styled.div`
  margin-top: 50px;
  text-align: left;
  width: 1280px;
`;

export const TweetsBtnBack = styled.button`
  margin-bottom: 15px;
`;

export const TweetUL = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 30px;
  padding: 0px;
  justify-content: center;
  column-gap: 50px;
`;
export const TweetLI = styled.li`
  position: relative;
  width: 380px;
  height: 460px;
  border-radius: 20px;
  background: linear-gradient(142deg, #471ca9 0%, #5736a3 69.1%, #4b2a99 100%);
  box-shadow: -2.5776965618133545px 6.873857021331787px 20.621572494506836px 0px
    rgba(0, 0, 0, 0.23);
  list-style: none;
  text-align: center;

  font-family: "Montserrat", sans-serif;
  color: #ebd8ff;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 20px;
`;

export const TweetImgLogo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const TweetImgTop = styled.img`
  margin: 28px 0 18px;
`;

export const TweetImgBoy = styled.img`
  position: absolute;
  top: 178px;
  left: 50%;
  transform: translateX(-50%);
`;

export const TweetImgAvatar = styled.img`
  z-index: 999;
  position: absolute;
  top: 187px;
  left: 50%;
  transform: translateX(-50%);
  width: 62px;
  height: 62px;
  border-radius: 60px;
`;

export const TweetDivText = styled.div`
  padding: 62px 0 26px;
`;

export const TweetDivTextTweets = styled.p`
  margin: 0 0 16px;
`;

export const TweetDivTextFollowers = styled.p`
  margin: 0;
`;

export const TweetButtonOn = styled.button`
  width: 196px;
  height: 50px;
  padding: 14px 28px;
  border-radius: 10px;
  background: #ebd8ff;
  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px
    rgba(0, 0, 0, 0.25);

  color: #373737;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 600;
  text-transform: uppercase;
`;

export const TweetButtonOff = styled.button`
  width: 196px;
  padding: 14px 28px;
  border-radius: 10px;
  background: #5cd3a8;
  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px
    rgba(0, 0, 0, 0.25);

  color: #373737;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 600;
  text-transform: uppercase;
`;
export const TweetsLoadMore = styled.button`
  margin: 0 auto;
  display: block;
  padding: 14px 28px;
  margin-top: 30px;
`;

export const TweetsRectangle = styled.div`
  width: 380px;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.4369285106658936px 2.5776965618133545px 0px #fbf8ff inset,
    0px 3.4369285106658936px 3.4369285106658936px 0px rgba(0, 0, 0, 0.06),
    0px -1.7184642553329468px 3.4369285106658936px 0px #ae7be3 inset;
  position: absolute;
  left: 0;
  top: 214px;
`;

export const TweetsNav = styled.div`
  display: flex;
  justify-content: space-between;
`;


export const TweetsNoFollowing = styled.p`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
`;