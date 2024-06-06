import { cva, VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const title = cva('', {
  variants: {
    size: {
      titleBig: [
        'scroll-m-20 text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl',
      ],
      title: [
        'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
      ],
      titleMedium: ['scroll-m-20 text-2xl font-semibold tracking-tight'],
      titleSmall: [
        'scroll-m-20 text-lg md:text-xl font-semibold tracking-tight',
      ],
    },
  },
  defaultVariants: {
    size: 'titleSmall',
  },
});

interface TitleProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof title> {
  as?: HeadingLevel;
}

const Heading: FC<TitleProps> = ({
  as: Component = 'h2',
  className,
  size,
  ...props
}) => {
  const classNames = twMerge(title({ size }), className);

  return <Component className={classNames} {...props} />;
};

export default Heading;
