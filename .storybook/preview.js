import { DocsContainer, DocsPage } from "@storybook/addon-docs/blocks";
import { boolean } from "@storybook/addon-knobs";
import { addDecorator, addParameters } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "styled-components";

import { darkTheme, lightTheme } from "../src/styles/theme";

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage
  }
});

addDecorator(storyFn => (
  <ThemeProvider
    theme={
      boolean("Toggle light and dark theme", true) ? lightTheme : darkTheme
    }
  >
    {storyFn()}
  </ThemeProvider>
));
