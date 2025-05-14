import { DocumentTree } from '@/types';
import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from './ui/sidebar';

interface IProps {
    item: DocumentTree;
}

const SidebarItem = ({ item }: IProps) => {
    const localStorageKey = `sidebar-open-${item.id}`;
    const [isOpen, setIsOpen] = useState<boolean>(() => {
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem(localStorageKey);
            return stored === 'true';
        }
        return false;
    });

    useEffect(() => {
        localStorage.setItem(localStorageKey, String(isOpen));
    }, [localStorageKey, isOpen]);

    return (
        <>
            {item.children.length > 0 ? (
                <Collapsible
                    key={item.title}
                    title={item.title}
                    defaultOpen={isOpen}
                    onOpenChange={(open) => setIsOpen(open)}
                    className="group gap-0"
                >
                    <SidebarGroup className="p-0">
                        <SidebarGroupLabel
                            asChild
                            className="group/label hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-none text-sm"
                        >
                            <CollapsibleTrigger className="h-auto gap-0">
                                <ChevronRight className={`transition-transform ${isOpen ? 'rotate-90' : 'rotate-0'}`} />
                                <p className="truncate">{item.title}</p>
                            </CollapsibleTrigger>
                        </SidebarGroupLabel>
                        <CollapsibleContent className="gap-0">
                            <SidebarGroupContent className="gap-0">
                                <SidebarMenu className="gap-0">
                                    {item.children.map((childItem, index) => (
                                        <SidebarMenuItem className="pl-5" key={index}>
                                            <SidebarItem item={childItem} />
                                        </SidebarMenuItem>
                                    ))}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </CollapsibleContent>
                    </SidebarGroup>
                </Collapsible>
            ) : (
                <SidebarMenuButton asChild className="m-0 h-4.5 gap-0 rounded-none">
                    <Link href={`/dashboard/${item.slug}`} prefetch>
                        <p className="truncate">{item.title}</p>
                    </Link>
                </SidebarMenuButton>
            )}
        </>
    );
};

export default SidebarItem;
