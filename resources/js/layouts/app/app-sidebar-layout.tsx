import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import { AppSidebar } from '@/components/app-sidebar';
import { AppSidebarHeader } from '@/components/app-sidebar-header';
import MiniSidebarTemplate from '@/components/mini-sidebar';
import RightSidebarTemplate from '@/components/right-sidebar';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { DocumentTree, type BreadcrumbItem } from '@/types';
import { useRef, type PropsWithChildren } from 'react';
import { ImperativePanelHandle } from 'react-resizable-panels';

export default function AppSidebarLayout({
    children,
    documentTree = [],
    breadcrumbs = [],
}: PropsWithChildren<{ documentTree?: DocumentTree[]; breadcrumbs?: BreadcrumbItem[] }>) {
    const sidebarRef = useRef<ImperativePanelHandle>(null);

    const handleResize = (size: number) => {
        if (size <= 4 && sidebarRef.current) {
            sidebarRef.current.collapse();
        }
    };

    return (
        <AppShell variant="sidebar">
            <ResizablePanelGroup direction="horizontal" autoSaveId="sidebar-layout" className="overflow-y-hidden rounded-lg border">
                <MiniSidebarTemplate />

                <ResizablePanel
                    ref={sidebarRef}
                    minSize={8}
                    collapsedSize={0}
                    defaultSize={20}
                    onResize={handleResize}
                    collapsible
                    className="text-muted-foreground flex min-h-screen flex-row"
                >
                    <AppSidebar documentTree={documentTree} />
                </ResizablePanel>

                <ResizableHandle />

                <ResizablePanel className="flex-1" minSize={30}>
                    <AppContent variant="sidebar" className="text-muted-foreground flex flex-row">
                        <div className="flex-1">
                            <AppSidebarHeader breadcrumbs={breadcrumbs} />
                            {children}
                        </div>
                        <div className="relative min-w-24">
                            <RightSidebarTemplate />
                        </div>
                    </AppContent>
                </ResizablePanel>

                <ResizableHandle />
            </ResizablePanelGroup>
        </AppShell>
    );
}
