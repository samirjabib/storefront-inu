export default function ProductName({
  product_name,
}: {
  product_name: string | undefined;
}) {
  return <h1 className="h1 card-foreground capitalize">{product_name}</h1>;
}
