import Access from "@/components/Access";
import Breadcrumbs from "@/components/Breadcrumbs";
import Info from "@/components/Info";
import LeftNavBar from "@/components/LeftNavBar";
import TopNavBar from "@/components/TopNavBar";
import PageTitle from "@/utils/PageTitle";
import UpgradeNewCard from "@/utils/UpgradeNewCard";
import UsageCard from "@/utils/UsageCard";
import TotalIssuesCard from "@/utils/TotalIssuesCard";
import CardWithNumber from "@/utils/CardWithNumber";
import IssuesByPriorityCard from "@/utils/IssuesByPriorityCard";
import Background from "@/utils/Background";


export default function Home() {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'Scans', href: '/Scans' },
    { name: 'Websites', href: '/Websites' },
    { name: 'scan_name', href: 'scan_name' },
    { name: 'Issues', href: 'Issues' },
  ];


  return (
    <>
      <TopNavBar />
      <div className="flex ">

        <LeftNavBar />
        <div className="px-28 py-3 w-full bg-[#F4F3EF] relative overflow-hidden">
          <Background/>
          <div className="flex justify-between items-center mb-10">
            <div className="flex gap-3">
              {
                links.map((link, index) => (
                  <Breadcrumbs key={index} linkTo={link.href} name={link.name} />
                ))
              }
            </div>
            <div className="flex gap-4">
              <UsageCard usage={60} />
              <UpgradeNewCard title="Upgrade Now" iconUrl="/images/upgradeIcon.svg" />
            </div>
          </div>
          <PageTitle title="Title" />
          <div className="w-full">
            <Info
              ScanType="Web"
              date="12 Jan 25"
              webSiteUrl="www.websitename.com"
              isCompleted="Completed"
            />
          </div>
          <Access />

          <div className="mt-10 w-full  flex items-center justify-center gap-3.5">
            <div className="h-full">
              <TotalIssuesCard issues={22} />
            </div>
            <div className="h-full">

              <IssuesByPriorityCard />
            </div>
            <div className="flex flex-col gap-7 h-full items-center justify-center">
              <div className="flex gap-5 ">

                <CardWithNumber title="Critical Issues" number={10} iconUrl="/images/pink!.svg" />
                <CardWithNumber title="High Issues" number={6} iconUrl="/images/pink!.svg" />
              </div>
              <div className="flex gap-5 ">

                <CardWithNumber title="Critical Issues" number={4} iconUrl="/images/yellow.svg" />
                <CardWithNumber title="Low Issues" number={2} iconUrl="/images/green!.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
