import VendorTermsAndConditions from './vendor-terms-and-conditions';

export default function ProductAdditionalInformation() {
  return (
    <div className="w-full flex flex-col gap-2 text-sm">
      <h3 className="text-neutral-900 font-bold">Informacion adicional</h3>

      <div>
        Garantía del producto: <span className="font-bold">6 meses.</span>
      </div>
      <VendorTermsAndConditions />
    </div>
  );
}
