import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts"

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
} from "@/components/ui/chart"

export const description = "L'evolution des taches"

const chartData = [
  { month: "January", attente: 186, en_cour: 80, terminer: 240 },
  { month: "February", attente: 305, en_cour: 200, terminer: 200 },
  { month: "March", attente: 237, en_cour: 120, terminer: 458 },
  { month: "April", attente: 73, en_cour: 190, terminer: 10 },
  { month: "May", attente: 209, en_cour: 130, terminer: 245 },
  { month: "June", attente: 214, en_cour: 140, terminer: 100 },
]

const chartConfig = {
  attente: {
    label: "Attente",
    color: "var(--chart-1)",
  },
  en_cour: {
    label: "En Cour",
    color: "var(--chart-2)",
  },
  terminer: {
    label: "Terminer",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

export function ChartLineEvolutionTodo() {
  return (
    <Card className="w-full shadow-none">
      <CardHeader>
        <CardTitle>Courbe d'evolution des taches</CardTitle>
        <CardDescription>Janvier - Juin 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey="attente"
              type="natural"
              stroke="var(--color-attente)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-attente)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Line>

            <Line
              dataKey="en_cour"
              type="natural"
              stroke="var(--color-en_cour)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-en_cour)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Line>

            <Line
              dataKey="terminer"
              type="natural"
              stroke="var(--color-terminer)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-terminer)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
