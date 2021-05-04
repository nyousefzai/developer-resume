import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const PageWrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  background-color: ${themeGet("colors.white", "#ffffff")};
  padding: 140px 70px 40px;

  @media only screen and (max-width: 990px) {
    padding: 100px 0 60px;
  }

  @media only screen and (min-width: 991px) and (max-width: 1280px) {
    padding: 130px 15px 60px;
  }
`;
