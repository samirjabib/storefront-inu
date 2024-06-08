import PetAdoptionCard from '@/components/common/pet-adoption-card/pet-adoption-card';

export default function AdoptAPet() {
  return (
    <section>
      <h2>Adopta un peludito</h2>
      <div className="flex w-full">
        {Array.from({ length: 4 }).map(() => (
          <PetAdoptionCard />
        ))}
      </div>
    </section>
  );
}
