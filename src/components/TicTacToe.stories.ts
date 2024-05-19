import type { Meta, StoryObj } from "@storybook/react";
import { TicTacToe } from "./TicTacToe";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
/**
 * [チュートリアル：三目並べ – React](https://ja.react.dev/learn/tutorial-tic-tac-toe)
 *
 * TODO: チュートリアルのPlus Ultra部分は、テストコードを実装してから進める
 */
const meta = {
	title: "react.dev/LEARN REACT/クイックスタート/チュートリアル：三目並べ",
	component: TicTacToe,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: {},
} satisfies Meta<typeof TicTacToe>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {};
