interface EmptyStateProps {
  message?: string;
}

function EmptyState({ message = "No data found." }: EmptyStateProps) {
  return <p>{message}</p>;
}

export default EmptyState;
