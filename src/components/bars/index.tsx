"use client";
import { cn } from "@/lib/utils";
export const CustomButton2 = ({
  cta,
  className,
}: {
  cta: string;
  className?: string;
  f?: () => unknown;
}) => {
  return (
    <button
      onClick={() => {
        console.log(cta);
      }}
      className={cn(
        "px-6 py-2 border border-neutral-800 bg-black text-white rounded-md hover:bg-neutral-800 transition duration-300",
      )}
    >
      {cta}
    </button>
  );
};
export const NavBar = () => {
  return (
    <div className="max-w-2xl w-full fixed top-0 mt-4">
      <div className="flex flex-row h-16 items-center justify-center">
        <div className="items-center justify-center p-2 border border-neutral-300 flex flex-row gap-4 rounded-md">
          <CustomButton2 cta="Messages" />
          <CustomButton2 cta="Images" />
          <CustomButton2 cta="Settings" />
        </div>
      </div>
    </div>
  );
};
