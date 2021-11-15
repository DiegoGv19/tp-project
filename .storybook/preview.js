import { setCompodocJson } from "@storybook/addon-docs/angular";
import { moduleMetadata } from "@storybook/angular";
import { AngularMaterialModules } from "./../src/app/app.module";
import docJson from "../documentation.json";

setCompodocJson(docJson);

export const decorators = [
  moduleMetadata({
    ...AngularMaterialModules,
  }),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
};
