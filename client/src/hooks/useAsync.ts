import { useState } from "react";
import { delay } from "../utils/delay";
import { AxiosError } from "axios";

interface AsyncState {
  loading: boolean;
  error: string | null;
}

interface ErrorResponseData {
  error: string;
  message: string;
  statusCode: number;
}

export function useAsync<T>(asyncFunction: () => Promise<T>) {
  const [state, setState] = useState<AsyncState>({
    loading: false,
    error: null,
  });

  async function execute() {
    setState({ loading: true, error: null });

    try {
      await asyncFunction();
    } catch (err: any) {
      setState({
        loading: false,
        error:
          (err as AxiosError<ErrorResponseData>)?.response?.data?.message ||
          "An unexpected error occurred.",
      });
    } finally {
      setState((prev) => ({ ...prev, loading: false }));
    }
  }

  return { ...state, execute };
}
