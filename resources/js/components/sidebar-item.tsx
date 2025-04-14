import { NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from './ui/sidebar';

interface IProps {
    item: NavItem;
}

const SidebarItem = ({ item }: IProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {item.type === 'file' ? (
                <SidebarMenuButton asChild isActive={item.isActive} className="m-0 h-4.5 gap-0 rounded-none">
                    <Link href={item.href || '#'}>{item.title}</Link>
                </SidebarMenuButton>
            ) : (
                <Collapsible key={item.title} title={item.title} defaultOpen={isOpen} onOpenChange={() => setIsOpen(!isOpen)} className="group gap-0">
                    <SidebarGroup className="p-0">
                        <SidebarGroupLabel
                            asChild
                            className="group/label hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-none text-sm"
                        >
                            <CollapsibleTrigger className="h-auto gap-0">
                                <ChevronRight className={`transition-transform ${isOpen ? 'rotate-90' : 'rotate-0'}`} />
                                {item.title}
                            </CollapsibleTrigger>
                        </SidebarGroupLabel>
                        <CollapsibleContent className="gap-0">
                            <SidebarGroupContent className="gap-0">
                                <SidebarMenu className="gap-0">
                                    {item.items?.map((childItem, childindex) => (
                                        <SidebarMenuItem className="pl-5" key={childindex}>
                                            <SidebarItem item={childItem} />
                                        </SidebarMenuItem>
                                    ))}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </CollapsibleContent>
                    </SidebarGroup>
                </Collapsible>
            )}
        </>
    );
};

export default SidebarItem;
