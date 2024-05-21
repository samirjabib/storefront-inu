import { notFound } from 'next/navigation';

import Pdp from '@/components/pdp/pdp';

export default async function PdpPage() {
	return <Pdp />;
}
