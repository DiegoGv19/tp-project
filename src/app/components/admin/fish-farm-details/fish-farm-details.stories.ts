import { Meta } from '@storybook/angular/types-6-0';

import { FishFarmDetailsComponent } from './fish-farm-details.component';

export default {
  title: 'Components/FishFarmDetailsComponent',
  component: FishFarmDetailsComponent,
} as Meta;

export const Primary = () => ({
  props: {
    label: 'FishFarmDetailsComponent',
  },
});
