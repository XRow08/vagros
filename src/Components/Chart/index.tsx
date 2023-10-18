"use client";
import { Card, AreaChart, Title, Text } from "@tremor/react";

export function Chart() {
  const data = [
    {
      Month: "Jan 21",
      Preço: 2890,
      Floor: 2400,
    },
    {
      Month: "Feb 21",
      Preço: 1890,
      Floor: 1398,
    },
    {
      Month: "Jan 22",
      Preço: 3890,
      Floor: 2980,
    },
  ];

  return (
    <Card className="border-2 bg-white rounded-lg p-4 py-8 shadow-2xl">
      <Title className="text-[25px] font-bold">Hoje</Title>
      <Text>Comparaçao do preço</Text>
      <AreaChart
        data={data}
        categories={["Preço", "Floor"]}
        index="Month"
        colors={["blue", "green"]}
        valueFormatter={(number) =>
          `$ ${Intl.NumberFormat("us").format(number).toString()}`
        }
        yAxisWidth={60}
      />
    </Card>
  );
}
