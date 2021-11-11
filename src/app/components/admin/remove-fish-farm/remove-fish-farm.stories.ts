import { Meta } from '@storybook/angular/types-6-0';

import { RemoveFishFarmComponent } from './remove-fish-farm.component';

export default {
  title: 'Components/RemoveFishFarmComponent',
  component: RemoveFishFarmComponent,
} as Meta;

export const Primary = () => ({
  props: {
    label: 'RemoveFishFarmComponent',
  },
});
