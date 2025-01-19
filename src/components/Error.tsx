import { CustomError } from "../types/types";

type Props = {
  error: CustomError;
};

const Error: React.FC<Props> = ({ error }) => {
  return (
    <div>
      Oops, something wrong happened! - {error.code}: {error.message}
    </div>
  );
};

export default Error;
