import { CornerDownRight } from 'lucide-react';
import WriteAQuestion from './write-a-question';
import { Separator } from '@/components/common/ui/separator';
import { Button } from '@/components/common/ui/button';

export default function ProductFaqs() {
  return (
    <div className="flex flex-col gap-4">
      <WriteAQuestion />
      <h3 className="text-neutral-900 text-base font-semibold ">
        Ultimas realizadas
      </h3>
      <div className="flex flex-col gap-4">
        {Array.from({ length: 4 }).map((faq) => (
          <div className="flex flex-col gap-2">
            <p className="text-sm text-neutral-900">
              Este alimento se lo puedo dar a mi Doberman?
            </p>
            <div className="flex items-center">
              <CornerDownRight size={12} className="text-neutral-500" />
              <p className="ml-4 text-neutral-500 text-sm">
                Si claro, se lo peudes racionar en dos porciones un basito
              </p>
            </div>
            <Separator />
          </div>
        ))}
      </div>
      <Button className="text-neutral-900" variant={'outline'}>
        Ver todas las preguntas.
      </Button>
    </div>
  );
}
