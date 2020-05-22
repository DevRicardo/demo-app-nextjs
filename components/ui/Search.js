import InputText, { InputSubmit } from "./styled/Search";
import { css } from "@emotion/core";

export default function Search() {
  return (
    <form
      css={css`
        position: relative;
      `}
    >
      <InputText type="text" placeholder="Product search" />
      <InputSubmit type="submit">search</InputSubmit>
    </form>
  );
}
