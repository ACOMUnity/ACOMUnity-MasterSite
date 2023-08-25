import { GrConnect } from "react-icons/gr";
import { GiUnionJack } from "react-icons/gi";
import { TbBuildingCommunity } from "react-icons/tb";

import { ICard } from "../../../../models/cardDetailsIInterface";

export const data: ICard[] = [
  {
    id: 1,
    title: "Revolutionizing Decentralized Collaboration",
    description:
      " ACOMUnity Master DAO aims to revolutionize the way decentralized collaboration is conducted. By providing a platform for interconnected DAOs, it offers new possibilities for efficient and impactful governance in the Web3 ecosystem.",
    svg: GiUnionJack,
  },
  {
    id: 2,
    title: "Interconnected DAOs",
    description:
      "The platform enables the creation and management of multiple DAOs that are connected and operate under the guidance of the Master DAO. This interconnected structure allows for enhanced coordination and efficiency in decentralized decision-making.",
    svg: GrConnect,
  },

  {
    id: 3,
    title: "Empowering Web3 Communities",
    description:
      "ACOMUnity Master DAO empowers Web3 communities by providing a robust infrastructure for decentralized collaboration. Through its interconnected DAOs, it fosters community engagement, participation, and collective decision-making, driving innovation and growth in the Web3 ecosystem.",
    svg: TbBuildingCommunity,
  },
];
