import { breakpoints, useWindowSize } from '@edx/paragon';
export function useIsOnMediumScreen() {
  var windowSize = useWindowSize();
  return breakpoints.large.maxWidth > windowSize.width && windowSize.width >= breakpoints.medium.minWidth;
}
export function useIsOnLargeScreen() {
  var windowSize = useWindowSize();
  return windowSize.width >= breakpoints.extraLarge.minWidth;
}
//# sourceMappingURL=hook.js.map