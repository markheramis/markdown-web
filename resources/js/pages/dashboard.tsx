import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex max-h-[calc(100vh-28px)] flex-col gap-y-5 overflow-y-auto text-sm">
                <div className="flex flex-1 flex-col gap-4 rounded-xl px-20">
                    <h1 className="text-lg">Title 1</h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eveniet omnis dolor, labore recusandae animi nostrum doloremque,
                    enim, dicta qui sunt deleniti ipsa quisquam architecto minus in vero tempore aperiam? Et expedita voluptate laborum, modi beatae
                    assumenda at ipsa consequatur exercitationem cumque perferendis cupiditate aliquid eum velit eius! Tempora pariatur placeat
                    consequuntur minima deleniti voluptate quia labore quaerat consectetur facere! Quod neque laboriosam modi eius saepe est rem
                    doloremque dolores molestias quidem in consectetur, eaque voluptatum esse fugit rerum commodi, fuga dolorum qui ad! Ex praesentium
                    veniam corporis esse fuga. Fuga facilis ullam repudiandae sequi laudantium nobis explicabo. Doloribus error magnam eos laborum
                    iure officiis earum vero expedita dignissimos quaerat. Veritatis nesciunt eius illum. Totam cumque dolores dolorum vitae eius?
                    Accusantium laboriosam sed ipsum recusandae aut? Quia, voluptatum. Maxime esse ut nostrum, earum nihil alias modi provident
                    voluptate id voluptatem nisi, veritatis libero architecto fuga magnam necessitatibus, maiores consequatur! Soluta? Ratione ex amet
                    tempora porro, et quasi ipsum soluta voluptas dolorum iste culpa maxime molestiae enim voluptates officia architecto suscipit
                    atque dolorem esse nobis at quisquam doloremque cumque? Veritatis, nisi. Neque vitae, modi id saepe quis exercitationem
                    accusantium in repellendus officiis eum beatae molestias ipsum iste facere dignissimos obcaecati ipsam dolor aliquam harum.
                    Aperiam corporis sint eum sunt veritatis tempora. Dolor repellendus illo ab, consectetur assumenda esse vitae inventore eligendi
                    ullam ipsum consequuntur dolorum vel magni, harum maxime fugit minus nisi rerum sapiente reprehenderit possimus reiciendis
                    officia! Earum, necessitatibus maxime? Unde excepturi repellendus ratione inventore facilis doloremque laborum alias odit, quos a.
                    Error voluptatibus, natus quam deserunt, a sapiente enim suscipit nam repellendus debitis temporibus rerum deleniti cum adipisci
                    repudiandae. Vero, esse quia voluptatem earum dolorem officiis! Eveniet perspiciatis natus quos provident! Quia ut, ab quidem, ea
                    sint tenetur impedit est eaque, sequi dolorem natus perspiciatis pariatur repellat illum eveniet?
                </div>
                <div className="flex flex-1 flex-col gap-4 rounded-xl px-20">
                    <h1 className="text-lg">Title 2</h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eveniet omnis dolor, labore recusandae animi nostrum doloremque,
                    enim, dicta qui sunt deleniti ipsa quisquam architecto minus in vero tempore aperiam? Et expedita voluptate laborum, modi beatae
                    assumenda at ipsa consequatur exercitationem cumque perferendis cupiditate aliquid eum velit eius! Tempora pariatur placeat
                    consequuntur minima deleniti voluptate quia labore quaerat consectetur facere! Quod neque laboriosam modi eius saepe est rem
                    doloremque dolores molestias quidem in consectetur, eaque voluptatum esse fugit rerum commodi, fuga dolorum qui ad! Ex praesentium
                    veniam corporis esse fuga. Fuga facilis ullam repudiandae sequi laudantium nobis explicabo. Doloribus error magnam eos laborum
                    iure officiis earum vero expedita dignissimos quaerat. Veritatis nesciunt eius illum. Totam cumque dolores dolorum vitae eius?
                    Accusantium laboriosam sed ipsum recusandae aut? Quia, voluptatum. Maxime esse ut nostrum, earum nihil alias modi provident
                    voluptate id voluptatem nisi, veritatis libero architecto fuga magnam necessitatibus, maiores consequatur! Soluta? Ratione ex amet
                    tempora porro, et quasi ipsum soluta voluptas dolorum iste culpa maxime molestiae enim voluptates officia architecto suscipit
                    atque dolorem esse nobis at quisquam doloremque cumque? Veritatis, nisi. Neque vitae, modi id saepe quis exercitationem
                    accusantium in repellendus officiis eum beatae molestias ipsum iste facere dignissimos obcaecati ipsam dolor aliquam harum.
                    Aperiam corporis sint eum sunt veritatis tempora. Dolor repellendus illo ab, consectetur assumenda esse vitae inventore eligendi
                    ullam ipsum consequuntur dolorum vel magni, harum maxime fugit minus nisi rerum sapiente reprehenderit possimus reiciendis
                    officia! Earum, necessitatibus maxime? Unde excepturi repellendus ratione inventore facilis doloremque laborum alias odit, quos a.
                    Error voluptatibus, natus quam deserunt, a sapiente enim suscipit nam repellendus debitis temporibus rerum deleniti cum adipisci
                    repudiandae. Vero, esse quia voluptatem earum dolorem officiis! Eveniet perspiciatis natus quos provident! Quia ut, ab quidem, ea
                    sint tenetur impedit est eaque, sequi dolorem natus perspiciatis pariatur repellat illum eveniet?
                </div>
            </div>
        </AppLayout>
    );
}
