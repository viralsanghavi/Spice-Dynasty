import {Input} from "@mantine/core";
import React, {useId} from "react";

const CInput = (props) => {
  const id = useId();
  console.log(id);
  return (
    <Input.Wrapper id={id} required withAsterisk {...props}>
      <Input id={id} />
    </Input.Wrapper>
  );
};

export default CInput;
