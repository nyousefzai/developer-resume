// example Button with variants
import styled from "styled-components";
import { variant } from "styled-system";

export const Text = styled("div")(
  variant({
    prop: "size-1",
    variants: {
      big: {
        fontSize: 4,
        lineHeight: "heading",
      },
      small: {
        fontSize: 1,
        lineHeight: "body",
      },
    },
  })
);
