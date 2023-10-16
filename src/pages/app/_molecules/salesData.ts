export const salesData = [
  {
    phase: "Phase 1",
    title: "seed round - an exclusive prelude",
    link: "/app/dashboard/phase_1",
    startTime: 1697943543000,
  },
  {
    phase: "Phase 2",
    title: "private sale a - unveiling opportunity",
    link: "",
    startTime: 0,
  },
  {
    phase: "Phase 3",
    title: "private sale b - fostering growth",
    link: "",
    startTime: 0,
  },
  {
    phase: "Phase 4",
    title: "public sale - Embracing the world",
    link: "",
    startTime: 0,
  },
];

interface PhaseData {
  phase: string;
  title: string;
  description: string;
  startTime: number;
  endTime: number;
}

export const phaseMaps: { [key: string]: PhaseData } = {
  phase_1: {
    phase: "Phase 1",
    title: "seed round - an exclusive prelude",
    description:
      "Inaugurating our voyage, the Seed Round stands as an invite-only affiar. Here, we extend a discreet invitation to our early supporterss, setting the stage for the AGEMS revolution",
    startTime: 1697943543000,
    endTime: 0,
  },
  phase_2: {
    phase: "Phase 2",
    title: "private sale a - unveiling opportunity",
    description:
      "The Private Sale A unfurls, revealing an opportunity for strategic partners and visionaires to join hands with AGEMS. Together, we embark on a path towards decentralized excellence",
    startTime: 0,
    endTime: 0,
  },
  phase_3: {
    phase: "Phase 3",
    title: "private sale b - fostering growth",
    description:
      "Continuing our journey, the Private Sale B is a testament to out commitment to growth and innovation, We invite those who resonate with our vision to become part of our extended family",
    startTime: 0,
    endTime: 0,
  },
  phase_4: {
    phase: "Phase 4",
    title: "public sale - Embracing the world",
    description:
      "The grand fianle approaches as we transition into the Public Sale, opening our doors to the global community. Following this momemtous event, AGEMS will find its place on esteemed centralized exchanges like Bybit, OKX, Kucoin, and possibly Binance, marking a new era of accessibility",
    startTime: 0,
    endTime: 0,
  },
};
