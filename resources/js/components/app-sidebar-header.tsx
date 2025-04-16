import { Breadcrumbs } from '@/components/breadcrumbs';
import { type BreadcrumbItem as BreadcrumbItemType } from '@/types';

export function AppSidebarHeader({ breadcrumbs = [] }: { breadcrumbs?: BreadcrumbItemType[] }) {
    return (
        <header className="h-10 flex items-center border-b ">
            <div className="grid grid-cols-1 overflow-x-auto items-center">
                <Breadcrumbs a={breadcrumbs} />
            </div>
        </header>
    );
}
