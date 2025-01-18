import { CustomErrorType } from "../types/types";

type CustomErrorProps = {
  error: CustomErrorType;
};

const Error: React.FC<CustomErrorProps> = ({ error }) => {
  return (
    <div>
      Oops, something wrong happened! - {error.code}: {error.message}
    </div>
  );
};

export default Error;
