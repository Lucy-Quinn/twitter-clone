export const DialogWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <dialog className="w-full h-full bg-[black] bg-opacity-40 z-50 overflow-auto flex justify-center items-center">
      {children}
    </dialog>
  );
};
