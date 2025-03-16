import { FC } from "react";
import { FormattedMessage, useIntl } from "react-intl";

interface FormatMessageProps {
  id: string;
  values?: Record<string, any>;
  className?: string;
}

const FormatMessage: FC<FormatMessageProps> = ({
  id,
  values,
  className = "",
}) => {
  return (
    <span className={className}>
      <FormattedMessage id={id} values={values} />
    </span>
  );
};

// Utility function to use formatMessage directly
export const useFormatMessage = () => {
  const { formatMessage } = useIntl();
  return (id: string, values?: Record<string, any>) =>
    formatMessage({ id }, values);
};

export default FormatMessage;
