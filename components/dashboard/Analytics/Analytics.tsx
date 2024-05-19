import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TransactionsList from "../TransactionsList";
import BarChartCard from "./BarChartCard";

export default function Analytics() {
  return (
    <Tabs defaultValue="week">
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="week">Week</TabsTrigger>
          <TabsTrigger value="month">Month</TabsTrigger>
          <TabsTrigger value="year">Year</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="week">
        <h2>Week Analytics</h2>
        <TransactionsList />
      </TabsContent>
      <TabsContent value="month">
        <h2>Month Analytics</h2>
        <TransactionsList />
      </TabsContent>
      <TabsContent value="year">
        <BarChartCard />
      </TabsContent>
    </Tabs>
  );
}
