import { assets } from '../../../public/assets/assets';

export type Product_Mock = {
	id: number;
	img_url: string;
	product_name: string;
	price: string;
	has_disccount: boolean;
	price_with_disccount: string;
	disccount_percentage: number;
	free_delivery: boolean;
	description?: string; // Optional property example
};
export const collection_mock = [
	{
		id: 1,
		img_url: assets.iphone,
		product_name: 'Apple iPhone 15 (128 GB) - Blanco',
		price: '3.189.000',
		has_disccount: true,
		price_with_disccount: '4.469.900',
		disccount_percentage: 24,
		free_delivery: true,
	},
	{
		id: 2,
		img_url: assets.ps5,
		product_name:
			'Consola Sony Playstation 5 Slim Version Lector Disco Japonesa Ps5 1TB SSD Blanco',
		price: '2.989.900',
		has_disccount: true,
		price_with_disccount: '2.297.400',
		disccount_percentage: 23,
		free_delivery: true,
	},
	{
		id: 3,
		img_url: assets.smart_home,
		product_name:
			'Google Nest Hub 2nd Gen con asistente virtual Google Assistant, pantalla integrada de 7" charcoal 110V/220V',
		price: '520.000',
		price_with_disccount: '420.000',
		has_disccount: false,
		disccount_percentage: 19,
		free_delivery: false,
	},
	{
		id: 4,
		img_url: assets.gafas,
		product_name:
			'Lentes De Realidad Virtual Vr Oculus Quest 2 Advanced 128 Gb Color Blanco',
		price: '520.000',
		has_disccount: false,
		price_with_disccount: '1.470.030',
		disccount_percentage: 43,
		free_delivery: false,
	},
	{
		id: 5,
		img_url: assets.iphone,
		product_name: 'Apple iPhone 15 (128 GB) - Blanco',
		price: '3.189.000',
		has_disccount: true,
		price_with_disccount: '4.469.900',
		disccount_percentage: 24,
		free_delivery: true,
	},
	{
		id: 6,
		img_url: assets.ps5,
		product_name:
			'Consola Sony Playstation 5 Slim Version Lector Disco Japonesa Ps5 1TB SSD Blanco',
		price: '2.989.900',
		has_disccount: false,
		price_with_disccount: '2.297.400',
		disccount_percentage: 23,
		free_delivery: true,
	},
	{
		id: 7,
		img_url: assets.smart_home,
		product_name:
			'Google Nest Hub 2nd Gen con asistente virtual Google Assistant, pantalla integrada de 7" charcoal 110V/220V',
		price: '520.000',
		has_disccount: true,
		price_with_disccount: '420.000',
		disccount_percentage: 19,
		free_delivery: false,
	},
	{
		id: 8,
		img_url: assets.gafas,
		product_name:
			'Lentes De Realidad Virtual Vr Oculus Quest 2 Advanced 128 Gb Color Blanco',
		price: '3.189.000',
		has_disccount: true,
		price_with_disccount: '1.470.030',
		disccount_percentage: 43,
		free_delivery: false,
	},
	{
		id: 9,
		img_url: assets.iphone,
		product_name: 'Apple iPhone 15 (128 GB) - Blanco',
		price: '3.189.000',
		has_disccount: false,
		price_with_disccount: '4.469.900',
		disccount_percentage: 24,
		free_delivery: false,
	},
	{
		id: 10,
		img_url: assets.ps5,
		product_name:
			'Consola Sony Playstation 5 Slim Version Lector Disco Japonesa Ps5 1TB SSD Blanco',
		price: '2.989.900',
		has_disccount: false,
		free_delivery: true,

		price_with_disccount: '2.297.400',
		disccount_percentage: 23,
	},
	{
		id: 11,
		img_url: assets.smart_home,
		free_delivery: true,

		product_name:
			'Google Nest Hub 2nd Gen con asistente virtual Google Assistant, pantalla integrada de 7" charcoal 110V/220V',
		price: '520.000',
		has_disccount: true,
		price_with_disccount: '420.000',
		disccount_percentage: 19,
	},
	{
		id: 12,
		img_url: assets.gafas,
		product_name:
			'Lentes De Realidad Virtual Vr Oculus Quest 2 Advanced 128 Gb Color Blanco',
		price: '520.000',
		has_disccount: true,
		price_with_disccount: '1.470.030',
		disccount_percentage: 43,
		free_delivery: false,
	},
	{
		id: 13,
		img_url: assets.iphone,
		product_name: 'Apple iPhone 15 (128 GB) - Blanco',
		price: '3.189.000',
		price_with_disccount: '4.469.900',
		disccount_percentage: 24,
		free_delivery: true,
	},
	{
		id: 14,
		img_url: assets.ps5,
		product_name:
			'Consola Sony Playstation 5 Slim Version Lector Disco Japonesa Ps5 1TB SSD Blanco',
		price: '2.989.900',
		price_with_disccount: '2.297.400',
		disccount_percentage: 23,
		free_delivery: false,
	},
	{
		id: 15,
		img_url: assets.smart_home,
		product_name:
			'Google Nest Hub 2nd Gen con asistente virtual Google Assistant, pantalla integrada de 7" charcoal 110V/220V',
		price: '520.000',
		price_with_disccount: '420.000',
		disccount_percentage: 19,
		free_delivery: true,
	},
	{
		id: 16,
		img_url: assets.gafas,
		product_name:
			'Lentes De Realidad Virtual Vr Oculus Quest 2 Advanced 128 Gb Color Blanco',
		price: '520.000',
		price_with_disccount: '1.470.030',
		disccount_percentage: 43,
		free_delivery: false,
	},
];
