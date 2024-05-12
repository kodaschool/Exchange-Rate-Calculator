interface Props {
  children: string;
  className?: string;
}
export default function Label({ children, className }: Props) {
  return (
    <label
      className={`block my-4 font-medium text-[14px] tracking-tight ${className}`}
    >
      {children}
    </label>
  );
}
