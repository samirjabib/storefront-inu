import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import SellerHeaderMobile from '@/components/seller/seller-header/seller-header-mobile';
import ProductVitrine from '@/components/pdp/components/product-vitrine/product-vitrine';
import ProductInfoPanel from '@/components/pdp/components/product-info-panel/product-info-panel';
import { listRegions } from '@/lib/actions/regions';
import { getProductsList } from '@/lib/actions/collections';
import { getProductByHandle } from '@/lib/actions/products';

type Props = {
  params: { countryCode: string; handle: string };
};

export async function generateStaticParams() {
  try {
    const countryCodes = await listRegions().then((regions) =>
      regions?.map((r) => r.countries.map((c) => c.iso_2)).flat()
    );

    if (!countryCodes) {
      return null;
    }

    const products = await Promise.all(
      countryCodes.map((countryCode) => {
        return getProductsList({ countryCode });
      })
    ).then((responses) =>
      responses.map(({ response }) => response.products).flat()
    );

    const staticParams = countryCodes
      ?.map((countryCode) =>
        products.map((product) => ({
          countryCode,
          handle: product.handle,
        }))
      )
      .flat();

    return staticParams;
  } catch (error) {
    console.error('error on generateStaticParams', error);
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { handle } = params;

  const { product } = await getProductByHandle(handle).then(
    (product) => product
  );

  if (!product) {
    notFound();
  }

  return {
    title: `${product.title} | Medusa Store`,
    description: `${product.title}`,
    openGraph: {
      title: `${product.title} | Medusa Store`,
      description: `${product.title}`,
      images: product.thumbnail ? [product.thumbnail] : [],
    },
  };
}

export default async function PdpPage({ params }: Props) {
  return (
    <main className="w-full">
      <SellerHeaderMobile />
      <div className="flex flex-col w-full lg:flex-row gap-6 py-20 lg:py-24 px-4 max-w-screen-xl mx-auto">
        <ProductVitrine />
        <ProductInfoPanel />
      </div>
    </main>
  );
}
