import React from "react";

type ItemProps = {
  title: string;
  navigation: React.ReactElement;
  children: React.ReactNode;
};
export const BodyItemComponent = ({
  title,
  navigation,
  children,
}: ItemProps) => {
  return (
    <div className="flex flex-col space-y-1 h-full">
      <div className="flex items-center px-4 py-2 justify-between">
        <h2 className="text-2xl font-bold capitalize">{title}</h2>
        <div>{navigation}</div>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};
