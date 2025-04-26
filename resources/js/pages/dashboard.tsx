import { generateBreadcrumbs } from '@/hooks/use-generate-breadcrumbs';
import AppLayout from '@/layouts/app-layout';
import { DocumentTree } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';


export default function Dashboard() {
    const { props } = usePage();
    const documentTree = props.documentTree as DocumentTree[];
    const document = props.document as DocumentTree;
    const breadcrumbs = generateBreadcrumbs(documentTree, document);

    const [isEditable, setIsEditable] = useState(false);
    const [value, setValue] = useState(document?.content || '');
    const divRef = useRef<HTMLDivElement>(null);

    const handleDoubleClick = () => {
        setIsEditable(true);
        setTimeout(() => {
            divRef.current?.focus();
        }, 0);
    };

    const handleBlur = () => {
        setIsEditable(false);
        if (divRef.current) {
            setValue(divRef.current.innerText);
        }
    };

    return (
        <AppLayout documentTree={documentTree} breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex max-h-[calc(100vh-28px)] w-full flex-col gap-y-5 overflow-y-auto" onDoubleClick={handleDoubleClick}>
                <div className="flex flex-1 flex-col gap-4 rounded-xl px-20 py-5">
                    {document ? (
                        <>
                            {isEditable ? (
                                <div
                                    ref={divRef}
                                    contentEditable={isEditable}
                                    suppressContentEditableWarning
                                    onBlur={handleBlur}
                                    onDoubleClick={handleDoubleClick}
                                    className={`text-primary rounded-xl text-left whitespace-pre-wrap transition-all duration-150 ${
                                        isEditable ? 'bg-background border-muted border-none outline-none focus:outline-none' : 'cursor-pointer'
                                    }`}
                                >
                                    {value}
                                </div>
                            ) : (
                                <div className="maw-w-prose text-primary">
                                    <ReactMarkdown
                                        remarkPlugins={[remarkGfm, remarkBreaks]}
                                        components={{
                                            h1: (props) => <h1 className="my-4 text-4xl font-bold" {...props} />,
                                            h2: (props) => <h2 className="my-3 text-3xl font-semibold" {...props} />,
                                            h3: (props) => <h3 className="my-2 text-2xl font-semibold" {...props} />,
                                            h4: (props) => <h4 className="my-2 text-xl font-semibold" {...props} />,
                                            h5: (props) => <h5 className="my-1 text-lg font-semibold" {...props} />,
                                            h6: (props) => <h6 className="my-1 text-base font-semibold" {...props} />,
                                            p: (props) => <p className="my-2 text-base" {...props} />,
                                            a: (props) => (
                                                <a
                                                    className="text-blue-600 underline hover:text-blue-800"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    {...props}
                                                />
                                            ),
                                            ul: (props) => <ul className="my-2 ml-4 list-inside list-disc" {...props} />,
                                            ol: (props) => <ol className="my-2 ml-4 list-inside list-decimal" {...props} />,
                                            li: (props) => <li className="my-1" {...props} />,
                                            blockquote: (props) => (
                                                <blockquote className="my-4 border-l-4 border-gray-300 pl-4 text-gray-600 italic" {...props} />
                                            ),
                                            code: (props) => (
                                                <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm text-red-600" {...props} />
                                            ),
                                            pre: (props) => (
                                                <pre className="my-4 overflow-x-auto rounded bg-gray-900 p-4 text-sm text-white" {...props} />
                                            ),
                                            img: (props) => <img className="my-4 h-auto max-w-full rounded" {...props} />,
                                            strong: (props) => <strong className="font-bold" {...props} />,
                                            em: (props) => <em className="italic" {...props} />,
                                            hr: () => <hr className="my-6 border-t border-gray-300" />,
                                            br: () => <br />,
                                        }}
                                    >
                                        {value}
                                    </ReactMarkdown>
                                </div>
                            )}
                        </>
                    ) : (
                        <span className="">Welcome</span>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
