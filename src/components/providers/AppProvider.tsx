import type { ReactNode } from "react";

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return <>{children}</>;
}

export default AppProvider;
