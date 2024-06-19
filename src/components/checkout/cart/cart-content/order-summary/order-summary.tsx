export default function OrderSummary() {
  const subtotal = 20000;
  const discount = 2000;
  const total = 50000;

  const rowClasses = 'flex justify-between items-center';
  const labelClasses = 'font-medium';
  const valueClasses = 'font-bold';

  return (
    <div className="flex flex-col p-4 gap-4 text-sm border rounded-lg mb-4">
      <div className={rowClasses}>
        <p className={labelClasses}>Subtotal:</p>
        <p className="font-semibold">${subtotal}</p>
      </div>
      <div className={rowClasses}>
        <p className={labelClasses}>Descuentos:</p>
        <p className={valueClasses}>${discount}</p>
      </div>
      <div className={rowClasses}>
        <p className={labelClasses}>Gastos de envio:</p>
        <p className={valueClasses}>${discount}</p>
      </div>
      <div className={rowClasses}>
        <p className={labelClasses}>Total:</p>
        <p className={valueClasses}>${total}</p>
      </div>
    </div>
  );
}
