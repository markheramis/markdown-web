import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import { AppSidebar } from '@/components/app-sidebar';
import { AppSidebarHeader } from '@/components/app-sidebar-header';
import MiniSidebarTemplate from '@/components/mini-sidebar';
import RightSidebarTemplate from '@/components/right-sidebar';
import { type BreadcrumbItem } from '@/types';
import { type PropsWithChildren } from 'react';

export default function AppSidebarLayout({ children, breadcrumbs = [] }: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
    return (
        <AppShell variant="sidebar">
            <div className="flex min-h-screen flex-row text-muted-foreground">
                <aside className="">
                    <MiniSidebarTemplate />
                </aside>
                <aside className="">
                    <AppSidebar />
                </aside>
            </div>
            <AppContent variant="sidebar" className="text-muted-foreground">
                <AppSidebarHeader breadcrumbs={breadcrumbs} />
                {children}
            </AppContent>
            <aside className="">
                <RightSidebarTemplate />
            </aside>
        </AppShell>
    );
}
