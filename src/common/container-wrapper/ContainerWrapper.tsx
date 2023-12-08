import { ComponentPropsWithoutRef } from 'react';

import s from './style-wrapper.module.scss';

import { ReturnComponentType } from '@/types';

type Props = ComponentPropsWithoutRef<'div'>;
export const ContainerWrapper = (props: Props): ReturnComponentType => {
  const { children } = props;

  // @ts-ignore
  return <div className={s.wrapper}>{children}</div>;
};
