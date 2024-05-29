export type BannerType = {
	id: string;
	imgMobile: string | null | undefined;
	imgDesktop: string | null | undefined;
	mobileGif: string | null | undefined;
	desktopGif: string | null | undefined;
};

export const dummieData: BannerType[] = [
	{
		id: '1',
		imgMobile: null,
		imgDesktop: null,
		mobileGif:
			'https://www.samsam.co/_next/image?url=https%3A%2F%2Fodcmbzocropvzmbsarer.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fproduct-images%2F63255d8e-262f-4566-bf26-c7ff4c7eadd7.gif&w=750&q=75',
		desktopGif:
			'https://www.samsam.co/_next/image?url=https%3A%2F%2Fodcmbzocropvzmbsarer.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fproduct-images%2F63255d8e-262f-4566-bf26-c7ff4c7eadd7.gif&w=750&q=75',
	},
	{
		id: '2',
		imgMobile:
			'https://http2.mlstatic.com/D_NQ_NP806298-MLA75988533699_042024-B.webp',
		imgDesktop:
			'https://http2.mlstatic.com/D_NQ_NP806298-MLA75988533699_042024-B.webp',
		mobileGif: null,
		desktopGif: null,
	},
];
