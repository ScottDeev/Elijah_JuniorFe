import { RocketCardProps } from "../type";

export const generateMoreRockets = (data: RocketCardProps[]) => {
  const randomRockets = [];
  for (let i = 0; i < 40; i++) {
    const randomIndex = Math.floor(Math.random() * data.length);
    randomRockets.push(data[randomIndex]);
  }
  return randomRockets;
};
