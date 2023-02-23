import * as React from 'react';
import InputUnstyled, { InputUnstyledProps } from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';


const StyledInputElement = styled('input')(
    () => `
  width: 320px;
  height: 300px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 20px;
  border-radius: 20px;
  color: 000;
  &:hover {
    border-color: ##007FFF;
  }
  &:focus {
    border-color: #007FFF;
    outline: 3px solid;
  }
`,
);

const StyledTextareaElement = styled('textarea', {
    shouldForwardProp: (prop) =>
        !['ownerState', 'minRows', 'maxRows'].includes(prop.toString()),
})(
    () => `
  width: 90%;
  height: 300px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 20px;
  border-radius: 12px;
  color: #000;
  background: #fff;
  border: 1px solid;
  &:hover {
    border-color: #007FFF;
  }
  &:focus {
    border-color: #007FFF;
    outline: 3px solid #007FFF;
  }
`,
);

const CodeField = React.forwardRef(function CustomInput(
    props: InputUnstyledProps,
    ref: React.ForwardedRef<HTMLDivElement>,
) {
    return (
        <InputUnstyled
            slots={{ input: StyledInputElement, textarea: StyledTextareaElement }}
            {...props}
            ref={ref}
        />
    );
});

export default CodeField;