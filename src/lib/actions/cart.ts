import { StorePostCartsCartReq } from '@medusajs/medusa';
import { medusaClient } from '../config';
import getMedusaHeaders from '../utils/get-medusa-headers';
import medusaError from '../utils/medusa-error';
import { cache } from 'react';
import { cookies } from 'next/headers';
import { getRegion } from './regions';
import { revalidateTag } from 'next/cache';

export async function createCart(data = {}) {
  const headers = getMedusaHeaders(['cart']);

  return medusaClient.carts
    .create(data, headers)
    .then(({ cart }) => cart)
    .catch((err) => {
      console.log(err);
      return null;
    });
}

export async function getOrSetCart(countryCode: string) {
  const cartId = cookies().get('_medusa_cart_id')?.value;
  let cart;

  if (cartId) {
    cart = await getCart(cartId).then((cart) => cart);
  }

  const region = await getRegion(countryCode);

  if (!region) {
    return null;
  }

  const region_id = region.id;

  if (!cart) {
    cart = await createCart({ region_id }).then((res) => res);
    cart &&
      cookies().set('_medusa_cart_id', cart.id, {
        maxAge: 60 * 60 * 24 * 7,
        httpOnly: true,
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
      });
    revalidateTag('cart');
  }

  if (cart && cart?.region_id !== region_id) {
    await updateCart(cart.id, { region_id });
    revalidateTag('cart');
  }

  return cart;
}

export async function updateCart(cartId: string, data: StorePostCartsCartReq) {
  const headers = getMedusaHeaders(['cart']);

  return medusaClient.carts
    .update(cartId, data, headers)
    .then(({ cart }) => cart)
    .catch((error) => medusaError(error));
}

export const getCart = cache(async function (cartId: string) {
  const headers = getMedusaHeaders(['cart']);

  return medusaClient.carts
    .retrieve(cartId, headers)
    .then(({ cart }) => cart)
    .catch((err) => {
      console.log(err);
      return null;
    });
});

export async function addItem({
  cartId,
  variantId,
  quantity,
}: {
  cartId: string;
  variantId: string;
  quantity: number;
}) {
  const headers = getMedusaHeaders(['cart']);

  return medusaClient.carts.lineItems
    .create(cartId, { variant_id: variantId, quantity }, headers)
    .then(({ cart }) => cart)
    .catch((err) => {
      console.log(err);
      return null;
    });
}

export async function updateItem({
  cartId,
  lineId,
  quantity,
}: {
  cartId: string;
  lineId: string;
  quantity: number;
}) {
  const headers = getMedusaHeaders(['cart']);

  return medusaClient.carts.lineItems
    .update(cartId, lineId, { quantity }, headers)
    .then(({ cart }) => cart)
    .catch((err) => medusaError(err));
}

export async function addToCart({
  variantId,
  quantity,
  countryCode,
}: {
  variantId: string;
  quantity: number;
  countryCode: string;
}) {
  const cart = await getOrSetCart(countryCode).then((cart) => cart);

  if (!cart) {
    return 'Missing cart ID';
  }

  if (!variantId) {
    return 'Missing product variant ID';
  }

  try {
    await addItem({ cartId: cart.id, variantId, quantity });
    revalidateTag('cart');
  } catch (e) {
    return 'Error adding item to cart';
  }
}
