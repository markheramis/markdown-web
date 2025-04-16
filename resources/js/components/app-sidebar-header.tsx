import { Breadcrumbs } from '@/components/breadcrumbs';
// import { SidebarTrigger } from '@/components/ui/sidebar';
import { type BreadcrumbItem as BreadcrumbItemType } from '@/types';

export function AppSidebarHeader({ breadcrumbs = [] }: { breadcrumbs?: BreadcrumbItemType[] }) {
    return (
        <header className="h-10 flex items-center border-b ">
            <div className="grid grid-cols-1 overflow-x-auto items-center">
                {/* <SidebarTrigger className="-ml-1" /> */}
                <Breadcrumbs a={breadcrumbs} />
            </div>
        </header>
    );
}
