import ErrorBar from "../common/ErrorBar";
import Loading from "../common/Loading";

function withLoadingAndError<P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P & { error?: string | null; loading: boolean }> {
  return ({
    error,
    loading,
    ...props
  }: P & { error?: string | null; loading: boolean }) => {
    if (error) return <ErrorBar error={error} />;
    if (loading) return <Loading />;

    return <WrappedComponent {...(props as P)} />;
  };
}

export default withLoadingAndError;
