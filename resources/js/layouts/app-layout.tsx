import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import { DocumentTree, type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';

interface AppLayoutProps {
    children: ReactNode;
    documentTree: DocumentTree[];
    breadcrumbs?: BreadcrumbItem[];
}

export default ({ children, documentTree, breadcrumbs, ...props }: AppLayoutProps) => (
    <AppLayoutTemplate documentTree={documentTree} breadcrumbs={breadcrumbs} {...props}>
        {children}
    </AppLayoutTemplate>
);
