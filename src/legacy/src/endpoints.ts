export const getAppEndpoint = (): string => {
  const frontEndEndpoint = process.env.FRONTEND_ENDPOINT;
  if (!frontEndEndpoint) {
    throw new Error('Invalid App Endpoint');
  }
  return frontEndEndpoint;
};
