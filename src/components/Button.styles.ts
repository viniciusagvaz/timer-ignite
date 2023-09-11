import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "danger" | "success";

interface ButtonContainerProps {
	variant: ButtonVariant;
}

const buttonVariants = {
	primary: "purple",
	secondary: "orange",
	danger: "red",
	success: "green",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
	width: 100px;
	height: 40px;

	${props =>
		css`
			background-color: ${buttonVariants[props.variant]};
		`}
`;

// button {
//   width: 100px;
//   height: 40px;
// }

// .primary {
//   background: purple;
// }

// .secondary {
//   background: green;
// }

// .danger {
//   background: red
// }

// .success {
//   background: green;
// }
