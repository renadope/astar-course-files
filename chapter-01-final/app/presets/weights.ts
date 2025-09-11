import type { CostAndWeightKind } from '~/utils/grid-weights';

type WeightData = {
  label: string;
  value: CostAndWeightKind;
  description: string;
  emoji: string;
};
export const weightPresets: WeightData[] = [
  {
    label: 'Biome Weights',
    value: 'biome',
    description: 'Mimics different biome zones with clustered terrain types.',
    emoji: '🌍',
  },
];
