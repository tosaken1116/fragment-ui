import { Label } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Label> = {
    title: "Label",
    component: Label,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
    args: {
        children: "label",
    },
};

export const Primary: Story = {
    args: {
        children: "label",
        color: "primary",
    },
};

export const Secondary: Story = {
    args: {
        children: "label",
        color: "secondary",
    },
};

export const Contained: Story = {
    args: {
        children: "label",
        variant: "contained",
    },
};

export const Outlined: Story = {
    args: {
        children: "label",
        variant: "outlined",
    },
};

export const RoundedNone: Story = {
    args: {
        children: "label",
        rounded: "none",
    },
};

export const RoundedSmall: Story = {
    args: {
        children: "label",
        rounded: "small",
    },
};

export const RoundedMedium: Story = {
    args: {
        children: "label",
        rounded: "medium",
    },
};

export const RoundedLarge: Story = {
    args: {
        children: "label",
        rounded: "large",
    },
};

export const RoundedFull: Story = {
    args: {
        children: "label",
        rounded: "full",
    },
};
