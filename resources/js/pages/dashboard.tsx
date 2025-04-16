import { generateBreadcrumbs } from '@/hooks/use-generate-breadcrumbs';
import AppLayout from '@/layouts/app-layout';
import { DocumentTree } from '@/types';
import { Head, usePage } from '@inertiajs/react';

export default function Dashboard() {
    // const [selectedDoc, setSelectedDoc] = useState<DocumentTree | null>(null);
    const { props } = usePage();
    const documentTree = props.documentTree as DocumentTree[];
    const document = props.document as DocumentTree;
    const breadcrumbs = generateBreadcrumbs(documentTree, document);
    return (
        <AppLayout documentTree={documentTree} breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex max-h-[calc(100vh-28px)] w-full flex-col gap-y-5 overflow-y-auto text-sm">
                <div className="flex flex-1 flex-col gap-4 rounded-xl px-20 py-5">
                    {/* <h1 className="text-lg">Title 1</h1> */}
                    {document.content}
                </div>
            </div>
        </AppLayout>
    );
}
