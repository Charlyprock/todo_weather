import { useLocalStorage } from '@/hooks/use-localStorage'
import { ChartEvolutionTodo } from '@/components/chart-evolution-todo'
import { StatisticNomberTodo } from '@/components/statistic-nomber-todo'
import { ChartBarLabelCustom } from '@/components/chart-bar-label-custom'
import { ChartBarMultiple } from '@/components/chart-bar-multiple'
// import { ChartBarStacked } from './components/chart-bar-stacked'
// import { ChartLineInteractive } from '@/components/chart-line-interactive'
import { ChartLineLabel } from '@/components/chart-line-label'
import { ChartPieDonutText } from '@/components/chart-pie-donut-text'

export default function Dashboard() {
    const uL = useLocalStorage()
    console.log("ul dans App", uL)
    return (
        <>
            <StatisticNomberTodo />
            <ChartEvolutionTodo/>
            {/* <ChartLineInteractive/> */}

            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 w-full'>
                <ChartPieDonutText/>
                <ChartBarLabelCustom/>
                <ChartBarMultiple/>
                {/* <ChartBarStacked/> */}
                <ChartLineLabel/>
            </div>
        </>
    )
}
