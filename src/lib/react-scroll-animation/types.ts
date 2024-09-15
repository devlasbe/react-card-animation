export type StartingPoint = 'top' | 'right' | 'bottom' | 'left';

export type ScrollAnimationTypes = {
  startingPoint?: StartingPoint;
  duration?: number;
  amount?: 'sm' | 'md' | 'lg' | 'xl';
  delay?: number;
  repeat?: boolean;
};

export type ScrollAnimationPropsType = {
  children: React.ReactElement;
} & ScrollAnimationTypes;
