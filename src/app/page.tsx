import { Sidebar, SidebarHeader, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Home() {
  return (
<SidebarProvider className="overflow-y-hidden">
<Sidebar collapsible="icon" className="overflow-hidden">
  <SidebarHeader className="flex-row">
    <SidebarTrigger />
      <span className="text-xl text-nowrap">Workman</span>
  </SidebarHeader>

</Sidebar>
</SidebarProvider>  

);}