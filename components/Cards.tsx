import { Card } from "flowbite-react";

const Cards: React.FC = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {Array(8)
        .fill(0)
        .map((_, index) => {
          return (
            <Card key={index}>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Card {index + 1}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Card body {index + 1}
              </p>
            </Card>
          );
        })}
    </div>
  );
};

export default Cards;
