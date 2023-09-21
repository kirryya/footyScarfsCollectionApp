import { ComponentPropsWithoutRef } from 'react';

// @ts-ignore
import s from './style-wrapper.module.scss';

import { ReturnComponentType } from '@/types';

type Props = ComponentPropsWithoutRef<'div'>;
export const ContainerWrapper = (props: Props): ReturnComponentType => {
  const { children } = props;

  return <div className={s.wrapper}>{children}</div>;
};
