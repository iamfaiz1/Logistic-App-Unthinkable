import { useEffect } from 'react'
import AgentChart from '../../components/dashboard/AgentChart'
import DeliveryChart from '../../components/dashboard/DeliveryChart'
import OrderTrendChart from '../../components/dashboard/OrderTrendChart'
import RecentOrdersTable from '../../components/dashboard/RecentOrdersTable'
import StatsCards from '../../components/dashboard/StatsCards'
import ErrorState from '../../components/common/ErrorState'
import Loader from '../../components/common/Loader'
import PageHeader from '../../components/common/PageHeader'
import { useDashboardStore } from '../../store/dashboardStore'

export default function AdminDashboardPage() {
  const { summary, isLoading, error, fetchSummary } = useDashboardStore()

  useEffect(() => {
    fetchSummary()
  }, [fetchSummary])

  return (
    <>
      <PageHeader eyebrow="Admin" title="Delivery operations" description="Monitor fulfillment health, agent capacity, order movement, and SLA exceptions." />
      {error && <ErrorState message={error} />}
      {isLoading ? <Loader /> : <StatsCards summary={summary} />}
      <section className="grid gap-6 xl:grid-cols-3">
        <DeliveryChart data={summary?.statusBreakdown || []} />
        <OrderTrendChart data={summary?.orderTrends || []} />
        <AgentChart data={summary?.agentUtilization || []} />
      </section>
      <RecentOrdersTable orders={summary?.recentOrders || []} />
    </>
  )
}
