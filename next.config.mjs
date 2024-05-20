import { withStoreConfig } from './store-config.js';
import fs from 'fs';
import path from 'path';

const storePath = path.join(process.cwd(), 'store.config.json');

const storeData = fs.readFileSync(storePath, 'utf-8');
const store = JSON.parse(storeData);

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withStoreConfig({
    features: store.features,
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
            },
            {
                protocol: "https",
                hostname: "www.samsam.co",
            },
            {
                protocol: "https",
                hostname: "http2.mlstatic.com",
            },
            {
                protocol: "https",
                hostname: "mac-center.com.do",
            },
        ],
    },
});

console.log('next.config.js', JSON.stringify(nextConfig, null, 2));

export default nextConfig;
