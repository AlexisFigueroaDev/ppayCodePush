import React, { createContext, useContext, useMemo } from 'react';

type TrackFunction = (name: string, params: object) => void;

export const TrackingContext = createContext<TrackingConfigInterface>({
  logger: () => {},
  scope: 'MISSING SCREEN NAME PROVIDER OR NOT INITIALIZED',
});

export const useTrackingContextFunction = (
  func: (...args: any[]) => void,
  name: string,
  params: object,
): ((...args: any[]) => void) => {
  const { logger, scope } = useContext(TrackingContext);

  const _func: () => void = (...args: any[]) => {
    logger(name, {
      ...params,
      screen_name: scope,
    });

    if (func) {
      func(...args);
    }
  };

  return _func;
};

interface TrackingProviderProps {
  children: React.ReactNode;
  logger: TrackFunction;
  scope: string;
}

interface TrackingConfigInterface {
  /** @function: this should */
  logger: TrackFunction;
  /** @function: should return a unique id to recognize current scope, ex: route name */
  scope: string;
}

export const TrackingProvider: React.FC<TrackingProviderProps> = ({
  children,
  logger,
  scope,
}) => {
  const trackConfigValue = useMemo(() => ({ logger, scope }), [logger, scope]);
  return (
    <TrackingContext.Provider value={trackConfigValue}>
      {children}
    </TrackingContext.Provider>
  );
};
