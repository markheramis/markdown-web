import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { ArrowUpNarrowWide, ChevronsDownUp, FolderDown, SquarePen, TvMinimal } from 'lucide-react';

const folderStructure: NavItem[] = [
    {
        title: 'layout.tsx',
        href: '',
        type: 'file',
    },
    {
        title: 'page.tsx',
        href: '',
        type: 'file',
    },
    {
        title: 'components',
        items: [
            { title: 'Navbar.tsx', href: '', type: 'file' },
            {
                title: 'Sidebar',
                items: [
                    { title: 'SidebarItem.tsx', href: '', type: 'file' },
                    { title: 'CollapsibleItem.tsx', href: '', type: 'file' },
                    { title: 'index.ts', href: '', type: 'file' },
                ],
                type: 'folder',
            },
        ],
        type: 'folder',
    },
    {
        title: 'components',
        items: [
            { title: 'Navbar.tsx', href: '', type: 'file' },
            {
                title: 'Sidebar',
                items: [
                    { title: 'SidebarItem.tsx', href: '', type: 'file' },
                    { title: 'CollapsibleItem.tsx', href: '', type: 'file' },
                    { title: 'index.ts', href: '', type: 'file' },
                ],
                type: 'folder',
            },
        ],
        type: 'folder',
    },
    {
        title: 'components',
        items: [
            { title: 'Navbar.tsx', href: '', type: 'file' },
            {
                title: 'Sidebar',
                items: [
                    { title: 'SidebarItem.tsx', href: '', type: 'file' },
                    { title: 'CollapsibleItem.tsx', href: '', type: 'file' },
                    { title: 'index.ts', href: '', type: 'file' },
                ],
                type: 'folder',
            },
        ],
        type: 'folder',
    },
    {
        title: 'components',
        items: [
            { title: 'Navbar.tsx', href: '', type: 'file' },
            {
                title: 'Sidebar',
                items: [
                    { title: 'SidebarItem.tsx', href: '', type: 'file' },
                    { title: 'CollapsibleItem.tsx', href: '', type: 'file' },
                    { title: 'index.ts', href: '', type: 'file' },
                ],
                type: 'folder',
            },
        ],
        type: 'folder',
    },
    {
        title: 'components',
        items: [
            { title: 'Navbar.tsx', href: '', type: 'file' },
            {
                title: 'Sidebar',
                items: [
                    { title: 'SidebarItem.tsx', href: '', type: 'file' },
                    { title: 'CollapsibleItem.tsx', href: '', type: 'file' },
                    { title: 'index.ts', href: '', type: 'file' },
                ],
                type: 'folder',
            },
        ],
        type: 'folder',
    },
    {
        title: 'components',
        items: [
            { title: 'Navbar.tsx', href: '', type: 'file' },
            {
                title: 'Sidebar',
                items: [
                    { title: 'SidebarItem.tsx', href: '', type: 'file' },
                    { title: 'CollapsibleItem.tsx', href: '', type: 'file' },
                    { title: 'index.ts', href: '', type: 'file' },
                ],
                type: 'folder',
            },
        ],
        type: 'folder',
    },
    {
        title: 'hooks',
        items: [{ title: 'useSidebar.ts', href: '', type: 'file' }],
        type: 'folder',
    },
    {
        title: 'styles',
        items: [{ title: 'globals.css', href: '', type: 'file' }],
        type: 'folder',
    },
    {
        title: 'utils',
        items: [{ title: 'helpers.ts', href: '', type: 'file' }],
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
                        items: [{ title: 'page.tsx', href: '', type: 'file' }],
                        type: 'folder',
                    },
                    {
                        title: 'ProjectB',
                        items: [
                            { title: 'page.tsx', href: '', type: 'file' },
                            {
                                title: 'Notes',
                                items: [{ title: 'notes.md', href: '', type: 'file' }],
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
                items: [{ title: 'Readme.md', href: '', type: 'file' }],
                type: 'folder',
            },
        ],
        type: 'folder',
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: '',
        type: 'file',
    },
    {
        title: 'Documentation',
        href: '',
        type: 'file',
    },
];

const leftSideBarTopIcons = [
    {
        title: 'Repository',
        href: '',
        icon: SquarePen,
    },
    {
        title: 'Documentation',
        href: '',
        icon: FolderDown,
    },
    {
        title: 'Documentation',
        href: '',
        icon: ArrowUpNarrowWide,
    },
    {
        title: 'Documentation',
        href: '',
        icon: TvMinimal,
    },
    {
        title: 'Documentation',
        href: '',
        icon: ChevronsDownUp,
    },
];

export function AppSidebar() {
    return (
        <Sidebar className="group left-12 border-r bg-none p-0 text-neutral-400" collapsible="offcanvas" variant="inset">
            <div className="min-h-screen">
                <SidebarHeader className="h-5 p-0">
                    <SidebarMenu className="hidden w-full flex-row items-center justify-end gap-x-2 py-0.5 pr-2 group-hover:flex">
                        {leftSideBarTopIcons.length > 0 &&
                            leftSideBarTopIcons.map((item, index) => (
                                <SidebarMenuItem key={index} className="p-0">
                                    <Link
                                        href={item.href || '#'}
                                        className="z-10 rounded-none bg-transparent p-0 py-0 hover:text-black hover:brightness-120 dark:hover:text-white"
                                        prefetch
                                    >
                                        <item.icon className="h-4 w-4" />
                                    </Link>
                                </SidebarMenuItem>
                            ))}
                    </SidebarMenu>
                </SidebarHeader>
                <div className="max-h-screen overflow-auto text-neutral-400">
                    <SidebarContent className="ml-0 p-0">
                        <NavMain items={folderStructure} />
                    </SidebarContent>
                    <SidebarFooter className="hidden">
                        <NavFooter items={footerNavItems} className="mt-auto" />
                        <NavUser />
                    </SidebarFooter>
                </div>
            </div>
        </Sidebar>
    );
}
