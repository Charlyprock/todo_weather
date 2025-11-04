"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export const description = "Evolution des taches."

const chartData = [
  { date: "2024-04-01", attente: 222, en_cour: 150, terminer: 420 },
  { date: "2024-04-02", attente: 97, en_cour: 180, terminer: 420 },
  { date: "2024-04-03", attente: 167, en_cour: 120, terminer: 420 },
  { date: "2024-04-04", attente: 242, en_cour: 260, terminer: 420 },
  { date: "2024-04-05", attente: 373, en_cour: 290, terminer: 420 },
  { date: "2024-04-06", attente: 301, en_cour: 340, terminer: 420 },
  { date: "2024-04-07", attente: 245, en_cour: 180, terminer: 420 },
  { date: "2024-04-08", attente: 409, en_cour: 320, terminer: 420 },
  { date: "2024-04-09", attente: 59, en_cour: 110, terminer: 420 },
  { date: "2024-04-10", attente: 261, en_cour: 190, terminer: 420 },
  { date: "2024-04-11", attente: 327, en_cour: 350, terminer: 420 },
  { date: "2024-04-12", attente: 292, en_cour: 210, terminer: 420 },
  { date: "2024-04-13", attente: 342, en_cour: 380, terminer: 420 },
  { date: "2024-04-14", attente: 137, en_cour: 220, terminer: 420 },
  { date: "2024-04-15", attente: 120, en_cour: 170, terminer: 420 },
  { date: "2024-04-16", attente: 138, en_cour: 190, terminer: 420 },
  { date: "2024-04-17", attente: 446, en_cour: 360, terminer: 420 },
  { date: "2024-04-18", attente: 364, en_cour: 410, terminer: 420 },
  { date: "2024-04-19", attente: 243, en_cour: 180, terminer: 420 },
  { date: "2024-04-20", attente: 89, en_cour: 150, terminer: 420 },
  { date: "2024-04-21", attente: 137, en_cour: 200, terminer: 420 },
  { date: "2024-04-22", attente: 224, en_cour: 170, terminer: 420 },
  { date: "2024-04-23", attente: 138, en_cour: 230, terminer: 420 },
  { date: "2024-04-24", attente: 387, en_cour: 290, terminer: 420 },
  { date: "2024-04-25", attente: 215, en_cour: 250, terminer: 420 },
  { date: "2024-04-26", attente: 75, en_cour: 130, terminer: 420 },
  { date: "2024-04-27", attente: 383, en_cour: 420, terminer: 420 },
  { date: "2024-04-28", attente: 122, en_cour: 180, terminer: 420 },
  { date: "2024-04-29", attente: 315, en_cour: 240, terminer: 420 },
  { date: "2024-04-30", attente: 454, en_cour: 380, terminer: 420 },
  { date: "2024-05-01", attente: 165, en_cour: 220, terminer: 420 },
  { date: "2024-05-02", attente: 293, en_cour: 310, terminer: 420 },
  { date: "2024-05-03", attente: 247, en_cour: 190, terminer: 420 },
  { date: "2024-05-04", attente: 385, en_cour: 420, terminer: 420 },
  { date: "2024-05-05", attente: 481, en_cour: 390, terminer: 420 },
  { date: "2024-05-06", attente: 498, en_cour: 520, terminer: 420 },
  { date: "2024-05-07", attente: 388, en_cour: 300, terminer: 420 },
  { date: "2024-05-08", attente: 149, en_cour: 210, terminer: 420 },
  { date: "2024-05-09", attente: 227, en_cour: 180, terminer: 420 },
  { date: "2024-05-10", attente: 293, en_cour: 330, terminer: 420 },
  { date: "2024-05-11", attente: 335, en_cour: 270, terminer: 420 },
  { date: "2024-05-12", attente: 197, en_cour: 240, terminer: 420 },
  { date: "2024-05-13", attente: 197, en_cour: 160, terminer: 420 },
  { date: "2024-05-14", attente: 448, en_cour: 490, terminer: 420 },
  { date: "2024-05-15", attente: 473, en_cour: 380, terminer: 420 },
  { date: "2024-05-16", attente: 338, en_cour: 400, terminer: 420 },
  { date: "2024-05-17", attente: 499, en_cour: 420, terminer: 420 },
  { date: "2024-05-18", attente: 315, en_cour: 350, terminer: 420 },
  { date: "2024-05-19", attente: 235, en_cour: 180, terminer: 420 },
  { date: "2024-05-20", attente: 177, en_cour: 230, terminer: 420 },
  { date: "2024-05-21", attente: 82, en_cour: 140, terminer: 420 },
  { date: "2024-05-22", attente: 81, en_cour: 120, terminer: 420 },
  { date: "2024-05-23", attente: 252, en_cour: 290, terminer: 420 },
  { date: "2024-05-24", attente: 294, en_cour: 220, terminer: 420 },
  { date: "2024-05-25", attente: 201, en_cour: 250, terminer: 420 },
  { date: "2024-05-26", attente: 213, en_cour: 170, terminer: 420 },
  { date: "2024-05-27", attente: 420, en_cour: 460, terminer: 420 },
  { date: "2024-05-28", attente: 233, en_cour: 190, terminer: 420 },
  { date: "2024-05-29", attente: 78, en_cour: 130, terminer: 420 },
  { date: "2024-05-30", attente: 340, en_cour: 280, terminer: 420 },
  { date: "2024-05-31", attente: 178, en_cour: 230, terminer: 420 },
  { date: "2024-06-01", attente: 178, en_cour: 200, terminer: 420 },
  { date: "2024-06-02", attente: 470, en_cour: 410, terminer: 420 },
  { date: "2024-06-03", attente: 103, en_cour: 160, terminer: 420 },
  { date: "2024-06-04", attente: 439, en_cour: 380, terminer: 420 },
  { date: "2024-06-05", attente: 88, en_cour: 140, terminer: 420 },
  { date: "2024-06-06", attente: 294, en_cour: 250, terminer: 420 },
  { date: "2024-06-07", attente: 323, en_cour: 370, terminer: 420 },
  { date: "2024-06-08", attente: 385, en_cour: 320, terminer: 420 },
  { date: "2024-06-09", attente: 438, en_cour: 480, terminer: 420 },
  { date: "2024-06-10", attente: 155, en_cour: 200, terminer: 420 },
  { date: "2024-06-11", attente: 92, en_cour: 150, terminer: 420 },
  { date: "2024-06-12", attente: 492, en_cour: 420, terminer: 420 },
  { date: "2024-06-13", attente: 81, en_cour: 130, terminer: 420 },
  { date: "2024-06-14", attente: 426, en_cour: 380, terminer: 420 },
  { date: "2024-06-15", attente: 307, en_cour: 350, terminer: 420 },
  { date: "2024-06-16", attente: 371, en_cour: 310, terminer: 420 },
  { date: "2024-06-17", attente: 475, en_cour: 520, terminer: 420 },
  { date: "2024-06-18", attente: 107, en_cour: 170, terminer: 420 },
  { date: "2024-06-19", attente: 341, en_cour: 290, terminer: 420 },
  { date: "2024-06-20", attente: 408, en_cour: 450, terminer: 420 },
  { date: "2024-06-21", attente: 169, en_cour: 210, terminer: 420 },
  { date: "2024-06-22", attente: 317, en_cour: 270, terminer: 420 },
  { date: "2024-06-23", attente: 480, en_cour: 530, terminer: 420 },
  { date: "2024-06-24", attente: 132, en_cour: 180, terminer: 420 },
  { date: "2024-06-25", attente: 141, en_cour: 190, terminer: 420 },
  { date: "2024-06-26", attente: 434, en_cour: 380, terminer: 420 },
  { date: "2024-06-27", attente: 448, en_cour: 490, terminer: 420 },
  { date: "2024-06-28", attente: 149, en_cour: 200, terminer: 420 },
  { date: "2024-06-29", attente: 103, en_cour: 160, terminer: 420 },
  { date: "2024-06-30", attente: 446, en_cour: 400, terminer: 420 },
]

const chartConfig = {
  attente: {
    label: "En Attente",
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

export function ChartEvolutionTodo() {
  const [timeRange, setTimeRange] = React.useState("90d")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="pt-0 shadow-none">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Evolution des taches</CardTitle>
          <CardDescription>
            Visualiser l'evolution des taches ces 3 dernies mois.
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Dernier 3 mois
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Dernier 30 jours
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Dernier 7 jours
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillAttente" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-attente)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-attente)"
                  stopOpacity={0.1}
                />
              </linearGradient>

              <linearGradient id="fillEnCour" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-en_cour)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-en_cour)"
                  stopOpacity={0.1}
                />
              </linearGradient>

              <linearGradient id="fillTerminer" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-terminer)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-terminer)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="attente"
              type="natural"
              fill="url(#fillAttente)"
              stroke="var(--color-attente)"
              stackId="a"
            />
            <Area
              dataKey="en_cour"
              type="natural"
              fill="url(#fillEnCour)"
              stroke="var(--color-en_cour)"
              stackId="a"
            />
            <Area
              dataKey="terminer"
              type="natural"
              fill="url(#fillTerminer)"
              stroke="var(--color-terminer)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
