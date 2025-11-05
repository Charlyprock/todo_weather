import * as React from "react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"

export const description = "Donnet representant le nombre de tache par status"

const chartData = [
  { status: "Attente", nbr: 275, fill: "var(--color-attente)" },
  { status: "En cour", nbr: 200, fill: "var(--color-en_cour)" },
  { status: "Terminer", nbr: 287, fill: "var(--color-terminer)" },
]

const chartConfig = {
  attente: {
    label: "Attente",
    color: "var(--chart-1)",
  },
  en_cour: {
    label: "En cour",
    color: "var(--chart-2)",
  },
  terminer: {
    label: "Terminer",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

export function ChartAllTodo() {
  const totalTodo = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.nbr, 0)
  }, [])

  return (
    <Card className="flex flex-col shadow-none w-full">
      <CardHeader className="items-center pb-0">
        <CardTitle>Toutes les taches par status</CardTitle>
        <CardDescription>Les taches total, de la creation jusqu'a present.</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="nbr"
              nameKey="status"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalTodo.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Taches
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
            <ChartLegend content={<ChartLegendContent nameKey="label" />} />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
