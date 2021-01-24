import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from "@storybook/react/types-6-0";

import { Button } from "../components/Button";

export default {
  title: "Example/Button",
  component: Button,
} as Meta;

export const Primary = () => <Button text="asdf"></Button>;
