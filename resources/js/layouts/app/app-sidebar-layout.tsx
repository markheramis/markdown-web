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

    // Collapse when dragged below a certain threshold
    const handleResize = (size: number) => {
        // Collapse if user drags below 4%
        if (size <= 4 && sidebarRef.current) {
            sidebarRef.current.collapse();
        }
    };

    return (
        <AppShell variant="sidebar">
            <ResizablePanelGroup direction="horizontal" className="overflow-y-hidden rounded-lg border">
                <MiniSidebarTemplate />

                <ResizablePanel
                    ref={sidebarRef}
                    minSize={6}
                    collapsedSize={0}
                    collapsible
                    defaultSize={20}
                    onResize={handleResize}
                    className="text-muted-foreground flex min-h-screen flex-row"
                >
                    <AppSidebar documentTree={documentTree} />
                </ResizablePanel>

                <ResizableHandle />

                <ResizablePanel minSize={30} defaultSize={80}>
                    <AppContent variant="sidebar" className="text-muted-foreground flex flex-row">
                        <div className="">
                            <AppSidebarHeader breadcrumbs={breadcrumbs} />
                            {children}
                        </div>
                        <div className="">
                            <RightSidebarTemplate />
                        </div>
                    </AppContent>
                </ResizablePanel>

                <ResizableHandle />
            </ResizablePanelGroup>
        </AppShell>
    );
}
