import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  LucideArrowDown,
  LucideArrowUp,
  LucideMoreHorizontal,
  LucidePin,
  LucideSettings,
  LucideShare2,
  LucideTrash,
  LucideTriangleAlert,
} from "lucide-react";

export function Statistic01(){


  const stats = [
    {
      title: "All Orders",
      value: 122380,
      delta: 15.1,
      lastMonth: 105922,
      positive: true,
      prefix: "",
      suffix: "",
    },
    {
      title: "Order Created",
      value: 1902380,
      delta: -2.0,
      lastMonth: 2002098,
      positive: false,
      prefix: "",
      suffix: "",
    },
    {
      title: "Organic Sales",
      value: 98100000,
      delta: 0.4,
      lastMonth: 97800000,
      positive: true,
      prefix: "$",
      suffix: "M",
      format: (v: number) => `$${(v / 1_000_000).toFixed(1)}M`,
      lastFormat: (v: number) => `$${(v / 1_000_000).toFixed(1)}M`,
    },
    {
      title: "Active Users",
      value: 48210,
      delta: 3.7,
      lastMonth: 46480,
      positive: true,
      prefix: "",
      suffix: "",
    },
  ];

  function formatNumber(n: number) {
    if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
    if (n >= 1_000) return n.toLocaleString();
    return n.toString();
  }

  return (

  <div className="*:not-first:mt-2">
    <div className="grid grow grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
      
        <Card className="py-4 shadow-none" key={index}>
          <CardHeader className="flex items-center justify-between border-0">
            <CardTitle className="text-muted-foreground text-sm font-medium">
              { stat.title }
            </CardTitle>
            <div className="ml-auto">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="-me-1.5">
                    <LucideMoreHorizontal />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" side="bottom">
                  <DropdownMenuItem>
                    <LucideSettings />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LucideTriangleAlert />
                    Add Alert
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LucidePin />
                    Pin to Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LucideShare2 />
                    Share
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem variant="destructive">
                    <LucideTrash />
                    Remove
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent className="space-y-2.5">
            <div className="flex items-center gap-2.5">
              <span className="text-foreground text-2xl font-medium tracking-tight">
                {
                  stat.format
                    ? stat.format(stat.value)
                    : stat.prefix + formatNumber(stat.value) + stat.suffix
                }
              </span>
              <Badge variant={stat.positive ? 'default' : 'destructive'}>
                {
                  stat.delta > 0 ? <LucideArrowUp className="size-4" />
                  : <LucideArrowDown className="size-4" />
                }
                
                { stat.delta }%
              </Badge>
            </div>
            <div className="text-muted-foreground mt-2 border-t pt-2.5 text-xs">
              Vs last month:
              <span className="text-foreground font-medium">
                {
                  stat.lastFormat
                    ? stat.lastFormat(stat.lastMonth)
                    : stat.prefix + formatNumber(stat.lastMonth) + stat.suffix
                }
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>

    )
}