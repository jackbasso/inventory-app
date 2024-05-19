import { Button } from "@/components/ui/button";
import AnalyticsCard from "./Analytics/AnalyticsCard";
import TransactionsList from "./TransactionsList";
import Analytics from "./Analytics/Analytics";

export function Dashboard() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <AnalyticsCard />
        <AnalyticsCard />
        <AnalyticsCard />
        <AnalyticsCard />
      </div>
      <div className="grid gap-4 md:gap-8 grid-cols-1">
        <Analytics />
      </div>
    </main>
  );
}
