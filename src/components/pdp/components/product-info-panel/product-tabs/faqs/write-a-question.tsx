import { Button } from '@/components/common/ui/button';
import { Input } from '@/components/common/ui/input';

export default function WriteAQuestion() {
  return (
    <div className="flex flex-col lg:flex-row gap-2 mt-4">
      <Input
        className="w-full lg:w-3/4"
        type="text"
        placeholder="Preguntar al vendedor"
      />
      <Button className="font-semibold text-sm w-full lg:w-1/4">Enviar</Button>
    </div>
  );
}
