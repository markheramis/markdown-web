import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import AppLogo from './app-logo';

const folderStructure: NavItem[] = [
    {
        title: 'layout.tsx',
        href: '/layout',
        type: 'file',
    },
    {
        title: 'page.tsx',
        href: '/page',
        type: 'file',
    },
    {
        title: 'components',
        items: [
            { title: 'Navbar.tsx', href: '/components/Navbar', type: 'file' },
            {
                title: 'Sidebar',
                items: [
                    { title: 'SidebarItem.tsx', href: '/components/Sidebar/SidebarItem', type: 'file' },
                    { title: 'CollapsibleItem.tsx', href: '/components/Sidebar/CollapsibleItem', type: 'file' },
                    { title: 'index.ts', href: '/components/Sidebar/index', type: 'file' },
                ],
                type: 'folder',
            },
        ],
        type: 'folder',
    },
    {
        title: 'hooks',
        items: [{ title: 'useSidebar.ts', href: '/hooks/useSidebar', type: 'file' }],
        type: 'folder',
    },
    {
        title: 'styles',
        items: [{ title: 'globals.css', href: '/styles/globals', type: 'file' }],
        type: 'folder',
    },
    {
        title: 'utils',
        items: [{ title: 'helpers.ts', href: '/utils/helpers', type: 'file' }],
        type: 'folder',
    },
    {
        title: 'folders',
        items: [
            {
                title: 'Projects',
                items: [
                    {
                        title: 'ProjectA',
                        items: [{ title: 'page.tsx', href: '/folders/Projects/ProjectA/page', type: 'file' }],
                        type: 'folder',
                    },
                    {
                        title: 'ProjectB',
                        items: [
                            { title: 'page.tsx', href: '/folders/Projects/ProjectB/page', type: 'file' },
                            {
                                title: 'Notes',
                                items: [{ title: 'notes.md', href: '/folders/Projects/ProjectB/Notes/notes', type: 'file' }],
                                type: 'folder',
                            },
                        ],
                        type: 'folder',
                    },
                ],
                type: 'folder',
            },
            {
                title: 'Shared',
                items: [{ title: 'Readme.md', href: '/folders/Shared/Readme', type: 'file' }],
                type: 'folder',
            },
        ],
        type: 'folder',
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        type: 'file',
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits',
        type: 'file',
    },
];

export function AppSidebar() {
    return (
        <Sidebar className="p-0" collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent className="ml-0 p-0">
                <NavMain items={folderStructure} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
